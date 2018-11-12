// https://medium.com/@RubenOostinga/combining-chai-and-jest-matchers-d12d1ffd0303

import jestExpect from "expect";
import * as extendedMatchers from "jest-dom";
jestExpect.extend(extendedMatchers);

// Make sure chai and jasmine ".not" play nice together
const originalNot = Object.getOwnPropertyDescriptor(
  // eslint-disable-next-line no-undef
  chai.Assertion.prototype,
  "not",
).get;
// eslint-disable-next-line no-undef
Object.defineProperty(chai.Assertion.prototype, "not", {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  },
});

// Combine both jest and chai matchers on expect

const chaiExpect = global.expect;

export const expect = actual => {
  const chaiMatchers = chaiExpect(actual);
  const jestMatchers = jestExpect(actual);
  const combinedMatchers = Object.assign(chaiMatchers, jestMatchers);
  return combinedMatchers;
};

global.expect = expect;

export default expect;
