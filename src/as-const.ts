export {};

let name = 'Hayato';
name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro';

let profile = {
  name: 'manbow',
  height: 180,
} as const;

// profile.name = 'Ham';
// profile.height = 1;
