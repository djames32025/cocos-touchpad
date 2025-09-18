const {ccclass, property} = cc._decorator;

@ccclass
export default class Player2 extends cc.Component {
    @property
    speed: number = 180;

    @property
    joystick2: any = null; // Joystick2 脚本实例

    update(dt: number) {
        if (!this.joystick2) return;
        if (this.joystick2.vector.mag() > 0) {
            this.node.x += this.joystick2.vector.x * this.speed * dt;
            this.node.y += this.joystick2.vector.y * this.speed * dt;
        }
    }
}