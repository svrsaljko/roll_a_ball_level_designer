import { IField } from '../interfaces/IField';
import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  FIELD_HEIGHT,
  FIELD_WIDTH,
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

export const updateField = (field: IField, clickCounter: number): IField => {
  field.clickCounter = clickCounter;
  if (clickCounter === 0) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 1) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 2) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 3) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 4) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = false;
  } else if (clickCounter === 5) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 6) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = false;
    field.leftWall = true;
  } else if (clickCounter === 7) {
    field.topWall = true;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 8) {
    field.topWall = false;
    field.bottomWall = true;
    field.rightWall = true;
    field.leftWall = false;
  } else if (clickCounter === 9) {
    field.topWall = false;
    field.bottomWall = false;
    field.rightWall = true;
    field.leftWall = true;
  } else if (clickCounter === 10) {
    field.topWall = true;
    field.bottomWall = true;
    field.rightWall = false;
    field.leftWall = false;
  }

  return fieldWithoutItem(field);
};

const fieldWithoutItem = (field: IField) => {
  // BALL
  field.hasDarkRedBall = false;
  field.hasIceBall = false;
  field.hasNeonBlueBall = false;
  // DOOR
  field.hasBlackDoor = false;
  field.hasGoldDoor = false;
  field.hasIceDoor = false;
  // ITEMS
  field.hasGold = false;
  field.hasSilver = false;
  field.hasDiamond = false;
  field.hasEmerald = false;
  field.hasSapphire = false;
  field.hasRuby = false;
  // ENEMY
  field.hasNeonRedEnemy = false;
  field.hasNeonGreenEnemy = false;
  field.hasNeonBlueEnemy = false;

  return field;
};

const fieldWithDoor = (field: IField) => {
  field.topWall = false;
  field.bottomWall = false;
  field.rightWall = false;
  field.leftWall = false;
  // BALL
  field.hasDarkRedBall = false;
  field.hasIceBall = false;
  field.hasNeonBlueBall = false;
  // ITEMS
  field.hasGold = false;
  field.hasSilver = false;
  field.hasDiamond = false;
  field.hasEmerald = false;
  field.hasSapphire = false;
  field.hasRuby = false;
  // ENEMY
  field.hasNeonRedEnemy = false;
  field.hasNeonGreenEnemy = false;
  field.hasNeonBlueEnemy = false;

  return field;
};
const fieldWithBall = (field: IField) => {
  field.topWall = false;
  field.bottomWall = false;
  field.rightWall = false;
  field.leftWall = false;
  // DOOR
  field.hasBlackDoor = false;
  field.hasGoldDoor = false;
  field.hasIceDoor = false;
  // ITEMS
  field.hasGold = false;
  field.hasSilver = false;
  field.hasDiamond = false;
  field.hasEmerald = false;
  field.hasSapphire = false;
  field.hasRuby = false;
  // ENEMY
  field.hasNeonRedEnemy = false;
  field.hasNeonGreenEnemy = false;
  field.hasNeonBlueEnemy = false;

  return field;
};

const fieldWithDiamond = (field: IField) => {
  field.topWall = false;
  field.bottomWall = false;
  field.rightWall = false;
  field.leftWall = false;

  // BALL
  field.hasDarkRedBall = false;
  field.hasIceBall = false;
  field.hasNeonBlueBall = false;
  // DOOR
  field.hasBlackDoor = false;
  field.hasGoldDoor = false;
  field.hasIceDoor = false;
  // ENEMY
  field.hasNeonRedEnemy = false;
  field.hasNeonGreenEnemy = false;
  field.hasNeonBlueEnemy = false;

  return field;
};

const fieldWithEnemy = (field: IField) => {
  // BALL
  field.hasDarkRedBall = false;
  field.hasIceBall = false;
  field.hasNeonBlueBall = false;
  // DOOR
  field.hasBlackDoor = false;
  field.hasGoldDoor = false;
  field.hasIceDoor = false;
  // ITEMS
  field.hasGold = false;
  field.hasSilver = false;
  field.hasDiamond = false;
  field.hasEmerald = false;
  field.hasSapphire = false;
  field.hasRuby = false;

  return field;
};

