const meise = extend(UnitType, "meise", {});
meise.abilities.add(new RepairFieldAbility(10, 60 * 5, 100));
meise.abilities.add(new ForceFieldAbility(80, 0.8, 1000, 50 * 6));
meise.constructor = () => extend(UnitWaterMove, {});