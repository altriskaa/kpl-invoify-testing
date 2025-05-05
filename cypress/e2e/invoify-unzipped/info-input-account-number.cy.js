describe("4. Payment Info - Input account number", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','4. Payment Info')
            .dblclick()      
    })

    it('input account number', () => {
        cy.get('input[name="details.paymentInformation.accountNumber"]')
            .type("445566998877", { delay: 100 })
        cy.get('input[name="details.paymentInformation.accountNumber"]')
            .should('have.value', '445566998877')
    })


});
