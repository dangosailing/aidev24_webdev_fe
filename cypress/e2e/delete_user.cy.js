describe('User Flow: Register, Login, Delete, Fail to Re-login whit same user', () => {
  const username = `testuser_81`;
  const password = 'Testpass123';

  it('should register, login, delete user and fail to login again', () => {
    
    cy.visit('http://127.0.0.1:5173/register');
    cy.wait(500);

    cy.get("input[name='username']").type(username);
    cy.wait(500);

    cy.get("input[name='password']").type(password);
    cy.wait(500);

    cy.get("button[type='submit']").click();
    cy.wait(500);


    cy.visit('http://127.0.0.1:5173/login');
    cy.wait(500);


    cy.get("input[name='username']").type(username);
    cy.wait(500);

    cy.get("input[name='password']").type(password);
    cy.wait(500);

    cy.get("button[type='submit']").click();
    cy.wait(500);


    cy.visit('http://127.0.0.1:5173/account');
    cy.wait(500);


    cy.get("#test-delete-user").click();
    cy.wait(1000);


    cy.visit('http://127.0.0.1:5173/login');
    cy.wait(500);

    cy.get("input[name='username']").type(username);
    cy.wait(500);

    cy.get("input[name='password']").type(password);
    cy.wait(500);

    cy.get("button[type='submit']").click();
    cy.wait(500);


    cy.url().should('include', '/login');
    cy.contains("failed : Invalid username or password").should('exist');
  });
});