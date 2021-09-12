const storm = extend(UnitType, "storm", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("somas-storm-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("somas-storm-orb", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("somas-storm-orb", unit.x, unit.y, (Time.time - 10) * 12);
		Draw.rect("somas-storm-orb-2", unit.x, unit.y, Time.time * -14);
		Draw.rect("somas-storm-orb-2", unit.x, unit.y, (Time.time + 6.5) * -14);
	}
});
storm.constructor = () => extend(UnitEntity, {});
