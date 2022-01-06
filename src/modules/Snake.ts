class Snake {
    //创建一个蛇头的元素
    head: HTMLElement;
    //创建蛇的身体
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div');
        console.log(this.bodies)
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(val) {
        if(this.X === val) return ;

        if(val <0 || val>290){
            throw new Error('蛇撞墙了') 
        } 

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val){
            // console.log('发生了水平方向')
            if(val > this.X) {
                val = this.X - 10
            }else{
                val = this.X + 10
            }
        }

        this.moveBody();

        this.head.style.left = val + 'px';

        this.checkHeadBody();
    }

    set Y(val) {
        if(this.Y === val) return ;

        if(val <0 || val>290){
            throw new Error('蛇撞墙了') 
        }   

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val){
            if(val > this.Y) {
                val = this.Y - 10
            }else{
                val = this.Y + 10
            }
        }

        this.moveBody();

        this.head.style.top = val + 'px';

        this.checkHeadBody();
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend',"<div></div>");
    }

    moveBody() {
        for( var i=this.bodies.length-1; i>0; i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody(){//检查头和身体是否相撞
        for(var i=1; i<this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到身体了')
            }
        }
    }
}

export default Snake