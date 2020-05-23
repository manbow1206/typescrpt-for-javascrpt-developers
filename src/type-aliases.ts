export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooSMojiretsu: Mojiretsu = 'Hello';

const exsample1 = {
  name: 'ham',
  age: 23,
};

type Profile = {
  name: string;
  age: number;
};

const exsample2: Profile = {
  name: 'ham',
  age: 23,
};

type Profile2 = typeof exsample1;
