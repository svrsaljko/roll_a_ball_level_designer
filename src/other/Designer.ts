import {
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
  Background6,
  Background7,
  Brick1,
  Brick2,
  Brick3,
  Brick4,
  Brick5,
  Brick6,
  Brick7,
  Brick8,
  RotatedBrick1,
  RotatedBrick2,
  RotatedBrick3,
  RotatedBrick4,
  RotatedBrick5,
  RotatedBrick6,
  RotatedBrick7,
  RotatedBrick8,
} from '../images';

import {
  DarkRedBall,
  IceBall,
  NeonBlueBall,
  BlackDoor,
  GoldDoor,
  IceDoor,
  Diamond,
  Emerald,
  Ruby,
  Sapphire,
  Gold,
  Silver,
  NeonGreenEnemy,
  NeonRedEnemy,
  NeonBlueEnemy,
} from '../other/Items';

import {
  //BALL
  USE_DARK_RED_BALL,
  USE_ICE_BALL,
  USE_NEON_BLUE_BALL,
  // DOOR
  USE_BLACK_DOOR,
  USE_GOLD_DOOR,
  USE_ICE_DOOR,
  // ITEMS
  USE_GOLD,
  USE_SILVER,
  USE_DIAMOND,
  USE_EMERALD,
  USE_SAPPHIRE,
  USE_RUBY,
  // ENEMY
  USE_NEON_RED_ENEMY,
  USE_NEON_GREEN_ENEMY,
  USE_NEON_BLUE_ENEMY,
} from './Constants';

export const FIELDS_DESIGNS = [
  {
    title: 'yellow sand',
    description: 'Slow for rolling',
    image: Background1,
    currentFieldColor: 'gold',
  },
  {
    title: 'space1',
    description: 'Slow for rolling',
    image: Background2,
    currentFieldColor: '#4666ff',
  },
  {
    title: 'space2',
    description: 'Slow for rolling',
    image: Background3,
    currentFieldColor: '#bc13fe',
  },
  {
    title: 'red sand',
    description: 'Slow for rolling',
    image: Background4,
    currentFieldColor: 'sandybrown',
  },
  {
    title: 'wooden surface',
    description: 'Slow for rolling',
    image: Background5,
    currentFieldColor: 'sandybrown',
  },
  {
    title: 'sea',
    description: 'Slow for rolling',
    image: Brick7,
    currentFieldColor: '#006994',
  },
  {
    title: 'grass',
    description: 'Slow for rolling',
    image: Brick4,
    currentFieldColor: '#567d46',
  },
  {
    title: 'ice',
    description: 'Slow for rolling',
    image: Brick5,
    currentFieldColor: '#006994',
  },
  {
    title: 'moving water',
    description: 'Slow for rolling',
    image: Background6,
    currentFieldColor: '#006994',
  },
  {
    title: 'under water',
    description: 'Slow for rolling',
    image: Background7,
    currentFieldColor: '#00b0ff',
  },
];

export const WALLS_DESIGNS = [
  {
    title: 'classic castle wall',
    description: 'Castle wall deisgn',
    wall: Brick1,
    rotatedWall: RotatedBrick1,
  },
  {
    title: 'orange brick wall',
    description: 'classic orange brick wall',
    wall: Brick2,
    rotatedWall: RotatedBrick2,
  },
  {
    title: 'dark castle wall',
    description: 'classic orange brick wall',
    wall: Brick3,
    rotatedWall: RotatedBrick3,
  },
  {
    title: 'grassy maze',
    description: 'classic orange brick wall',
    wall: Brick4,
    rotatedWall: RotatedBrick4,
  },
  {
    title: 'ice wall 1',
    description: 'classic orange brick wall',
    wall: Brick5,
    rotatedWall: RotatedBrick5,
  },
  {
    title: 'ice wall 2',
    description: 'classic orange brick wall',
    wall: Brick6,
    rotatedWall: RotatedBrick6,
  },
  {
    title: 'water maze',
    description: 'classic orange brick wall',
    wall: Brick7,
    rotatedWall: RotatedBrick7,
  },
  {
    title: 'wooden wall',
    description: 'classic orange brick wall',
    wall: Brick8,
    rotatedWall: RotatedBrick8,
  },
  {
    title: 'sand wall',
    description: 'classic orange brick wall',
    wall: Background1,
    rotatedWall: Background1,
  },
];

export const ITEMS_DESIGNS = [
  // BALL

  {
    title: 'dark red ball',
    item: DarkRedBall,
    action: USE_DARK_RED_BALL,
  },
  {
    title: 'ice ball',
    item: IceBall,
    action: USE_ICE_BALL,
  },
  {
    title: 'neon blue ball',
    item: NeonBlueBall,
    action: USE_NEON_BLUE_BALL,
  },
  // DOOR

  {
    title: 'black door',
    item: BlackDoor,
    action: USE_BLACK_DOOR,
  },
  {
    title: 'gold door',
    item: GoldDoor,
    action: USE_GOLD_DOOR,
  },
  {
    title: 'ice door',
    item: IceDoor,
    action: USE_ICE_DOOR,
  },

  //ITEMS

  {
    title: 'gold',
    item: Gold,
    action: USE_GOLD,
  },
  {
    title: 'silver',
    item: Silver,
    action: USE_SILVER,
  },
  {
    title: 'diamond',
    item: Diamond,
    action: USE_DIAMOND,
  },
  {
    title: 'emerald',
    item: Emerald,
    action: USE_EMERALD,
  },
  {
    title: 'ruby',
    item: Ruby,
    action: USE_RUBY,
  },
  {
    title: 'sapphire',
    item: Sapphire,
    action: USE_SAPPHIRE,
  },
  // ENEMIES
  {
    title: 'green enemy',
    item: NeonGreenEnemy,
    action: USE_NEON_GREEN_ENEMY,
  },
  {
    title: 'red enemy',
    item: NeonRedEnemy,
    action: USE_NEON_RED_ENEMY,
  },
  {
    title: 'blue enemy',
    item: NeonBlueEnemy,
    action: USE_NEON_BLUE_ENEMY,
  },
];
