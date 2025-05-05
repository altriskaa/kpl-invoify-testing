describe("5. Summary", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','5. Summary')
            .dblclick()      
    })


    // SIGNATURE 
    it("should open the signature modal", () => {
        // Klik label untuk membuka modal
        cy.get("label").contains("Signature").click(); 
        // Pastikan modal terbuka
        cy.get('[role="dialog"]').should("be.visible"); 
    });

    it("drawing a signature", () => {
      // VALIDASI signature modal terbuka
      cy.get("label").contains("Signature").click(); // Klik label untuk membuka modal
      cy.get('[role="dialog"]').should("be.visible"); // Pastikan modal terbuka

      // ACTION draw signature
      cy.get('[role="tab"]').contains("Draw").click(); // Pastikan tab "Draw" aktif
      cy.get('canvas').click() // Interaksi dengan canvas tanda tangan dengan klik
      cy.contains("Done").click(); // Klik tombol "Done" untuk menyimpan tanda tangan

      // VALIDASI signature terisi
      cy.get('[role="dialog"]').should("not.exist"); // Pastikan modal tertutup

    });


    // TEXT AREA
    it('input additional notes in textarea', () => {
        cy.get('textarea[name="details.additionalNotes"]')
            .type("Thank you for your business", { delay: 100 })
        cy.get('textarea[name="details.additionalNotes"]')
            .should('have.value', 'Thank you for your business')
    })

    it('input payment terms in textarea', () => {
        cy.get('textarea[name="details.paymentTerms"]')
            .type("Net 30", { delay: 100 })
        cy.get('textarea[name="details.paymentTerms"]')
            .should('have.value', 'Net 30')
    })

    // SWITCHES
    it('should toggle the Discount, Tax, and Shipping switches', () => {      
      
      // VALIDASI initial state switches
        cy.get('label').contains('Discount').parent().find('button')
          .should('have.attr', 'data-state', 'unchecked');
    
        cy.get('label').contains('Tax').parent().find('button')
          .should('have.attr', 'data-state', 'unchecked');
    
        cy.get('label').contains('Shipping').parent().find('button')
          .should('have.attr', 'data-state', 'unchecked');

        // Aktifkan Discount
        cy.get('label').contains('Discount').parent().find('button').click()
        .should('have.attr', 'data-state', 'checked');
    
        // Aktifkan Tax
        cy.get('label').contains('Tax').parent().find('button').click()
          .should('have.attr', 'data-state', 'checked');
    
        // Aktifkan Shipping
        cy.get('label').contains('Shipping').parent().find('button').click()
          .should('have.attr', 'data-state', 'checked');
    
        // Matikan kembali untuk cek toggling
        cy.get('label').contains('Discount').parent().find('button').click()
          .should('have.attr', 'data-state', 'unchecked');
    
        cy.get('label').contains('Tax').parent().find('button').click()
          .should('have.attr', 'data-state', 'unchecked');
    
        cy.get('label').contains('Shipping').parent().find('button').click()
          .should('have.attr', 'data-state', 'unchecked');
    });
    

});
