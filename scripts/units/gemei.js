const gemei = extend(UnitType, "gemei", {});
gemei.abilities.add(new RepairFieldAbility(20, 60 * 1, 100));
gemei.constructor = () => extend(UnitWaterMove, {});