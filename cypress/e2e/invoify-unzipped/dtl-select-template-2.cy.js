describe("2. Invoice Details - Select template 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','2. Invoice Details')
            .dblclick()      
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
