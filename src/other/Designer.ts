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
  Ball,
  BlackHole,
  Diamond,
  Emerald,
  Ruby,
  Sapphire,
  Gold,
  Silver,
} from '../other/Items';

import {
  USE_DARKRED_BALL,
  USE_BLACK_HOLE,
  USE_CLASSIC_DIAMOND,
  USE_EMERALD,
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
    // currentFieldColor: 'gold',
  },
  {
    title: 'orange brick wall',
    description: 'classic orange brick wall',
    wall: Brick2,
    rotatedWall: RotatedBrick2,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'dark castle wall',
    description: 'classic orange brick wall',
    wall: Brick3,
    rotatedWall: RotatedBrick3,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'grassy maze',
    description: 'classic orange brick wall',
    wall: Brick4,
    rotatedWall: RotatedBrick4,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'ice wall 1',
    description: 'classic orange brick wall',
    wall: Brick5,
    rotatedWall: RotatedBrick5,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'ice wall 2',
    description: 'classic orange brick wall',
    wall: Brick6,
    rotatedWall: RotatedBrick6,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'water maze',
    description: 'classic orange brick wall',
    wall: Brick7,
    rotatedWall: RotatedBrick7,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'wooden wall',
    description: 'classic orange brick wall',
    wall: Brick8,
    rotatedWall: RotatedBrick8,
    // currentFieldColor: '#4666ff',
  },
  {
    title: 'sand wall',
    description: 'classic orange brick wall',
    wall: Background1,
    rotatedWall: Background1,
    // currentFieldColor: '#4666ff',
  },
];

export const ITEMS_DESIGNES = [
  {
    title: 'dark red ball',
    item: Ball,
    action: USE_DARKRED_BALL,
  },
  {
    title: 'black hole',
    item: BlackHole,
    action: USE_BLACK_HOLE,
  },

  {
    title: 'classic diamond',
    item: Diamond,
    action: USE_CLASSIC_DIAMOND,
  },
  {
    title: 'emerald',
    item: Emerald,
    action: USE_EMERALD,
  },
  {
    title: 'ruby',
    item: Ruby,
    action: USE_EMERALD,
  },
  {
    title: 'sapphire',
    item: Sapphire,
    action: USE_EMERALD,
  },
  {
    title: 'gold',
    item: Gold,
    action: USE_EMERALD,
  },
  {
    title: 'silver',
    item: Silver,
    action: USE_EMERALD,
  },
];
