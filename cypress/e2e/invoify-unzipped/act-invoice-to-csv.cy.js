describe("Invoify Actions - Export Invoice to CSV", () => {
    let start, end;

    beforeEach(() => {
        cy.visit("http://localhost:3000");   
    })

    it('export invoice to csv', () => {
        cy.then(() => {
            start = performance.now(); // Mulai hitung sebelum aksi
          });

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

        cy.then(() => {
            end = performance.now(); // Akhir hitung setelah aksi
            const duration = end - start;
            cy.log(`Durasi aksi: ${duration.toFixed(2)} ms`);
          });
    })

});
