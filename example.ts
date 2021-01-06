import { Baby, Gender, Encoding } from './src/baby';

const myBoy = new Baby({
  name: 'Ignacy',
  gender: Gender.BOY,
  height: 55,
  weight: 3.54,
  bornAt: new Date('12/16/2020, 9:28:00 AM')
});

myBoy.announce();
myBoy.say('Hello World!', { encoding: Encoding.WTF_0 });
