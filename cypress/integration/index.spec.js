import { queryAllByText } from "dom-testing-library";
import { findByText, findByLabelText } from "dom-testing-addon-async";
import user from "user-event";
import * as l from "../../src/localized";

it("successfully loads", async function(done) {
  return cy.visit("/").then(async function({ document }) {
    let app = document.querySelector("#app");
    let rightHeader = await findByText(app, "Hello, world");
    let wrongHeaders = queryAllByText(app, "Hello, moon");
    expect(wrongHeaders).toHaveLength(0);
    expect(rightHeader).not.toBeNull();
    done();
  });
});

it("increments counter", async function(done) {
  return cy.visit("/").then(async function({ document }) {
    let app = document.querySelector("#app");
    let button = await findByText(app, `${l.clickButtonText}`);
    await user.click(button);
    expect(
      await findByLabelText(app, `${l.clickCountLabel}`),
    ).toHaveTextContent("1");
    done();
  });
});
