import { ReactNode } from 'react';

declare const TooltipTypes: ['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop', 'right', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight'];

type TooltipType = (typeof TooltipTypes)[number];

interface IProps {
  tip: ReactNode
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
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @default 0.1s
   * 鼠标移入后延时多少才显示 Tooltip，单位：秒
   */
  mouseEnterDelay?: number;
  /**
   * @default 0.1s
   * 鼠标移出后延时多少才隐藏 Tooltip，单位：秒
   */
  mouseLeaveDelay?: number;
}

export {
  IProps,
  TooltipType,
}
