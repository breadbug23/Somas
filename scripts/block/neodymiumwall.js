const neodymiumWall = extend(Wall, "neodymiumwall", {
    update: true,
    range: 16,
    repelStrength: 0.125,
    scaledRepelStrength: 0.375
});

neodymiumWall.buildType = () => extend(Wall.WallBuild, neodymiumWall, {
    updateTile(){
        if(this.timer.get(0, 2)){
            let range = neodymiumWall.range;
            Groups.bullet.intersect(this.x - range, this.y - range, range * 2, range * 2, b => {
                if(!b.type.reflectable) return;
                Tmp.v1.trns(this.angleTo(b), neodymiumWall.repelStrength + Mathf.maxZero((range - b.dst(this)) / range) * neodymiumWall.scaledRepelStrength);
                b.velAddNet(Tmp.v1);
            });
        }
    }
});

const neodymiumWallLarge = extend(Wall, "neodymiumwalllarge", {
    update: true,
    range: 32,
    repelStrength: 0.5,
    scaledRepelStrength: 1.5
});

neodymiumWallLarge.buildType = () => extend(Wall.WallBuild, neodymiumWallLarge, {
    updateTile(){
        if(this.timer.get(0, 2)){
            let range = neodymiumWallLarge.range;
            Groups.bullet.intersect(this.x - range, this.y - range, range * 2, range * 2, b => {
                if(!b.type.reflectable) return;
                Tmp.v1.trns(this.angleTo(b), neodymiumWallLarge.repelStrength + Mathf.maxZero((range - b.dst(this)) / range) * neodymiumWallLarge.scaledRepelStrength);
                b.velAddNet(Tmp.v1);
            });
        }
    }
});