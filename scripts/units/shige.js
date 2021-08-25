const shige = extend(UnitType, "shige", {});
shige.abilities.add(new RepairFieldAbility(10, 60 * 5, 75));
shige.constructor = () => extend(UnitWaterMove, {});