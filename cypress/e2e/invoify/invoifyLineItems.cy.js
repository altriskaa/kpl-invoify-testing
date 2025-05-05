describe('Invoify Automated Testing', () => {
    
    beforeEach(() => {
        cy.visit("http://localhost:3000") 
        
    })


    it('Does not do much!', () =>{
        cy.contains('button','3. Line Items').dblclick()
        
        //item name
        cy.get('input[name^="details.items"]').as('i.name')
        cy.get('@i.name').eq(0).type('Laptop')

        //item quantity
        cy.get('input[name="details.items[0].quantity"]').as('quantity')
        cy.get('@quantity').clear()
        cy.get('@quantity').type('5') 

        //rate 
        cy.get('input[name="details.items[0].unitPrice"]').as('price')
        cy.get('@price').clear()
        cy.get('@price').type('1000')

        //description
        cy.get('textarea[name="details.items[0].description"]')
        .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.') 

        //add item
        cy.contains('button', 'Add a new item').dblclick()

    })  
  });
  