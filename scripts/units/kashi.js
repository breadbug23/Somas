const kashi = extend(UnitType, "kashi", {});
kashi.abilities.add(new RepairFieldAbility(17, 60 * 4, 150));
kashi.constructor = () => extend(UnitWaterMove, {});