// Author：lerry（大掌教）
// 微信公众号ID：darkpalm
// Q群：704391772
const { ccclass, property } = cc._decorator;

let SexyType = cc.Enum({
    未知: 0,
    男: 1,
    女: 2
});
@ccclass
export default class MainGame extends cc.Component {

    // 最简单的写法，一个节点
    @property(cc.Node)
    dog: cc.Node = null;

    // 声明一个Sprite属性
    @property({
        type: cc.Sprite,
        displayName: "背景"
    })
    backGround: cc.Sprite = null;

    // 声明一个Label属性
    @property({
        type: cc.Label,
        displayName: "标题"
    })
    label: cc.Label = null;

    // 声明一个带说明的属性
    @property({
        type: cc.Node,
        displayName: "底座",
        tooltip: "底部炮台的父节点"
    })
    baseNode: cc.Node = null;

    // 带说明，只能输入整数，最大值10，最小值0
    @property({
        type: cc.Integer,
        displayName: "血量",
        min: 0,
        max: 10,
        tooltip: "人物当前血量"
    })
    HP = 10;

    // 自定义枚举，下拉框属性，中文显示
    @property({
        type: cc.Enum(SexyType),
        displayName: "性别"
    })
    sex = SexyType.未知;

    // 声明文本框
    @property({ displayName: "作者" })
    author = "大掌教";
    
    @property({ displayName: "Q群" })
    QQ = "704391772";

    // 声明cc.ValueType子类型，Vec2，Vec3等
    @property({
        displayName: "坐标"
    })
    pos: cc.Vec2 = new cc.Vec2(0);

    // 声明滑动条，不加type就是浮点值
    @property({
        type: cc.Integer,
        min: 0,
        max: 120,
        step: 1,
        slide: true,
        displayName: "年龄"
    })
    age = 32;

    // 声明事件回调，类似button的点击事件回调
    @property({
        type: cc.Component.EventHandler,
        displayName: "双杀"
    })
    doubleKill = new cc.Component.EventHandler();


    onLoad() {
        cc.Rect

    }



    start() {

    }
}
