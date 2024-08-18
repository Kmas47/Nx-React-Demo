import { memoryGameThemeColor } from '../../utils/utils.theme';

// constants

export const defaultBoxes: IBox = {
  color: memoryGameThemeColor.defaultBox,
  isColored: false,
  isClicked: false,
};

export const coloredBoxes: IBox = {
  color: '#1E90FF',
  isColored: true,
  isClicked: false,
};

// interfaces

export interface IBox {
  color: string;
  isColored: boolean;
  isClicked: boolean;
}
