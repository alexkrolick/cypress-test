import { queryAllByText } from "dom-testing-library";
import { findByText, findByLabelText } from "dom-testing-addon-async";
import user from "user-event";

describe("Home page", () => {
  it("successfully loads", async function(done) {
    cy.visit("/").then(async function({ document: { body } }) {
      let rightHeader = await findByText(body, "Hello, world");
      let wrongHeaders = queryAllByText(body, "Hello, moon");
      expect(wrongHeaders).toHaveLength(0); // jest
      expect(wrongHeaders).to.have.length(0); // chai
      expect(rightHeader).not.toBeNull(); // jest
      expect(rightHeader).to.not.be.null; // chai
      expect(rightHeader).toBeInTheDocument(); // jest-dom
      done();
    });
  });

  it("increments counter", async function(done) {
    cy.visit("/").then(async function({ document: { body } }) {
      // ideally, would trigger event with cypress,
      // but use user-event instead because it works with native dom elements
      user.click(await findByText(body, "Click me"));
      expect(await findByLabelText(body, "Click count")).toHaveTextContent("1");
      done();
    });
  });
});
