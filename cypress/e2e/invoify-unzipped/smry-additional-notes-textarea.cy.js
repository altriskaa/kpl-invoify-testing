describe("5. Summary - Input additional notes in textarea", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','5. Summary')
            .dblclick()      
    })

    // TEXT AREA
    it('input additional notes in textarea', () => {
        cy.get('textarea[name="details.additionalNotes"]')
            // .type("Thank you for your business", { delay: 100 })
            .type("Thank you for your business")
        cy.get('textarea[name="details.additionalNotes"]')
            .should('have.value', 'Thank you for your business')
    })

    

});
