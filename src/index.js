import { Fruits } from './foods';
import { Choice, Remove } from './helper';

const randonFruit = Choice(Fruits);

console.log(`I'd like one ${randonFruit}, please`);
console.log(`Here you go: ${randonFruit}`);
console.log(`Delicious! May I have another?`);
Remove(Fruits, randonFruit);
console.log(`I'm sorry, we're all out. We have ${Fruits.length} left`);
