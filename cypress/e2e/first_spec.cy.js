describe('Login Test', () => {
  it('Success Login', () => {
    cy.visit('https://id-id.facebook.com/')
    cy.get('#email').type('argya@ulbi.ac.id')
    cy.get('#pass').type('F1racant!k')
    cy.get('[data-testid="royal_login_button"]').click();
    // cy.get('span.title').should('contain','Products')
  })
})