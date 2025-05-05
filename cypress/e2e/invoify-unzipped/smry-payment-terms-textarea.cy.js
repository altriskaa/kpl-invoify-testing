describe("5. Summary  - Input additional notes in textarea", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','5. Summary')
            .dblclick()      
    })

    it('input payment terms in textarea', () => {
        cy.get('textarea[name="details.paymentTerms"]')
            // .type("Net 30", { delay: 100 })
            .type("Net 30")
            cy.get('textarea[name="details.paymentTerms"]')
            .should('have.value', 'Net 30')
    })


});
