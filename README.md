# cocos-touchpad

一个基于 Cocos Creator (TypeScript) 的虚拟摇杆（触摸盘）控制玩家移动的示例。

## 文件说明

- `Joystick.ts`：虚拟摇杆组件，监听触摸事件，输出方向向量。
- `Player.ts`：玩家移动示例脚本，根据摇杆方向移动角色。

## 使用方法

1. 将 `Joystick.ts` 挂载在摇杆底盘节点上。
2. 将摇杆按钮节点拖到 `stick` 属性上。
3. 在玩家角色节点上挂载 `Player.ts`，并将 Joystick 脚本实例拖到 `joystick` 属性上。
4. 调整摇杆、玩家节点的层级和位置，确保测试时可正常拖动摇杆并移动玩家。

## 效果演示

- 拖动摇杆按钮，玩家角色会朝着摇杆方向移动。
- 松开摇杆，玩家角色停止移动。

## 适用版本

- Cocos Creator 2.x/3.x，TypeScript 语言。

## 相关参考

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/)
- [Cocos 虚拟摇杆教程](https://blog.csdn.net/qq_35569112/article/details/102591357)