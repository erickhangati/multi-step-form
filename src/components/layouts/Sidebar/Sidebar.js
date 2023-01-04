import React, { useContext } from "react";

import ListItem from "./ListItem";
import Menus from "./Menus";
import StepContext from "../../../store/step-context";

import styles from "./Sidebar.module.css";

const Sidebar = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const listItemClickHandler = (index) => {
    // Get step number.
    const clicked = index + 1;

    const nextPage = () => {
      // Set step
      stepCtx.setStep(index + 1);
      setStep(index + 1);
    };

    const setPage = (page) => {
      // Set page
      stepCtx.setStep(page);
      setStep(page);
    };

    // Check step 1 validations
    const page1Check = () => {
      // Check if name field if it has been filled or set error state.
      if (stepCtx.inputValues.names.length === 0) {
        stepCtx.setError((previous) => {
          return {
            ...previous,
            names: true,
          };
        });

        // Set step 1 to render step 1.
        setPage(1);
        return;
      }

      // Check if email field if it has been filled or set error state.
      if (stepCtx.inputValues.email.length === 0) {
        stepCtx.setError((previous) => {
          return {
            ...previous,
            email: true,
          };
        });

        // Set step 1 to render step 1.
        setPage(1);
        return;
      }

      // Check if phone field if it has been filled or set error state.
      if (stepCtx.inputValues.phone.length === 0) {
        stepCtx.setError((previous) => {
          return {
            ...previous,
            phone: true,
          };
        });

        // Set step 1 to render step 1.
        setPage(1);

        return;
      }
    };

    // Check step 1 validations
    const page2Check = () => {
      // Check if plan has been selected or set error state.
      if (stepCtx.plan.names.length === 0) {
        stepCtx.setPlanError(true);

        // Set step 2 to render step 2.
        stepCtx.setStep(2);
        setStep(2);

        return;
      }

      // Go to next if validations passed.
      nextPage();
    };

    if (clicked === 1) setPage(1);

    if (clicked === 2) {
      // Check validations of step 1.
      page1Check();

      if (
        stepCtx.inputValues.names.length === 0 ||
        stepCtx.inputValues.email.length === 0 ||
        stepCtx.inputValues.phone.length === 0
      ) {
        return;
      }

      // Go to next if validations passed.
      nextPage();
    }

    if (clicked === 3) {
      // Check validations of step 1.
      page1Check();

      if (
        stepCtx.inputValues.names.length === 0 ||
        stepCtx.inputValues.email.length === 0 ||
        stepCtx.inputValues.phone.length === 0
      ) {
        return;
      }

      // Go to next if validations passed.
      page2Check();
    }

    if (clicked === 4) {
      // Check validations of step 1.
      page1Check();

      if (
        stepCtx.inputValues.names.length === 0 ||
        stepCtx.inputValues.email.length === 0 ||
        stepCtx.inputValues.phone.length === 0
      ) {
        return;
      }

      // Check validations of step 2 and set error if not selected.
      if (stepCtx.plan.names.length === 0) {
        stepCtx.setPlanError(true);
        stepCtx.setStep(2);
        setStep(2);

        return;
      }

      // Set step 4 to render step 4.
      setPage(4);
    }
  };

  return (
    <nav className={styles.sidebar}>
      <ul>
        {Menus.map((item, index) => (
          <ListItem
            key={index}
            number={index + 1}
            step={item.step}
            menu={item.menu}
            className={stepCtx.step === index + 1 ? "active" : ""}
            onClick={listItemClickHandler.bind(null, index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
