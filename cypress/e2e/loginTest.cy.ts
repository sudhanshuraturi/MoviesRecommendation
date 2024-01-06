describe('Element Interaction Test', () => {
  it('should type into input and verify value', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder="Email Address"]').type('sudhanshuraturi4@gmail.com');
    cy.get('input[placeholder="Password"]').type('rrrraturi');
    cy.get('button').contains('Sign In').click();
    cy.intercept('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`).as('loginRequest');
    cy.wait('@loginRequest');
    cy.url().should('include', '/');
  });
});

