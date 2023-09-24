//Activity - Writing The First Tests 2
describe('Activity - Writing The First Tests 2', () => {
    it('Visit the example page and query for an email', () => {
        //visit the example page
      cy.visit('https://example.cypress.io/commands/actions')

      //query for an element
      cy.get(".form-group").contains("Email address");

      // query for the email input field
      cy.get('input[type="email"]').as('emailInput')

      // Type email address into the input field
    cy.get('@emailInput').type('gdula@o2.pl')

    // Assert about the content of the input field
    cy.get('@emailInput').should('have.value', 'gdula@o2.pl')

    })
  })