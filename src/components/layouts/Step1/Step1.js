import React, { useContext } from "react";

import StepContext from "../../../store/step-context";
import Section from "../../UI/Section/Section";
import Header from "../../UI/Header/Header";
import Form from "../../UI/Form/Form";
import Button from "../../UI/Button/Button";
import Input from "./Form/Input";

import styles from "./Step1.module.css";

const Step1 = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  // Step heading and description.
  const heading = "Personal info";
  const message = "Please provide your name, email address and phone number.";

  const setErrorHelper = (property, value = false) => {
    // Set error after form validation.
    stepCtx.setError((previousError) => {
      return { ...previousError, [property]: value };
    });
  };

  const setInputValuesHelper = (property, value) => {
    // Set input values from the form
    stepCtx.setInputValues((previousValues) => {
      return { ...previousValues, [property]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Basic form validation.
    if (stepCtx.inputValues.names.length === 0) setErrorHelper("names", true);
    if (stepCtx.inputValues.email.length === 0) setErrorHelper("email", true);
    if (stepCtx.inputValues.phone.length === 0) setErrorHelper("phone", true);
  };

  const nameChangeHandler = (e) => {
    // Set names input value
    setInputValuesHelper("names", e.target.value);

    //  Set names input value error
    setErrorHelper("names");
  };

  const emailChangeHandler = (e) => {
    // Set email input value
    setInputValuesHelper("email", e.target.value);

    //  Set email input value error
    setErrorHelper("email");
  };

  const phoneChangeHandler = (e) => {
    // Set phone input value
    setInputValuesHelper("phone", e.target.value);

    // Set phone input value error
    setErrorHelper("phone");
  };

  const nextPageClickHandler = () => {
    //eslint-disable-next-line
    const emailValidationCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Validate form before going to next step
    if (
      stepCtx.inputValues.names.length === 0 ||
      stepCtx.inputValues.email.length === 0 ||
      !stepCtx.inputValues.email.match(emailValidationCheck) ||
      stepCtx.inputValues.phone.length === 0
    ) {
      return;
    }

    // Update step states
    stepCtx.setStep(2);
    setStep(2);
  };

  return (
    <Section>
      {/* Render header */}
      <Header heading={heading} message={message} />

      {/* Render form */}
      <Form onSubmit={formSubmitHandler} className={StyleSheet.form}>
        {/* Render inputs */}
        <Input
          type="text"
          label="Name"
          placeholder="e.g. Eric Khang'ati"
          error={stepCtx.error.names}
          className={stepCtx.error.names}
          onChange={nameChangeHandler}
          value={stepCtx.inputValues.names}
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="e.g. hello@erickhangati.dev"
          error={stepCtx.error.email}
          className={stepCtx.error.email}
          onChange={emailChangeHandler}
          value={stepCtx.inputValues.email}
        />
        <Input
          type="number"
          label="Phone"
          placeholder="e.g. +254 720 773 895"
          error={stepCtx.error.phone}
          className={stepCtx.error.phone}
          onChange={phoneChangeHandler}
          value={stepCtx.inputValues.phone}
        />
        <Button
          className={styles.button}
          type="submit"
          onClick={nextPageClickHandler}
        >
          Next Step
        </Button>
      </Form>
    </Section>
  );
};

export default Step1;
