import { getButton } from '../support/app.po';

describe('host', () => {
  beforeEach(() => cy.visit('/'));

  it('Open sidebar', () => {
    getButton().click();
    cy.get('#sidebar').find('>div')
  })
})