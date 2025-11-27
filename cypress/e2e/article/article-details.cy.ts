let currentArticleId = '';

describe('Пользователь заходит на страницу статьи ', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(article => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    })
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it.skip('И видит статью', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it.skip('И подгружаются рекомендованные статьи', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it.skip('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('И оставляет оценку', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  })

  it('И оставляет оценку (на фикстурах)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  })
})

export { };