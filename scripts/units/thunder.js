const thunder = extend(UnitType, "thunder", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("somas-thunder-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("somas-thunder-orb", unit.x, unit.y, (Time.time + 6.5) * 12);
		Draw.rect("somas-thunder-orb-2", unit.x, unit.y, Time.time * -14);
		Draw.rect("somas-thunder-orb-2", unit.x, unit.y, (Time.time + 6.5) * -14);
	}
});
thunder.constructor = () => extend(UnitEntity, {});
