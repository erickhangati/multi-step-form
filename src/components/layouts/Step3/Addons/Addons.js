import React, { useContext } from "react";

import StepContext from "../../../../store/step-context";
import ListItem from "../List/ListItem";

import styles from "./Addons.module.css";

const Addons = () => {
  const stepCtx = useContext(StepContext);

  const addonClickHandler = (item, index) => {
    // Pick addons from selected plan.
    const selectedAddons =
      stepCtx.billed === "monthly"
        ? stepCtx.addons.monthly
        : stepCtx.addons.yearly;

    // Loop to filter selected addon.
    const filteredAddons = selectedAddons.filter(
      (addon) => addon.names !== item.names
    );

    // Toggle addon selected.
    filteredAddons.splice(index, 0, {
      names: item.names,
      description: item.description,
      price: item.price,
      checked: !item.checked,
    });

    const { billed } = stepCtx;

    // Set addons
    stepCtx.setAddons((previous) => {
      return { ...previous, [billed]: filteredAddons };
    });
  };

  return (
    <div className={styles.addons}>
      {(stepCtx.billed === "monthly"
        ? stepCtx.addons.monthly
        : stepCtx.addons.yearly
      ).map((item, index) => (
        <ListItem
          key={index}
          className={item.checked ? styles.active : ""}
          names={item.names}
          description={item.description}
          price={item.price}
          onClick={addonClickHandler.bind(null, item, index)}
          checked={item.checked}
        />
      ))}
    </div>
  );
};

export default Addons;
