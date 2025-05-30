describe("Login Test", () => {
  it("should login successfully and read the correct username from profile header", () => {
    cy.deleteOne({ username: "testUser" }, { collection: "users" });

    cy.visit("http://127.0.0.1:5173/register");

    cy.get("input[name='username']").type("testUser");
    cy.get("input[name='password']").type("123456");

    cy.get("button[type='submit']").click();

    cy.wait(1000);

    cy.visit("http://127.0.0.1:5173/login");

    cy.get("input[name='username']").type("testUser");
    cy.get("input[name='password']").type("123456");

    cy.get("button[type='submit']").click();

    cy.wait(1000);
    cy.visit("http://127.0.0.1:5173/profile");
    cy.get("#test-header").should("contain", "Welcome testUser!");
  });
});
