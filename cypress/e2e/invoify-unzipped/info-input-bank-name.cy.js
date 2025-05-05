describe("4. Payment Info - Input bank name", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','4. Payment Info')
            .dblclick()      
    })

    // INPUT
    it('input bank name', () => {
        cy.get('input[name="details.paymentInformation.bankName"]')
            .type("Bank Inc.", { delay: 100 })
        cy.get('input[name="details.paymentInformation.bankName"]')
            .should('have.value', 'Bank Inc.')
    })


});
