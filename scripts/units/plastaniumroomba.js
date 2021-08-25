const plastaniumroomba = extend(UnitType, "plastaniumroomba", {});
plastaniumroomba.defaultController = () => new MinerAI()
plastaniumroomba.constructor = () => extend(LegsUnit, {});
