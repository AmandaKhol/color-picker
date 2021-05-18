describe('renders the home page with default values', () => {
  it('renders correctly', () => {
    cy.visit('/');
    cy.get('main').should('exist');
  });
  it('starts with red color', () => {
    cy.visit('index.html');
    cy.get('.color__input--input').should('have.value', '#ff0000');
    cy.get('.color__picker--selected').should(
      'have.css',
      'background-color',
      'rgb(255, 0, 0)'
    );
  });
});

describe('change the values when color change', () => {
  it('changes input green color value', () => {
    cy.visit('index.html');
    cy.get('.color__input--input').clear().type('00ff00').trigger('change');
    cy.get('.color__picker--selected').should(
      'have.css',
      'background-color',
      'rgb(0, 255, 0)'
    );
  });
  it('changes with hue canvas click', () => {
    cy.visit('index.html');
    cy.get('.hue').click(200, 5);
    cy.get('.color__picker--selected').should(
      'have.css',
      'background-color',
      'rgb(3, 0, 255)'
    );
    cy.get('.color__input--input').should('have.value', '#0300ff');
    cy.get('.picker').should('have.css', 'top', '-10px');
    cy.get('.picker').should('have.css', 'left', '190px');
  });
  it('changes with gradient canvas click', () => {
    cy.visit('index.html');
    cy.get('.color__panel--canvas').click(100, 5);
    cy.get('.color__picker--selected').should(
      'have.css',
      'background-color',
      'rgb(241, 120, 120)'
    );
    cy.get('.color__input--input').should('have.value', '#f17878');
  });
});
