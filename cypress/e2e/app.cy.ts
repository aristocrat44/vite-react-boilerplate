/// <reference types="cypress" />

describe('empty spec', () => {
  it('visit app page', () => {
    cy.visit('/')
      .get('[data-cy="hello-world"]')
      .contains(/hello world/i);
  });
});
