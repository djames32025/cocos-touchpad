const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    @property
    speed: number = 200;

    @property
    joystick: any = null; // Joystick 脚本实例

    update(dt: number) {
        if (!this.joystick) return;
        if (this.joystick.direction.mag() > 0) {
            this.node.x += this.joystick.direction.x * this.speed * dt;
            this.node.y += this.joystick.direction.y * this.speed * dt;
        }
    }
}