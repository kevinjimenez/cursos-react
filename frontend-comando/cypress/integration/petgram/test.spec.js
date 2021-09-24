/* glogal descrube, it, expect */

describe("Petgram", () => {
  it("para ver si funciona", () => {
    // eslint-disable-next-line jest/valid-expect
    // expect(true).to.equal(false);

    // eslint-disable-next-line no-undef
    // cy.visit('/')
  });

  it('navegamos a una categoria y vemos fotos', function() {
      // eslint-disable-next-line no-undef
    cy.visit('/pet/1')
    // eslint-disable-next-line no-undef
    cy.get('article')
});

it('si podemos navegar con la navbar a la home',  function() {
    // eslint-disable-next-line no-undef
    cy.visit('/pet/1')
    
    // eslint-disable-next-line no-unused-expressions
    cy.get('nav a').first().click
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/')
})

it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function() {
    // eslint-disable-next-line no-undef
    cy.visit('/favs')
    // eslint-disable-next-line no-undef
    cy.get('form').should('have.length', 2)
})

});
