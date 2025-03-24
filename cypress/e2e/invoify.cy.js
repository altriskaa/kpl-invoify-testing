describe('Invoify Automated Testing', () => {
    describe('My First Test', () => {
        it('Visits the Invoify', () => {
            cy.visit('http://localhost:3000/')
          })
      })
    // beforeEach(() => {
    //   cy.visit('http://localhost:3000/'); // Pastikan URL benar
    // });
  
    // it('Should create an invoice successfully', () => {
    //   cy.get('input[name="clientName"]').type('John Doe');
    //   cy.get('input[name="clientEmail"]').type('john@example.com');
    //   cy.get('input[name="invoiceNumber"]').type('INV-123');
    //   cy.get('input[name="invoiceDate"]').type('2025-03-24');
  
    //   cy.get('#add-item-button').click();
    //   cy.get('input[name="itemName"]').type('Web Development');
    //   cy.get('input[name="itemPrice"]').type('1000');
  
    //   cy.contains('Save Invoice').click();
    //   cy.contains('Invoice saved successfully').should('be.visible');
    // });
  
    // it('Should retrieve saved invoices', () => {
    //   cy.contains('Saved Invoices').click();
    //   cy.contains('INV-123').should('be.visible');
    // });
  
    // it('Should download invoice in PDF', () => {
    //   cy.contains('Download').click();
    //   cy.contains('PDF').click();
    //   cy.wait(2000);
    //   cy.verifyDownload('invoice_INV-123.pdf'); // Pastikan Cypress mendukung plugin download verification
    // });
  
    // it('Should export invoice in JSON format', () => {
    //   cy.contains('Export').click();
    //   cy.contains('JSON').click();
    //   cy.wait(2000);
    //   cy.verifyDownload('invoice_INV-123.json');
    // });
  
    // it('Should switch invoice template', () => {
    //   cy.contains('Template').click();
    //   cy.contains('Template 2').click();
    //   cy.get('.invoice-preview').should('have.class', 'template-2');
    // });
  
    // it('Should update live preview on input change', () => {
    //   cy.get('input[name="clientName"]').clear().type('Alice Smith');
    //   cy.get('.invoice-preview').contains('Alice Smith').should('be.visible');
    // });
  
    // it('Should send invoice via email', () => {
    //   cy.contains('Send via Email').click();
    //   cy.get('input[name="recipientEmail"]').type('recipient@example.com');
    //   cy.contains('Send').click();
    //   cy.contains('Email sent successfully').should('be.visible');
    // });
  });
  