import { ReactNode } from 'react';

declare const TooltipTypes: ['leftTop', 'top', 'rightTop', 'left', 'right', 'leftBottom', 'bottom', 'rightBottom'];

type TooltipType = (typeof TooltipTypes)[number];

interface IProps {
  tip: ReactNode;
  /**
   * @default bottom
   */
  type?: TooltipType
}

export {
  IProps,
  TooltipType,
}
