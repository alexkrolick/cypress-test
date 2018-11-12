import jestExpect from "expect";
import { queryAllByText } from "dom-testing-library";
import { findByText, findByLabelText } from "dom-testing-addon-async";
import user from "user-event";
import * as extendedMatchers from "jest-dom";
import * as l from "../../src/localized";

jestExpect.extend(extendedMatchers);

it("successfully loads", async function(done) {
  return cy.visit("/").then(async function({ document }) {
    let app = document.querySelector("#app");
    let rightHeader = await findByText(app, "Hello, world");
    let wrongHeaders = queryAllByText(app, "Hello, moon");
    jestExpect(wrongHeaders).toHaveLength(0);
    jestExpect(rightHeader).not.toBeNull();
    done();
  });
});

it("increments counter", async function(done) {
  return cy.visit("/").then(async function({ document }) {
    let app = document.querySelector("#app");
    let button = await findByText(app, `${l.clickButtonText}`);
    await user.click(button);
    jestExpect(
      await findByLabelText(app, `${l.clickCountLabel}`),
    ).toHaveTextContent("1");
    done();
  });
});
