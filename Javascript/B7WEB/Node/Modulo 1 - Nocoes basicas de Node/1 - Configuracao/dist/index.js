"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica_1 = __importDefault(require("./Matematica"));
let n1 = 2;
let n2 = 5;
console.log(`Soma: ${Matematica_1.default.somar(n1, n2)}`);
console.log(`Multiplicação: ${Matematica_1.default.multiplicar(n1, n2)}`);
console.log(`Subtração: ${Matematica_1.default.subtrair(n1, n2)}`);
