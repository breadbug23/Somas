const siliconroomba = extend(UnitType, "siliconroomba", {});

siliconroomba.defaultController = () => new MinerAI()

siliconroomba.constructor = () => extend(MechUnit, {});