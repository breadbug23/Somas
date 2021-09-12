const taser = extend(UnitType, "taser", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("somas-taser-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("somas-taser-orb-2", unit.x, unit.y, Time.time * -14);
	}
});
taser.constructor = () => extend(UnitEntity, {});
