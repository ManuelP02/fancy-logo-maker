    const {describe, it, expect} = require('@jest/globals');
    const {Shape, Circle, Triangle, Square} = require('./shapes');

    describe('Shape Class', ()=>{
        it('setColor method should set the color property', ()=>{
            const shape = new Shape();
            shape.setColor('blue');
            expect(shape.color).toBe('blue');
        });
    });

    describe('Circle', ()=>{
        it('Renders ok', ()=>{
            const shape = new Circle();
            const color = ('blue');
            shape.setColor(color);
            expect(shape.render()).toBe(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
        })
    });


    describe('Triangle', ()=>{
        it('setColor method should set the color property', ()=>{
            const shape = new Triangle();
            const color = ('blue');
            shape.setColor(color);
            expect(shape.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`);
            
        });
    });

    describe('Square', ()=>{
        it('setColor method should set the color property', ()=>{
            const shape = new Square();
            const color = ('blue');
            shape.setColor(color);
            expect(shape.render()).toBe(`<rect x="90" y="40" width="120" height="120" fill="${color}"/>`);
        });
    });