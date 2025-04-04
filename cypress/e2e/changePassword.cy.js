describe('Change password', () => {
    it('Should login and change password and then login again with new password', () => {

        cy.deleteOne({"username" : "newUser"}, {"collection" : "users"})

        cy.visit('http://127.0.0.1:5173/register')

        cy.get("input[name='username']").type('newUser')
        cy.get("input[name='password']").type('1234567')

        cy.get("button[type='submit']").click()

        cy.wait(1000)

        cy.visit('http://127.0.0.1:5173/login')

        cy.get("input[name='username']").type('newUser')
        cy.get("input[name='password']").type('1234567')

        cy.get("button[type='submit']").click()

        cy.wait(1000)
        cy.visit('http://127.0.0.1:5173/profile')
        cy.get('#test-header').should('contain', 'Welcome newUser!')

        cy.get('[data-testid="test-account"]').click();

        cy.wait(1000)

        cy.get('#test-change-password').click();

        cy.wait(1000)


        cy.get("input[name='old_password']").type('1234567')
        cy.get("input[name='new_password']").type('wasdwasd')
        cy.get("input[name='confirm_password']").type('wasdwasd')
        cy.get('#test-form-submit').click()
        
        cy.wait(1000)

        cy.get('#test-logout').click();

        cy.wait(1000)

        cy.get('[data-testid="test-login"]').click();

        cy.get("input[name='username']").type('newUser')
        cy.get("input[name='password']").type('wasdwasd')
        cy.get("button[type='submit']").click()

        cy.wait(1000)

        cy.visit('http://127.0.0.1:5173/profile')
        cy.get('#test-header').should('contain', 'Welcome newUser!') 
    })
})