export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknwon: unknown = kansu();

let sumAny = numberAny + 10;

if (typeof numberUnknwon === 'number') {
  let sumUnnkwon = numberUnknwon + 10;
}
