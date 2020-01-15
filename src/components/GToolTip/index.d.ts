import { ReactNode } from 'react';

declare const TooltipTypes: ['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop', 'right', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight'];

type TooltipType = (typeof TooltipTypes)[number];

interface IProps {
  tip: ReactNode;
  /**
   * @default bottom
   */
  type?: TooltipType
  /**
   * @default false
   * 默认不显示，true为显示
   */
  defaultVisible?: boolean;
  /**
   * 用于手动控制浮层显隐
   */
  visible?: boolean;
  /**
   * 是否显示尖角 true 显示 false不显示（默认）
   */
  showArrow?: boolean;
  /**
   * 显示隐藏的回调
   */
  onVisibleChange?: (visible: boolean) => void
}

export {
  IProps,
  TooltipType,
}
