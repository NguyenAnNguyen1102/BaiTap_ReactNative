"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    dienTich() {
        return this.width * this.heigth;
    }
    chuVi() {
        return (this.width + this.heigth) * 2;
    }
}
exports.Rectangle = Rectangle;
