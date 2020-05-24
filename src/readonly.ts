export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('まんぼう');
console.log(myVisaCard);
// myVisaCard.owner = 'じんべいざめ';