export const updateItem = (field: IField, itemAction: string): IField => {
  switch (itemAction) {
    // BALL
    case USE_DARK_RED_BALL: {
      field.hasDarkRedBall = true;
      field.hasIceBall = false;
      field.hasNeonBlueBall = false;
      return fieldWithBall(field);
    }
    case USE_ICE_BALL: {
      field.hasDarkRedBall = false;
      field.hasIceBall = true;
      field.hasNeonBlueBall = false;
      return fieldWithBall(field);
    }
    case USE_NEON_BLUE_BALL: {
      field.hasDarkRedBall = false;
      field.hasIceBall = false;
      field.hasNeonBlueBall = true;
      return fieldWithBall(field);
    }
    // DOOR
    case USE_BLACK_DOOR: {
      field.hasBlackDoor = true;
      field.hasGoldDoor = false;
      field.hasIceDoor = false;
      return fieldWithDoor(field);
    }
    case USE_GOLD_DOOR: {
      field.hasBlackDoor = false;
      field.hasGoldDoor = true;
      field.hasIceDoor = false;
      return fieldWithDoor(field);
    }
    case USE_ICE_DOOR: {
      field.hasBlackDoor = false;
      field.hasGoldDoor = false;
      field.hasIceDoor = true;
      return fieldWithDoor(field);
    }
    // ITEM
    case USE_GOLD: {
      field.hasGold = true;
      field.hasSilver = false;
      field.hasDiamond = false;
      field.hasEmerald = false;
      field.hasSapphire = false;
      field.hasRuby = false;

      return fieldWithDiamond(field);
    }
    case USE_SILVER: {
      field.hasGold = false;
      field.hasSilver = true;
      field.hasDiamond = false;
      field.hasEmerald = false;
      field.hasSapphire = false;
      field.hasRuby = false;
      return fieldWithDiamond(field);
    }
    case USE_DIAMOND: {
      field.hasGold = false;
      field.hasSilver = false;
      field.hasDiamond = true;
      field.hasEmerald = false;
      field.hasSapphire = false;
      field.hasRuby = false;
      return fieldWithDiamond(field);
    }
    case USE_EMERALD: {
      field.hasGold = false;
      field.hasSilver = false;
      field.hasDiamond = false;
      field.hasEmerald = true;
      field.hasSapphire = false;
      field.hasRuby = false;
      return fieldWithDiamond(field);
    }
    case USE_RUBY: {
      field.hasGold = false;
      field.hasSilver = false;
      field.hasDiamond = false;
      field.hasEmerald = false;
      field.hasSapphire = false;
      field.hasRuby = true;
      return fieldWithDiamond(field);
    }
    case USE_SAPPHIRE: {
      field.hasGold = false;
      field.hasSilver = false;
      field.hasDiamond = false;
      field.hasEmerald = false;
      field.hasSapphire = true;
      field.hasRuby = false;
      return fieldWithDiamond(field);
    }
    //ENEMY
    case USE_NEON_RED_ENEMY: {
      field.hasNeonRedEnemy = true;
      field.hasNeonGreenEnemy = false;
      field.hasNeonBlueEnemy = false;
      return fieldWithEnemy(field);
    }
    case USE_NEON_GREEN_ENEMY: {
      field.hasNeonRedEnemy = false;
      field.hasNeonGreenEnemy = true;
      field.hasNeonBlueEnemy = false;
      return fieldWithEnemy(field);
    }
    case USE_NEON_BLUE_ENEMY: {
      field.hasNeonRedEnemy = false;
      field.hasNeonGreenEnemy = false;
      field.hasNeonBlueEnemy = true;
      return fieldWithEnemy(field);
    }
    default: {
      field.topWall = false;
      field.bottomWall = false;
      field.rightWall = false;
      field.leftWall = false;
      return fieldWithoutItem(field);
    }
  }
};

