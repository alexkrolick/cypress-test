# cypress-test

Playing around with Cypress, Jest's `expect`, and `dom-testing-library`

## Progress

- [expect-compat](./cypress/support/expect-compat.js):
  - merge Chai/Cypres and Jasmine/Jest assertions onto one `expect`
  - add [jest-dom](https://github.com/gnapse/jest-dom) assertions like `toHaveTextContent`, `toBeInTheDocument`
- [index.spec.js](./cypress/integration/index.spec.js): 
  - use `dom-testing-library` inside Cypress without a plugin
  - trigger events with [user-event] (https://github.com/Gpx/user-event)

<img width="775" alt="screen shot 2018-11-11 at 8 21 25 pm" src="https://user-images.githubusercontent.com/1571667/48326832-57a2d100-e5f0-11e8-80ab-2ab2edde5b67.png">

<img width="895" alt="screen shot 2018-11-11 at 8 30 59 pm" src="https://user-images.githubusercontent.com/1571667/48326910-b9633b00-e5f0-11e8-84ef-08568dbc115f.png">

## Weirdness

- Asssertions from Jest don't show up in the result panel or trigger a DOM snapshot for debugging
- Need to use `done` argument (legacy from Mocha) in async tests that have native Promise chains