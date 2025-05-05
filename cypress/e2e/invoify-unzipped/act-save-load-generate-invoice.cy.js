describe("Invoify Actions - Save, Load, and Generate Invoice", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");   
    })

    it('save, load, and generate invoice', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Save Invoice
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Save').click();

        // Refresh the page
        cy.visit("http://localhost:3000");   

        // Load invoice
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Load Invoice').click();
        cy.contains("Saved Invoices").should("be.visible");
        cy.contains('button', 'Load & Generate').click();

        // Validasi invoice terisi dengan value dan di generate ke PDF
        cy.get('input[name="sender.name"]').should('have.value', 'John Doe')
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Download').click();
        const fileName = 'invoice.pdf'; 
        cy.readFile(`cypress/downloads/${fileName}`).should('exist');
    })

});
