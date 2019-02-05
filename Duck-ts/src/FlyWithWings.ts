import {IFlyBehavior} from './IFlyBehavior';

export class FlyWithWings implements IFlyBehavior {
    public fly(): void {
        console.log('i\'m flying');
    }
}
