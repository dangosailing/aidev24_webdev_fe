describe("Change Username Test", () => {
  it("Register a new user, logs them in, verifies their username on the profile page, updates the username, and confirms the updated username is displayed on the profile page", () => {

    let filter = {"username": "testUser"}

    cy.deleteOne(filter, {collection: 'users'})

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
    
    cy.get("#test-header").should("contain", "Welcome testUser!");

    cy.get('[data-testid="test-account"]').click();

    cy.get("input[name='new_username']").type("Daniel");
    cy.get("button[type='submit']").click();

    cy.get('[data-testid="test-profile"]').click();

    cy.get("#test-header").should("contain", "Welcome Daniel!");
  });
});