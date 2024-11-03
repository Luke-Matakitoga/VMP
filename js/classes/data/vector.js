export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

export class Vector3 extends Vector2 {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
}