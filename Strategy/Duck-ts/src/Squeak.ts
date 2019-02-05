import {IQuackBehavior} from './IQuackBehavior';

export class Squeak implements IQuackBehavior {
    public quack() {
        console.log('Squeak');
    }
}
