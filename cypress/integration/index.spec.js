import jestExpect from "expect";
import { getByText, queryAllByText, waitForElement } from "dom-testing-library";

// options for async queries
const ASYNC = {
  timeout: 3000, // less than the cypress default, 4s
};

describe("homepage", function() {
  it("successfully loads", async function(done) {
    cy.visit("/").then(async function({ document }) {
      let app = document.querySelector("#app");
      let rightHeader = await waitForElement(
        () => getByText(app, "Hello, world"),
        ASYNC,
      );
      let wrongHeaders = queryAllByText(app, "Hello, moon");

      // Chai assertions report status in the GUI
      expect(wrongHeaders).to.have.length(0);

      // Jest/Jasmine results only report when they throw
      jestExpect(rightHeader).not.toBeNull();

      done();
    });
  });
});
