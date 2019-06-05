// Author：lerry（大掌教）
// 微信公众号ID：darkpalm
// Q群：704391772

const { ccclass, property } = cc._decorator;
import Game from "./MainGame";

// 使用注解定义一个CCClass，名称就是Player，括号内是参数
// 如果不传参，将会有意想不到的意外
@ccclass("Player")
export default class Player {

    @property({
        displayName: "昵称"
    })
    nickName = "大掌教";

    @property({
        displayName: "Q群"
    })
    qGroup = "704391772";

}
