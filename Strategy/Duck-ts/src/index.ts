import {MallardDuck} from './MallardDuck';
import {FlyRocketPowered} from './FlyRocketPowered';

const mallard = new MallardDuck();

mallard.performFly();
mallard.performQuack();
mallard.setFlyBehavior(new FlyRocketPowered);
mallard.performFly();
