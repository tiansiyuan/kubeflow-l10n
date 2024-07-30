describe('+New Tensorboard form dialog', () => {
  beforeEach(() => {
    cy.mockDashboardRequest();
    cy.mockNamespacesRequest();
    cy.fixture('settings').then(settings => {
      cy.mockEmptyTensorboardsRequest(settings.namespace);
    });
  });

  it('checks New TensorBoard form has proper default values and updates accordingly when its radio button value changes', () => {
    cy.visit('/');
    cy.wait([
      '@mockDashboardRequest',
      '@mockNamespacesRequest',
      '@mockEmptyTensorboardsRequest',
    ]);
    cy.get('[data-cy-toolbar-button="新向量板"]')
      .should('be.visible')
      .click();

    // Should have a "New volume" title
    cy.get('[data-cy-form-section-header]')
      .contains('新向量板')
      .should('be.visible');

    // Checks default radio button is selected and proper input field is shown
    cy.get('[data-cy-form-radio-object-store]').should(
      'have.class',
      'mat-radio-checked',
    );
    cy.get('[data-cy-form-input-label]').should('contain', '对象存储连接');

    // Checks input field changes when user clicks on Tensoboard's radio button
    cy.get('[data-cy-form-radio-pvc]').click();
    cy.get('[data-cy-form-input-label]').should('contain', '挂载路径');
    cy.get('[data-cy-form-input-pvc]').should('exist');
  });
});
