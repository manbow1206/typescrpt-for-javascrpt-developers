export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'Manbow', underTwenty: false };

// How to write index signatures
//{ [ index: typeForIndex ]: typeForValue }

profile.name = 'Zinbei';
profile.age = 10;
profile.nationarity = 'Japan';
