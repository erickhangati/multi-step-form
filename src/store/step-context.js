import React from "react";

// Creating a context to manage our states globally.

const StepContext = React.createContext({
  step: 1,
  setStep: () => {},
  inputValues: {
    names: "",
    email: "",
    phone: "",
  },
  setInputValues: () => {},
  error: {
    names: false,
    email: false,
    phone: false,
  },
  setError: () => {},
  billed: "monthly",
  setBilled: () => {},
  plan: {
    names: "",
    price: 0,
  },
  setPlan: () => {},
  planError: false,
  setPlanError: () => {},
  addons: [],
  setAddons: () => {},
  orderConfirmed: false,
  setOrderConfirmed: () => {},
  order: {
    customer: "",
    email: "",
    phone: "",
    plan: {},
    addons: [],
  },
  setOrder: () => {},
});

export default StepContext;
