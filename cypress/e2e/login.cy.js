describe('Login Test', () => {
    it('should login successfully and set the token cookie', () => {
        cy.visit('http://localhost:5173/register')

        cy.get("input[name='username']").type('hejhå')
        cy.get("input[name='password']").type('123456')

        cy.get("button[type='submit']").click()

        cy.wait(500)

        cy.visit('http://localhost:5173/login')

        cy.get("input[name='username']").type('1234')
        cy.get("input[name='password']").type('123456')

        cy.get("button[type='submit']").click()

        cy.wait(500)
        cy.visit('http://localhost:5173/profile')
    })
})