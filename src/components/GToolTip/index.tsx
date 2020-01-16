import React, { Component } from 'react';
import { IProps } from './index.d';
import './index.scss'
import { isFunction } from 'util';

export class GToolTip extends Component<IProps> {

  tipRefs: any;

  state = {
    visible: false,
    target: false,
    gOffset: {
      left: 0,
      top: 0,
      clientWidth: 0,
      clientHeight: 0,
    },
    contextOffset: {
      left: 0,
      top: 0,
      clientWidth: 0,
      clientHeight: 0,
    },
    pos: {},
    arrowClass: '',
  }

  componentDidMount() {
    if (!this.state.target) {
      this.getPosition(this.tipRefs);
    }
  }

  offset(ele) {
    var top = ele.offsetTop;
    var left = ele.offsetLeft;
    while (ele.offsetParent) {
      ele = ele.offsetParent;
      if (window.navigator.userAgent.indexOf('MSTE 8') > -1) {
        top += ele.offsetTop;
        left += ele.offsetLeft;
      } else {
        top += ele.offsetTop + ele.clientTop;
        left += ele.offsetLeft + ele.clientLeft;
      }
    }
    return {
      left: left,
      top: top,
    }
  }

  getPosition = (evt) => {
    const gDom = evt;
    const offset = this.offset(gDom);
    const client = {
      clientWidth: gDom.offsetWidth,
      clientHeight: gDom.offsetHeight,
    }
    const cDom = evt.children[1];
    const cOffset = this.offset(cDom);
    const cClient = {
      clientWidth: cDom.offsetWidth,
      clientHeight: cDom.offsetHeight,
    }
    this.setState({
      gOffset: { ...offset, ...client },
      contextOffset: { ...cOffset, ...cClient },
      target: true,
    }, () => {
      const { type } = this.props;
      let pos = this.typeOfPosition(type);
      let arrowClass = this.typeOfArrow(type);
      this.setState({ pos, arrowClass })
    })
  }

  onSetVisible = async (visible: boolean, evt?: any) => {
    const { mouseEnterDelay, mouseLeaveDelay } = this.props;
    const timer = visible ? mouseEnterDelay * 1000 | 100 : mouseLeaveDelay * 1000 | 100;
    setTimeout(() => {
      this.setState({ visible });
      this.props.onVisibleChange && this.props.onVisibleChange(visible)
    }, timer)
  }

  typeOfPosition = (type) => {
    const { gOffset, contextOffset } = this.state;
    switch (type) {
      case 'topLeft':
        const topLeft = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight)}px`,
          left: `${contextOffset.left}px`,
        }
        return topLeft;
      case 'top':
        const top = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight)}px`,
          left: `${contextOffset.left - Math.abs(gOffset.clientWidth - contextOffset.clientWidth) / 2}px`,
        }
        return top;
      case 'topRight':
        const topRight = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight)}px`,
          left: `${contextOffset.left - contextOffset.clientWidth + gOffset.clientWidth}px`,
        };
        return topRight;
      case 'leftTop':
        const leftTop = {
          top: `${contextOffset.top - gOffset.clientHeight}px`,
          left: `${contextOffset.left - contextOffset.clientWidth}px`,
        }
        return leftTop;
      case 'left':
        const left = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight) / 2}px`,
          left: `${contextOffset.left - contextOffset.clientWidth}px`,
        }
        return left;
      case 'leftBottom':
        const leftBottom = {
          top: `${contextOffset.top - contextOffset.clientHeight}px`,
          left: `${contextOffset.left - contextOffset.clientWidth}px`,
        }
        return leftBottom;
      case 'rightTop':
        const rightTop = {
          top: `${contextOffset.top - gOffset.clientHeight}px`,
          left: `${contextOffset.left + gOffset.clientWidth}px`,
        }
        return rightTop;
      case 'right':
        const right = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight) / 2}px`,
          left: `${contextOffset.left + gOffset.clientWidth}px`,
        }
        return right;
      case 'rightBottom':
        const rightBottom = {
          top: `${contextOffset.top - contextOffset.clientHeight}px`,
          left: `${contextOffset.left + gOffset.clientWidth}px`,
        }
        return rightBottom;
      case 'bottomLeft':
        const bottomLeft = {
          left: `${contextOffset.left - contextOffset.clientWidth + gOffset.clientWidth}px`,
        }
        return bottomLeft;
      case 'bottomRight':
        const bottomRight = {
          left: `${contextOffset.left}px`,
        }
        return bottomRight;
      default: // bottom
        return {
          left: `${contextOffset.left - Math.abs(gOffset.clientWidth - contextOffset.clientWidth) / 2}px`,
        }
    }
  }

  typeOfArrow = (type) => {
    switch (type) {
      case 'topLeft':
        const topLeft = 'tooltip-bottom tooltip-bottom-left';
        return topLeft;
      case 'top':
        const top = 'tooltip-bottom';
        return top;
      case 'topRight':
        const topRight = 'tooltip-bottom tooltip-bottom-right';
        return topRight;
      case 'leftTop':
        const leftTop = 'tooltip-right tooltip-right-top'
        return leftTop;
      case 'left':
        const left = 'tooltip-right'
        return left;
      case 'leftBottom':
        const leftBottom = 'tooltip-right tooltip-right-bottom'
        return leftBottom;
      case 'rightTop':
        const rightTop = 'tooltip-left tooltip-left-top'
        return rightTop;
      case 'right':
        const right = 'tooltip-left'
        return right;
      case 'rightBottom':
        const rightBottom = 'tooltip-left tooltip-left-bottom'
        return rightBottom;
      case 'bottomLeft':
        const bottomLeft = 'tooltip-top tooltip-top-left';
        return bottomLeft;
      case 'bottom':
        const bottom = 'tooltip-top';
        return bottom;
      case 'bottomRight':
        const bottomRight = 'tooltip-top tooltip-top-right';
        return bottomRight;
      default:
        return ''
    }
  }

  render() {
    const { visible, pos, arrowClass } = this.state;
    const { tip, defaultVisible, showArrow } = this.props;
    const propsVisible = this.props.visible;
    const show = propsVisible || visible || defaultVisible;
    return (
      <div id="g-tooltip" className="g-tooltip" onMouseEnter={(evt) => this.onSetVisible(true, evt)} onMouseLeave={() => this.onSetVisible(false)} ref={c => this.tipRefs = c}>
        <div className="tooltip-children">
          {this.props.children}
        </div>
        <div id="tooltip-context" className={`tooltip-context ${show ? '' : 'tooltip-hidden'}`} style={pos}>
          <div className={`${showArrow ? arrowClass : ''}`}>
            { isFunction(tip) ? tip() :tip }
          </div>
        </div>
      </div>
    )
  }
}

export default GToolTip
