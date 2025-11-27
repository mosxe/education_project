import { EditableProfileCard } from 'features/editableProfileCard';
import { TestProvider } from 'shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.ts', () => {
  it('playground', () => {
    cy.intercept('GET', '**/proifle/*', { fixture: 'profile.json' });
    // cy.mount(
    //   <TestProvider>
    //     <EditableProfileCard id="1" />
    //   </TestProvider>
    // );
  });
});
