import {IFlyBehavior} from './IFlyBehavior';
import {IQuackBehavior} from './IQuackBehavior';
 
export abstract class Duck {
    constructor(
        private flyBehavior: IFlyBehavior,
        private quackBehavior: IQuackBehavior
    ) {}

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public setFlyBehavior(newFlyBehavior: IFlyBehavior): void {
        this.flyBehavior = newFlyBehavior;
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public swym(): void {
        console.log('All ducks float')
    }
}