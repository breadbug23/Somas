const lightning = extend(UnitType, "lightning", {
	draw(unit){
		this.super$draw(unit);
		Draw.rect("somas-lightning-orb", unit.x, unit.y, Time.time * 12);
		Draw.rect("somas-lightning-orb", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("somas-lightning-orb", unit.x, unit.y, (Time.time - 10) * 12);
		Draw.rect("somas-lightning-orb-outline", unit.x, unit.y, Time.time * 12);
		Draw.rect("somas-lightning-orb-outline", unit.x, unit.y, (Time.time + 10) * 12);
		Draw.rect("somas-lightning-orb-outline", unit.x, unit.y, (Time.time - 10) * 12);
	}
});
lightning.constructor = () => extend(UnitEntity, {});
