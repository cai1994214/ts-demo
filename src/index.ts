import './style/index.less';

class Food {
    element: HTMLElement;

    constructor () {
        this.element = document.getElementById("fond") as HTMLElement;
    }

    //获取当前坐标
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        //出现位置 随机 最小0 最大290 并且是整10数
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

const food = new Food();
food.change();
console.log(food.X, food.Y)