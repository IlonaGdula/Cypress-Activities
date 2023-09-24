//Activity - Writing The First Tests 1
describe('Activity - Writing The First Tests 1', () => {
    it('Visit the example page and interact with element', () => {

        //Visit the example page
        cy.visit('https://example.cypress.io')

        //Querry for an element
        cy.get(".home-list").contains("Traversal").click();

        //Interact with element
        cy.get('.traversal-breadcrumb').should("contain", "Home");

        //Assert about the content on the page.
        cy.url().should("include", "/commands/traversal");
        cy.get(".travelsal-list").should("have.length", 0);
        cy.get('.traversal-list>li').eq(4).should('contain', 'burmese')



    });
  })