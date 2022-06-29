import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ApplianceInfoCard } from "../components/appliance-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ApplianceList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const AppliancesScreen = () => {
  return (
    <SafeArea>
      <ApplianceList
      data={[
        { type: 1 },
        { type: 2 },
        { type: 3 },
        { type: 4 },
        { type: 5 },
        { type: 6 },
        { type: 7 },
        { type: 8 },
        { type: 9 },
        { type: 10 },
      ]}
      renderItem={() => (
        <Spacer size="large" position="bottom">
          <ApplianceInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.type}
    />
    </SafeArea>
  );
};
