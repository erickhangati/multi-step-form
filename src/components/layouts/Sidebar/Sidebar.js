import React, { useContext } from "react";

import ListItem from "./ListItem";
import Menus from "./Menus";
import StepContext from "../../../store/step-context";

import styles from "./Sidebar.module.css";

const Sidebar = ({ setStep }) => {
  const stepCtx = useContext(StepContext);

  const listItemClickHandler = (index) => {
    const clicked = index + 1;

    const nextPage = () => {
      stepCtx.setStep(index + 1);
      setStep(index + 1);
    };

    const setPage = (page) => {
      stepCtx.setStep(page);
      setStep(page);
    };

    const page1Check = () => {
      if (stepCtx.inputValues.names.length === 0) {
        stepCtx.setError((previous) => {
          return {
            ...previous,
            names: true,
          };
        });
        setPage(1);
        return;
      }

      if (stepCtx.inputValues.email.length === 0) {
        stepCtx.setError((previous) => {
          return {
            ...previous,
            email: true,
          };
        });
        setPage(1);
        return;
      }

      if (stepCtx.inputValues.phone.length === 0) {
        stepCtx.setError((previous) => {
          return {
            ...previous,
            phone: true,
          };
        });
        setPage(1);
        return;
      }
    };

    const page2Check = () => {
      if (stepCtx.plan.names.length === 0) {
        stepCtx.setPlanError(true);
        stepCtx.setStep(2);
        setStep(2);

        return;
      }
      nextPage();
    };

    if (clicked === 1) setPage(1);
    if (clicked === 2) {
      page1Check();

      if (
        stepCtx.inputValues.names.length === 0 ||
        stepCtx.inputValues.email.length === 0 ||
        stepCtx.inputValues.phone.length === 0
      ) {
        return;
      }

      nextPage();
    }

    if (clicked === 3) {
      page1Check();
      if (
        stepCtx.inputValues.names.length === 0 ||
        stepCtx.inputValues.email.length === 0 ||
        stepCtx.inputValues.phone.length === 0
      ) {
        return;
      }

      page2Check();
    }

    if (clicked === 4) {
      page1Check();

      if (
        stepCtx.inputValues.names.length === 0 ||
        stepCtx.inputValues.email.length === 0 ||
        stepCtx.inputValues.phone.length === 0
      ) {
        return;
      }

      if (stepCtx.plan.names.length === 0) {
        stepCtx.setPlanError(true);
        stepCtx.setStep(2);
        setStep(2);

        return;
      }

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
