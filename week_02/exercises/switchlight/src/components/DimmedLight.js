import React from "react";
import SwitchLights from "./SwitchLights";
import Dimmer from "./Dimmer";

export default function DimmedLight() {
  const [dimPercentage, setDimPercentage] = React.useState(100);
  return (
    <div>
      <SwitchLights dimPercentage={dimPercentage} />
      <Dimmer
        dimPercentage={dimPercentage}
        setDimPercentage={setDimPercentage}
      />
    </div>
  );
}
