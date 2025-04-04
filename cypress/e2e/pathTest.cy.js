describe('pathTest', () => {
    it('Should register a new user with username and password, then log in. Go to Create path page then use the current location to create a new path with a timestamp. Save the path with a title. Then lastly navigate to user paths and verify that it has been saved correctly.', () => {
        
        cy.deleteMany({"username":"pathTesting"}, {collection: 'paths'})

        cy.visit("http://127.0.0.1:5173/register")

        cy.get("input[name='username']").type('pathTesting')
        cy.get("input[name='password']").type('pathTesting')

        cy.get("button[type='submit']").click()

        cy.wait(500)

        cy.visit("http://127.0.0.1:5173/login")

        cy.get("input[name='username']").type('pathTesting')
        cy.get("input[name='password']").type('pathTesting')

        cy.get("button[type='submit']").click()

        cy.wait(500)

        cy.visit("http://127.0.0.1:5173/create-path")

        cy.contains("button", "Use my current location").click();

        cy.wait(5000)

        cy.contains("button", "Start").click();
        cy.wait(1000)
        cy.contains("button", "Stop").click();
        cy.wait(2000)

        cy.get("input[name='title']").type('new_path');
        cy.contains("button", "Save path").click();
        cy.wait(5000)

        cy.visit("http://127.0.0.1:5173/user-paths")
        
        cy.contains("button", "View Path").click();
        cy.get("#test-runcard-title").should("contain", "new_path")

    })
})