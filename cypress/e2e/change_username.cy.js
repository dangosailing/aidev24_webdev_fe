describe("Login Test", () => {
  it("Create new user, log them in, check their username in the profile header and update their username so that it displays the new username in the profile header", () => {

    let filter = {"username": "testUser"}

    cy.deleteOne(filter, {collection: 'users'})

    cy.visit("http://localhost:5173/register");

    cy.get("input[name='username']").type("testUser");
    cy.get("input[name='password']").type("123456");

    cy.get("button[type='submit']").click();

    cy.wait(1000);

    cy.visit("http://localhost:5173/login");

    cy.get("input[name='username']").type("testUser");
    cy.get("input[name='password']").type("123456");

    cy.get("button[type='submit']").click();
    
    cy.wait(1000);
    
    cy.get("#test-header").should("contain", "Welcome testUser!");

    cy.get('[data-testid="test-account"]').click();

    cy.get("input[name='new_username']").type("Daniel");
    cy.get("button[type='submit']").click();

    cy.get('[data-testid="test-profile"]').click();

    cy.get("#test-header").should("contain", "Welcome Daniel!");
  });
});