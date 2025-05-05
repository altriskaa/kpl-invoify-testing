describe("Invoify Actions - Generate Invoice to PDF", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");   
    })

    it('generate invoice to pdf', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Action Generate PDF
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Download').click();

        // Validasi
        const fileName = 'invoice.pdf'; // Sesuaikan dengan nama file yang dihasilkan aplikasi
        cy.readFile(`cypress/downloads/${fileName}`).should('exist');
    })

});
