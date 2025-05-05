describe('Invoify Automated Testing', () => {

    // it('Does not do much!', () => {
    //     cy.visit('http://localhost:3000/')
    //     expect(true).to.equal(true)
    //   })
  
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','2. Invoice Details')
            .dblclick()      
    })

    it('dev fill the form', () => {
        cy.contains('button', 'Fill in the form')
            .dblclick()
        cy.get('input[name="sender.name"]')
            .should('have.value', 'John Doe')
    })

    it('choose template 2', () => {
    
        // Klik tombol Select dari Template 2
        cy.get('div')
            .contains('Template 2')
            .parent()
            .find('button')
            .contains('Select')
            .click();
    
        // Verifikasi bahwa Template 2 sudah dipilih
        cy.get('div').contains('Template 2').parent().within(() => {
            cy.get('svg').should('exist'); // Cek icon check muncul
        });
    })

  });
  