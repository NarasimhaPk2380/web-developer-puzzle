describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });
  
  it('Then: I should be able to add book to reading list and mark it as READ', async () => {
    cy.get('input[type="search"]').type('angular');
    cy.get('form').submit();

    if(!(cy.get('[data-testing="book-item"]').find('button:not(:disabled)'))) return;
    cy.get('[data-testing="book-item"]').find('button:not(:disabled)').first().click();

    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('.reading-list-item .finish').click();
    expect(cy.get('finished-date')).to.exist;
  });


  it('Then: I should be able to remove a finished book and again add the book to the reading list', async () => {
    cy.get('input[type="search"]').type('123');
    cy.get('form').submit();

    if(!(cy.get('[data-testing="book-item"]').find('button:not(:disabled)'))) return;
    cy.get('[data-testing="book-item"]').find('button:not(:disabled)').first().click();

    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('.reading-list-item .finish').click();
    cy.get('.reading-list-item #remove').click();

    if(!(cy.get('[data-testing="book-item"]').find('button:not(:disabled)'))) return;
    cy.get('[data-testing="book-item"]').find('button:not(:disabled)').first().click();

    cy.get('[data-testing="toggle-reading-list"]')
    expect(cy.get('.reading-list-item')).to.exist;
  });
});
