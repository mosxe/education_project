import { selectByTestId } from "../../helpers/selectByTestId";

export const setRate = (starsCount: number = 5, feedback: string = 'feedback') => {
  cy.get(selectByTestId(`StarRating.${starsCount}`)).click();
  cy.get(selectByTestId(`RatingCard.Input`)).type(feedback);
  cy.get(selectByTestId(`RatingCard.Send`)).click();

};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedback: string): Chainable<void>;
    }
  }
}