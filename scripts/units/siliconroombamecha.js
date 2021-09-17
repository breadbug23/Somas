const siliconroombamecha = extend(UnitType, "siliconroombamecha", {});

siliconroombamecha.defaultController = () => new MinerAI()

siliconroombamecha.constructor = () => extend(MechUnit, {});