describe("Invoify Actions", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");   
    })

    it('create new invoice', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Action New Invoice
        cy.contains('button','New Invoice').click()
        cy.contains("Are you absolutely sure?").should("be.visible");
        cy.contains("Create new invoice").click();

        // Validasi text field tidak mempunyai value
        cy.get('input[name="invoiceNumber"]').should("have.value", ""); // Sesuaikan dengan input yang ada
    })

    it('export invoice to csv', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Action New Invoice
        cy.contains('button','Export Invoice').click()
        cy.contains("Export the invoice").should("be.visible");
        cy.contains("Export as CSV").click();

        // Validasi CSV sudah masuk di sistem
        const fileName = 'invoice.csv'; // Sesuaikan dengan nama file yang dihasilkan aplikasi
        cy.readFile(`cypress/downloads/${fileName}`).should('exist');
    })

    it('generate invoice to pdf', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Action Generate PDF
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Download').click();

        // Validasi
        const fileName = 'invoice.pdf'; // Sesuaikan dengan nama file yang dihasilkan aplikasi
        cy.readFile(`cypress/downloads/${fileName}`).should('exist');
    })

    it('save, load, and generate invoice', () => {
        // Fill Form
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')

        // Save Invoice
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Save').click();

        // Refresh the page
        cy.visit("http://localhost:3000");   

        // Load invoice
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Load Invoice').click();
        cy.contains("Saved Invoices").should("be.visible");
        cy.contains('button', 'Load & Generate').click();

        // Validasi invoice terisi dengan value dan di generate ke PDF
        cy.get('input[name="sender.name"]').should('have.value', 'John Doe')
        cy.contains('button','Generate PDF').click()
        cy.contains("Final PDF:").should("be.visible");
        cy.contains('button', 'Download').click();
        const fileName = 'invoice.pdf'; 
        cy.readFile(`cypress/downloads/${fileName}`).should('exist');
    })

});
