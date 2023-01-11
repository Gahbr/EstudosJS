import {Math} from './Math'

describe('Testando a biblioteca Math', ()=>{

    it('Should sum two numbers correctly', ()=>{
        const response = Math.sum(5,10)
        expect(response).toBe(15);
    })
    
    it('Should subtract two numbers correctly', ()=>{
        const response = Math.sub(4,2)
        expect(response).toBe(2);
    })
    
    it('Should multiply two numbers correctly', ()=>{
        const response = Math.mult(3,5);
        expect(response).toBe(15);
    })
    
    it('Should divide two numbers correctly', ()=>{
        const response = Math.div(15,5)
        expect(response).toBe(3);
    
        const response2 = Math.div(3,0)
        expect(response2).toBe(false);
    })
})
