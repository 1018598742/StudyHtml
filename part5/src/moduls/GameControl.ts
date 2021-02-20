//引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器
class GameControl {
    //定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //创建一个属性来存储蛇的移动方向(按键的方向)
    direction: String = '';
    //创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    //游戏的初始化方法，调用后游戏即开始
    init() {
        //绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        //调用run方法，使蛇移动
        this.run();
    }

    //穿件一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        //修改direction属性
        this.direction = event.key;
    }

    //创建一个控制蛇移动的方法
    run() {
        /*
        向上 top 减少
        向下 top 增加
        向左 left 减少
        向右 left 增加
         */
        let X = this.snake.X;
        let Y = this.snake.Y;

        //根据按键的方向来修改 X 值和 Y 值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break
            case "ArrowDown":
            case "Down":
                Y += 10;
                break
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break
            case "ArrowRight":
            case "Right":
                X += 10;
                break
        }

        //检查蛇是否迟到了食物
        this.checkEat(X, Y)

        //修改蛇的X和Y值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e.message + ' GAME OVER!');
            //将isLive设置为false
            this.isLive = false;
        }


        //开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    //定义一个方法，用来检查蛇是否迟到食物
    checkEat(X: number, Y: number) {
        //如果蛇头坐标和食物坐标重合，则为吃到了食物。
        if (X === this.food.X && Y === this.food.Y) {
            //食物改变位置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇要增加一节
            this.snake.addBody();
        }
    }

}

export default GameControl;