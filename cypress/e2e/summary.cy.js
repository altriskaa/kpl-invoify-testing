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

    it("should allow drawing a signature", () => {
        cy.get("label").contains("Signature").click();
        
        // Pastikan tab "Draw" aktif
        cy.get('[role="tab"]').contains("Draw").click();

        // Interaksi dengan canvas tanda tangan
        cy.get('canvas').click()

        // Klik tombol "Done" untuk menyimpan tanda tangan
        cy.contains("Done").click();

        // Pastikan modal tertutup
        cy.get('[role="dialog"]').should("not.exist");

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
    it('should have switches in the correct initial state', () => {        
        cy.get('label').contains('Discount').parent().find('button')
          .should('have.attr', 'data-state', 'unchecked');
    
        cy.get('label').contains('Tax').parent().find('button')
          .should('have.attr', 'data-state', 'unchecked');
    
        cy.get('label').contains('Shipping').parent().find('button')
          .should('have.attr', 'data-state', 'unchecked');
    });

    it('should toggle the Discount, Tax, and Shipping switches', () => {    
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
