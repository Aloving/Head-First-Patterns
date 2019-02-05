import {Duck} from './Duck';
import {Quack} from './Quack';
import {FlyWithWings} from './FlyWithWings';

export class MallardDuck extends Duck {
    constructor() {
        super(new FlyWithWings(), new Quack());
    }

    public display() {
        console.log('i\'m MallardDuck');
    }
}