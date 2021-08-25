const graphiteroomba = extend(UnitType, "graphiteroomba", {});
graphiteroomba.defaultController = () => new MinerAI()
graphiteroomba.constructor = () => extend(UnitWaterMove, {});
