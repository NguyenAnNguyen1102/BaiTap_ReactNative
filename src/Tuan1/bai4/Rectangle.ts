export class Rectangle{
    width:number;
    heigth:number;

    constructor(width:number,heigth:number){
        this.width= width;
        this.heigth=heigth;
    }

    dienTich():number{
        return this.width*this.heigth;
    }

    chuVi():number{
        return (this.width+this.heigth)*2
    }
}