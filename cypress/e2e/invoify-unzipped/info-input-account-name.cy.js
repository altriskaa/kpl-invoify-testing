describe("4. Payment Info - Input account name", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','4. Payment Info')
            .dblclick()      
    })

    it('input account name', () => {
        cy.get('input[name="details.paymentInformation.accountName"]')
            // .type("John Doe", { delay: 100 })
            .type("John Doe")
        cy.get('input[name="details.paymentInformation.accountName"]')
            .should('have.value', 'John Doe')
    })

});
