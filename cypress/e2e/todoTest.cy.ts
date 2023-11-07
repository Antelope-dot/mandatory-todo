const hostUrl = 'http://localhost:3000/'

describe('Test that todo works', () => {
  it('renders ui', () => {
    cy.visit(hostUrl);
    cy.get('#item').should('exist');
    cy.get('.btn').first().should('exist');
    cy.get('.btn').last().should('exist');
  })

  it('add todo', () => {
    cy.visit(hostUrl);

    //define input and addButton not the most elegant solution
    // but this is my first cypress test :D
    let input = cy.get('#item');
    let addButton = cy.get('.btn').first();

    input.type("Testing123");
    addButton.click();

    cy.get('[type="checkbox"').first().should('exist');
  })

  it('delete todo', () => {
    cy.visit(hostUrl);

    //define input and addButton not the most elegant solution
    // but this is my first cypress test :D
    let input = cy.get('#item');
    let addButton = cy.get('.btn').first();

    input.type("Testing123");
    addButton.click();

    let deleteButton = cy.get('.btn-danger').first();
    deleteButton.click();
    cy.get('[type="checkbox"').should('not.exist');
  })

  it('add multiple todos and delete them', () => {
    cy.visit(hostUrl);

    let input = cy.get('#item');
    let addButton = cy.get('.btn').first();
    let checkButton = cy.get('.btn').contains('Check todos');
    let deleteAllButton = cy.get('.btn').last();

    input.type("Testing123");
    addButton.click();
    input.type("Another Test");
    addButton.click();

    checkButton.click();
    deleteAllButton.click();

    cy.get('[type="checkbox"').should('not.exist');
  })

})