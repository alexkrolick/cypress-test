// this is a fake localization framework to abstract the strings a bit

function toString() {
  return this.defaultMessage;
}

export const appTitle = {
  id: "app.title",
  defaultMessage: "Hello, world",
  toString,
};

export const clickButtonText = {
  id: "app.clickCount.buttonText",
  defaultMessage: "Click me",
  toString,
};

export const clickCountLabel = {
  id: "app.clickCount.label",
  defaultMessage: "Click count",
  toString,
};
