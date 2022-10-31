describe('delete button', () => {

  it('scolls to bottom of page', () => {
    cy.visit('http://localhost:3000').wait(200)
    cy.scrollTo('bottom')
  })
  
  it('clicks delete button to delete row in table', () => {
    cy.get(':nth-child(8) > :nth-child(6) > [data-cy="delete"]')
    .trigger('mouseover').wait(100).pause()
    .click()
    cy.get(':nth-child(8) > :nth-child(1)').should('not.exist')
  })
  
})