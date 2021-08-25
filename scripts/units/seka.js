const seka = extend(UnitType, "seka", {});
seka.abilities.add(new RepairFieldAbility(10, 60 * 5, 75));
seka.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 60 * 6, 60 * 6, 60));
seka.constructor = () => extend(UnitWaterMove, {});