export class Tetris {
    constructor(selector){
        this.app = document.querySelector(selector);
    }

    init(){
        console.log(this.app);
        console.log('Tetris hello');
    }
    destroy(){}
}