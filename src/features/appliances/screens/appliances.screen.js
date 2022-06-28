import react from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ApplianceInfoCard } from "../components/appliance-info-card.component";

export const AppliancesScreen = () => {
  return (
    <SafeArea>
      <ApplianceInfoCard />
    </SafeArea>
  );
};
