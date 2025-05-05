describe("2. Invoice Details - Input Invoice Number", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','2. Invoice Details')
            .dblclick()      
    })

    // INPUT
    it('input invoice number', () => {
        cy.get('input[name="details.invoiceNumber"]')
            // .type("INV-2024-001", { delay: 100 })
            .type("INV-2024-001")
            cy.get('input[name="details.invoiceNumber"]')
            .should('have.value', 'INV-2024-001')
    })

});
