const lightning = extend(UnitType, "lightning", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("somas-lightning-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("somas-lightning-orb-2", unit.x, unit.y, (Time.time + 10) * -14);
		Draw.rect("somas-lightning-orb", unit.x, unit.y, (Time.time - 8) * 12);
	}
});
lightning.constructor = () => extend(UnitEntity, {});
