import {IFlyBehavior} from './IFlyBehavior';

export class FlyRocketPowered implements IFlyBehavior {
    public fly() {
        console.log('i\'m flying like a rocket!');
    }
}
