export {};

class Me {
  static isProgrammer: boolean = true;
  static lastName: string = 'Takuya';
  static firstName: string = 'Yasunaga';

  static work() {
    // return "Hei Guys! This is Takuya Are you interested in TypeScript? Let's dive into TypeScript ! "
    return `Hei Guys! This is ${this.firstName} ! Are you interested in TypeScript? Let's dive into TypeScript ! `;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
