describe("Invoify Actions - Create New Invoice", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");   
    })

    it('create new invoice', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Action New Invoice
        cy.contains('button','New Invoice').click()
        // cy.contains("Are you absolutely sure?").should("be.visible");
        // cy.contains("Create new invoice").click();

        // Validasi text field tidak mempunyai value
        cy.get('input[name="invoiceNumber"]').should("have.value", ""); // Sesuaikan dengan input yang ada
    })

});
