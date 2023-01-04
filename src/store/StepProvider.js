import React, { useState } from "react";

import StepContext from "./step-context";

export const initialAddons = {
  monthly: [
    {
      names: "Online service",
      description: "Access to multi-player games",
      price: 1,
      checked: false,
    },
    {
      names: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 1,
      checked: false,
    },
    {
      names: "Customizable profile",
      description: "Custom theme on your profile",
      price: 1,
      checked: false,
    },
  ],
  yearly: [
    {
      names: "Online service",
      description: "Access to multi-player games",
      price: 10,
      checked: false,
    },
    {
      names: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 10,
      checked: false,
    },
    {
      names: "Customizable profile",
      description: "Custom theme on your profile",
      price: 10,
      checked: false,
    },
  ],
};

const stepContext = {
  step: 0,
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
};

const StepProvider = (props) => {
  const [step, setStep] = useState(1);
  const [billed, setBilled] = useState("monthly");
  const [planError, setPlanError] = useState(false);
  const [addons, setAddons] = useState(initialAddons);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [plan, setPlan] = useState({
    names: "",
    price: 0,
  });

  const [inputValues, setInputValues] = useState({
    names: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    names: false,
    email: false,
    phone: false,
  });

  const [order, setOrder] = useState({
    customer: "",
    email: "",
    phone: "",
    plan: {},
    addons: [],
  });

  return (
    <StepContext.Provider
      value={{
        ...stepContext,
        step: step,
        setStep: setStep,
        inputValues: inputValues,
        setInputValues: setInputValues,
        billed: billed,
        setBilled: setBilled,
        plan: plan,
        setPlan: setPlan,
        error: error,
        setError: setError,
        planError: planError,
        setPlanError: setPlanError,
        addons: addons,
        setAddons: setAddons,
        orderConfirmed: orderConfirmed,
        setOrderConfirmed: setOrderConfirmed,
        order: order,
        setOrder: setOrder,
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};

export default StepProvider;