export const initializeFields = () => {
  const fields = new Array<IField>(NUMBER_OF_ROWS * NUMBER_OF_COLUMNS);
  let field: IField;
  let fieldId: number = 0;
  let topWall: boolean = false;
  let bottomWall: boolean = false;
  let rightWall: boolean = false;
  let leftWall: boolean = false;
  let leftFieldId: null | number = null;
  let rightFieldId: null | number = null;
  let topFieldId: null | number = null;
  let bottomFieldId: null | number = null;
  let top: number;
  let left: number;
  let clickCounter: number;
  // BALL
  let hasDarkRedBall: boolean;
  let hasIceBall: boolean;
  let hasNeonBlueBall: boolean;
  // DOOR
  let hasBlackDoor: boolean;
  let hasGoldDoor: boolean;
  let hasIceDoor: boolean;
  // ITEMS
  let hasGold: boolean;
  let hasSilver: boolean;
  let hasDiamond: boolean;
  let hasEmerald: boolean;
  let hasSapphire: boolean;
  let hasRuby: boolean;
  // ENEMY
  let hasNeonRedEnemy: boolean;
  let hasNeonGreenEnemy: boolean;
  let hasNeonBlueEnemy: boolean;

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      // INITIALIZE SURROUNDING WALLS

      clickCounter = 0;

      if (i === 0) {
        topWall = true;
      }
      if (i === NUMBER_OF_ROWS - 1) {
        bottomWall = true;
      }
      if (j === 0) {
        leftWall = true;
      }
      if (j === NUMBER_OF_COLUMNS - 1) {
        rightWall = true;
      }

      // assign clickCounter to side walls
      if (leftWall) {
        clickCounter = 1;
      }
      if (topWall) {
        clickCounter = 2;
      }
      if (rightWall) {
        clickCounter = 3;
      }
      if (bottomWall) {
        clickCounter = 4;
      }
      // assign clickCounter to corners

      if (leftWall && bottomWall) {
        clickCounter = 5;
      }
      if (leftWall && topWall) {
        clickCounter = 6;
      }

      if (rightWall && topWall) {
        clickCounter = 7;
      }
      if (rightWall && bottomWall) {
        clickCounter = 8;
      }

      //

      top = FIELD_HEIGHT * i;
      left = FIELD_WIDTH * j;

      leftFieldId = j === 0 ? null : fieldId - 1;
      rightFieldId = j === NUMBER_OF_COLUMNS - 1 ? null : fieldId + 1;
      topFieldId = i === 0 ? null : fieldId - NUMBER_OF_COLUMNS;
      bottomFieldId =
        i === NUMBER_OF_ROWS - 1 ? null : fieldId + NUMBER_OF_COLUMNS;

      // INITIALIZE WITHOUT ITEMS
      // BALL
      hasDarkRedBall = false;
      hasIceBall = false;
      hasNeonBlueBall = false;
      // DOOR
      hasBlackDoor = false;
      hasGoldDoor = false;
      hasIceDoor = false;
      // ITEMS
      hasGold = false;
      hasSilver = false;
      hasDiamond = false;
      hasEmerald = false;
      hasSapphire = false;
      hasRuby = false;
      // ENEMY
      hasNeonRedEnemy = false;
      hasNeonGreenEnemy = false;
      hasNeonBlueEnemy = false;

      field = {
        top,
        left,
        topWall,
        bottomWall,
        rightWall,
        leftWall,
        fieldId,
        leftFieldId,
        rightFieldId,
        topFieldId,
        bottomFieldId,
        clickCounter,
        // BALL
        hasDarkRedBall,
        hasIceBall,
        hasNeonBlueBall,
        // DOOR
        hasBlackDoor,
        hasGoldDoor,
        hasIceDoor,
        // ITEMS
        hasGold,
        hasSilver,
        hasDiamond,
        hasEmerald,
        hasSapphire,
        hasRuby,
        // ENEMY
        hasNeonRedEnemy,
        hasNeonGreenEnemy,
        hasNeonBlueEnemy,
      };

      fields[fieldId] = field;
      fieldId++;
      topWall = false;
      bottomWall = false;
      rightWall = false;
      leftWall = false;
    }
  }

  return fields;
};
