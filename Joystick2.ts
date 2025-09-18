const {ccclass, property} = cc._decorator;

@ccclass
export default class Joystick2 extends cc.Component {
    @property(cc.Node)
    thumb: cc.Node = null; // 摇杆按钮

    @property
    maxDistance: number = 90; // 摇杆最大半径

    vector: cc.Vec2 = cc.Vec2.ZERO;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onDragEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onDragEnd, this);
    }

    onDrag(event: cc.Event.EventTouch) {
        const pos = this.node.convertToNodeSpaceAR(event.getLocation());
        let len = pos.mag();
        let out = pos;
        if (len > this.maxDistance) {
            out = pos.normalize().mul(this.maxDistance);
        }
        this.thumb.setPosition(out);
        this.vector = out.normalize();
    }

    onDragEnd() {
        this.thumb.setPosition(cc.Vec2.ZERO);
        this.vector = cc.Vec2.ZERO;
    }
}