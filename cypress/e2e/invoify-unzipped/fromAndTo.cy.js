describe("From and To Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan 
    })

    it('input fields', () => {

        cy.get('input[name="sender.name"]')
            .type("johno", { delay: 100 })
        cy.get('input[name="sender.name"]')
            .should('have.value', 'johno')
    })

});
