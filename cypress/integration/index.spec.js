import { queryAllByText } from "dom-testing-library";
import { findByText, findByLabelText } from "dom-testing-addon-async";
import user from "user-event";
import * as l from "../../src/localized";

describe("Home page", () => {
  it("successfully loads", async function(done) {
    cy.visit("/").then(async function({ document: { body } }) {
      let rightHeader = await findByText(body, "Hello, world");
      let wrongHeaders = queryAllByText(body, "Hello, moon");
      expect(wrongHeaders).toHaveLength(0); // jest
      expect(wrongHeaders).to.have.length(0); // chai
      expect(rightHeader).not.toBeNull(); // jest
      expect(rightHeader).to.not.be.null; // chai
      done();
    });
  });

  it("increments counter", async function(done) {
    cy.visit("/").then(async function({ document: { body } }) {
      let button = await findByText(body, `${l.clickButtonText}`);
      await user.click(button); // ideally, would trigger event with cypress
      expect(
        await findByLabelText(body, `${l.clickCountLabel}`),
      ).toHaveTextContent("1");
      done();
    });
  });
});
