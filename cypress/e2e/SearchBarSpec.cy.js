describe('Search Bar', () => {

  describe('Filter by "Pink Floyd" then resets filter', () => {
    it('filters table for Pink Floyd', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="search-bar"]').wait(500)
      .type('pink')
      cy.scrollTo('bottom')
      cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('td', 'Pink Floyd').should('be.visible')
      cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('td', 'Pink Floyd').should('be.visible')
      cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('td', 'Pink Floyd').should('be.visible')
      cy.get('tbody > :nth-child(4) > :nth-child(2)').should('not.exist').wait(2000)
    })
  
    it('clears the search bar to reset the table', () => {
      cy.scrollTo('top')
      cy.get('[data-cy="search-bar"]').wait(500)
      .type(`{backspace}`)
      .type(`{backspace}`)
      .type(`{backspace}`)
      .type(`{backspace}`)
    })
  })

  describe('Filter by "The Beatles" to have an empty table', () => {
    it('types in "The Beatles" into the search bar', () => {
      cy.get('[data-cy="search-bar"]').wait(500)
      .type("The Beatles")
      .should('have.value', 'The Beatles')
    })

    it('scrolls down to table and results to empty table', () => {
      cy.scrollTo('bottom')
      cy.get('tbody > :nth-child(1) > :nth-child(2)').should('not.exist').wait(1000)
    })
  })

  describe('Resets filter and checks table for existing data', () => {
    it('scrolls to search bar, clears text, resets filter', () => {
      cy.scrollTo('top')
      cy.get('[data-cy="search-bar"]').wait(200)
      .type(`{selectall}`).should('have.value', 'The Beatles')
      .type(`{backspace}`).should('have.value', '').wait(200)
      cy.scrollTo('bottom')
      cy.get(':nth-child(7) > :nth-child(1)').should('exist')
      
    })
  })


})