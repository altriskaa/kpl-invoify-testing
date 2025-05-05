describe('Invoify Automated Testing', () => {
    
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
    })

    it('Does not do much!', () => {
        cy.visit('http://localhost:3000/')
        expect(true).to.equal(true)
      })
        
        it('.type() - type into a DOM element', () => {
        //FROM
            //name
            cy.get('input[name="sender.name"]').as('name')
            cy.get('@name').click()
            cy.get('@name').type('Naya');
            cy.get('input[name="sender.name"]').should('have.value', 'Naya')

            //address
            cy.get('input[name="sender.address"]').type('Jl. Arif Rahman');
            cy.get('input[name="sender.address"]').should('have.value', 'Jl. Arif Rahman')

            //zip
            cy.get('input[name="sender.zipCode"]').type('12345');
            cy.get('input[name="sender.zipCode"]').should('have.value', '12345')

            //email
            cy.get('input[name="sender.email"]').type('fake@email.com')
            cy.get('input[name="sender.email"]').should('have.value', 'fake@email.com')

            //city
            cy.get('input[name="sender.city"]').type('Surabaya')
            cy.get('input[name="sender.city"]').should('have.value', 'Surabaya')

            //country
            cy.get('input[name="sender.country"]').type('Indonesia')
            cy.get('input[name="sender.country"]').should('have.value', 'Indonesia')

            //phone
            cy.get('input[name="sender.phone"]').type('abc085264894#');
            cy.get('input[name="sender.phone"]').should('have.value', '085264894'); 

            //add
            cy.contains('button', 'Add Custom Input').dblclick()
        
        //TO
            //r.name
            cy.get('input[name="receiver.name"]').type('Vause');
            cy.get('input[name="receiver.name"]').should('have.value', 'Vause')

            //r.address
            cy.get('input[name="receiver.address"]').type('367 Litchfield');
            cy.get('input[name="receiver.address"]').should('have.value', '367 Litchfield')

            //r.zip
            cy.get('input[name="receiver.zipCode"]').type('67891');
            cy.get('input[name="receiver.zipCode"]').should('have.value', '67891')

            //r.email
            cy.get('input[name="receiver.email"]').type('vause@email.com')
            cy.get('input[name="receiver.email"]').should('have.value', 'vause@email.com')

            //r.city
            cy.get('input[name="receiver.city"]').type('New York')
            cy.get('input[name="receiver.city"]').should('have.value', 'New York')

            //country
            cy.get('input[name="receiver.country').type('USA')
            cy.get('input[name="receiver.country"]').should('have.value', 'USA')

            //phone
            cy.get('input[name="receiver.phone"]').type('abc987-654-3210#');
            cy.get('input[name="receiver.phone"]').should('have.value', '987-654-3210'); 
        })
        // it('.button() - navigate invoice details', ()=>{
        //     cy.contains('button','2. Invoice Details')
        //     .dblclick()
           

        // })
        

  });
  