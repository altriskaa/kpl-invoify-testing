describe("2. Invoice Details", () => {
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

    // SELECT TEMPLATE 1 -> TEMPLATE 2
    it("should select Template 2 when clicking the button", () => {
        // Klik tombol "Select" di Template 2
        cy.contains("p", "Template 2") 
        .closest("div") 
        .find("button:contains('Select')") 
        .click();
    });
});
