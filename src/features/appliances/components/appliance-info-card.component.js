import React from "react";
import { Text } from "react-native";

import {
  ApplianceCard,
  ApplianceCardCover,
} from "./appliance-info-card.styles";

export const ApplianceInfoCard = ({ appliance = {} }) => {
  const {
    category = "Laundry",
    photo = "https://www.cnet.com/a/img/resize/8eac7c3424e851cef37cf37cbbab84b116c24a2f/hub/2016/10/05/71716aff-3091-4eb5-a8d6-e37f7e623cc6/whirlpoolwfw92hefuwasherproductphotos-2.jpg?auto=webp&fit=crop&height=360&width=640",
    type = "Washing Machine",
    make = "Whirlpool",
    model = "X500",
  } = appliance;
  return (
    <ApplianceCard>
      <ApplianceCardCover key={type} source={{ uri: photo }} />
      <Text>{type}</Text>
      <Text>{make}</Text>
      <Text>{model}</Text>
    </ApplianceCard>
  );
};
