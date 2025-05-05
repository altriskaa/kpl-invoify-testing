describe("Invoice Details", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','2. Invoice Details')
            .dblclick()      
    })

    
    it("should select Template 2 when clicking the button", () => {
        // Klik tombol "Select" di Template 2
        cy.contains("p", "Template 2") // Cari <p> yang berisi "Template 2"
        .parents(".flex flex-col flex-shrink-0 mr-4 gap-y-3") // Naik ke div container template
        .find("button") // Cari tombol "Select" di dalamnya
        .click();
      

        // // Pastikan ikon centang muncul pada Template 2
        // cy.contains("div", "Template 2")
        // .parent()
        // .within(() => {
        //     cy.get("svg").should("exist");
        // });

        // // Pastikan form mencatat bahwa Template 2 dipilih
        // cy.window().its("document").then((doc) => {
        // const selectedTemplate = doc.querySelector(
        //     '[name="details.pdfTemplate"]'
        // )?.value;
        // expect(selectedTemplate).to.equal("2");
        // });
    });

    // it('input invoice number', () => {
    //     cy.get('input[name="details.invoiceNumber"]')
    //         .type("INV-2024-001", { delay: 100 })
    //     cy.get('input[name="details.invoiceNumber"]')
    //         .should('have.value', 'INV-2024-001')
    // })



    // it('select currency', () => {
    //     cy.get('[name="details.currency"]')
    //         .parent().click()
    //     cy.contains('Afghan Afghani (AFN)')
    //         .click()
    //     cy.get('[name="details.currency"]')
    //         .should('have.value', 'AFN');

    // })

    // it("should show validation errors when required fields are empty", () => {
    //     cy.contains("2. Invoice Details").click();

    //     // Pastikan error muncul jika invoice number kosong
    //     cy.get('input[name="details.invoiceNumber"]').clear().blur();
    //     cy.contains("Invoice number is required").should("be.visible");

    //     // Pastikan error muncul jika due date kosong
    //     cy.get('input[name="details.dueDate"]').clear().blur();
    //     cy.contains("Due date is required").should("be.visible");
    // });
});
