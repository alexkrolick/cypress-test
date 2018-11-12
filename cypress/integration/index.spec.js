import { queryAllByText } from "dom-testing-library";
import { findByText, findByLabelText } from "dom-testing-addon-async";
import user from "user-event";

describe("Home page", () => {
  it("successfully loads", async function(done) {
    cy.visit("/").then(async function({ document: { body } }) {
      let rightHeader = await findByText(body, "Hello, world");
      let wrongHeaders = queryAllByText(body, "Hello, moon");
      expect(wrongHeaders).to.have.length(0); // chai
      expect(rightHeader).toBeInTheDocument(); // jest-dom
      done();
    });
  });
});

describe("Counter page", () => {
  it("increments counter", async function(done) {
    cy.visit("/counter").then(async function({ document: { body } }) {
      user.click(await findByText(body, "Click me"));
      expect(await findByLabelText(body, "Click count")).toHaveTextContent("1");
      done();
    });
  });
});

describe("Navigation", () => {
  it("can go between pages", async function(done) {
    cy.visit("/").then(async function({ document: { body } }) {
      user.click(await findByText(body, "Counter Game"));
      expect(await findByLabelText(body, "Click count")).toHaveTextContent("0");
      user.click(await findByText(body, "Home"));
      expect(body.ownerDocument.location.pathname).to.equal("/");
      done();
    });
  });
});
