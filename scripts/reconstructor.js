const unitPlans = new Seq(UnitFactory.UnitPlan);
const addPlan = (fac, plan) => {
  fac.plans.add(plan);
};

const reconAdd = (recon, planArray) => {
  planArray.forEach(e => {
    recon.upgrades.add(e.toArray(UnitType));
  });
};

const cunit = name => Vars.content.getByName(ContentType.unit, "somas-" + name);

const zapperPlan = new UnitFactory.UnitPlan(
  cunit("zapper"),
  60 * 10,
  ItemStack.with(
    Items.silicon, 35,
    Items.titanium, 25
  )
);
addPlan(Blocks.airFactory, zapperPlan);

reconAdd(Blocks.additiveReconstructor, [
  Seq.with(
    cunit("zapper"),
    cunit("taser"),
  ),
]);

reconAdd(Blocks.multiplicativeReconstructor, [
  Seq.with(
    cunit("taser"),
    cunit("lightning"),
  ),
]);

reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    cunit("lightning"),
    cunit("thunder"),
  ),
]);

reconAdd(Blocks.tetrativeReconstructor, [
  Seq.with(
    cunit("thunder"),
    cunit("storm"),
  ),
]);

const shigePlan = new UnitFactory.UnitPlan(
  cunit("shige"),
  60 * 20,
  ItemStack.with(
    Items.silicon, 35,
    Items.titanium, 25,
	Items.lead, 20
  )
);
addPlan(Blocks.navalFactory, shigePlan);

reconAdd(Blocks.additiveReconstructor, [
  Seq.with(
    cunit("shige"),
    cunit("kashi"),
  ),
]);

reconAdd(Blocks.multiplicativeReconstructor, [
  Seq.with(
    cunit("kashi"),
    cunit("seka"),
  ),
]);

reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    cunit("seka"),
    cunit("meise"),
  ),
]);

reconAdd(Blocks.tetrativeReconstructor, [
  Seq.with(
    cunit("meise"),
    cunit("gemei"),
  ),
]);