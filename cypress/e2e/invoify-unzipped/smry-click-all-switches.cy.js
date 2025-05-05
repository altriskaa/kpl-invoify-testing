describe("5. Summary - Click all switches", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','5. Summary')
            .dblclick()      
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
