import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {

    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';//方向
    islive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {//游戏开始
        //绑定键盘按下的事件 this.keyDownHandler.bind(this)
        document.addEventListener('keydown', (event)=>this.keyDownHandler(event));
        this.run();
        
    }
    
    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key;//修改方向
    }

    run(){
        //根据this.direction 去改变 
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y-=10;
                break;
            case "ArrowDown":
            case "Down":
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                X+=10;
                break;
            default:
                break;
        }

        this.checkEat(X, Y);

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e:any){
            alert(e.message);
            this.islive = false;
        }

        this.islive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1)* 30);
    }

    checkEat(X:number, Y:number){
        if(X == this.food.X && Y === this.food.Y){
            this.snake.addBody();
            this.food.change();
            this.scorePanel.addScore();
        }
    }

}

export default GameControl