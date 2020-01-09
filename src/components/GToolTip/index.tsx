import React, { Component } from 'react';
import { IProps } from './index.d';
import './index.scss'

export class GToolTip extends Component<IProps> {

  state = {
    visible: false,
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

  onMouseOver = (evt) => {
    const gDom = document.getElementById('g-tooltip');
    const offset = this.offset(gDom);
    const client = {
      clientWidth: gDom.clientWidth,
      clientHeight: gDom.clientHeight,
    }
    const cDom = document.getElementById('tooltip-context');
    const cOffset = this.offset(cDom);
    const cClient = {
      clientWidth: cDom.clientWidth,
      clientHeight: cDom.clientHeight,
    }
    this.setState({
      visible: true,
      gOffset: { ...offset, ...client },
      contextOffset: { ...cOffset, ...cClient },
    })
  }

  onMouseLeave = () => {
    this.setState({
      visible: false,
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
      }
    })
  }

  typeOfPosition = (type) => {
    const { gOffset, contextOffset } = this.state;
    switch (type) {
      case 'leftTop':
        const leftTop = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight)}px`,
          left: `${contextOffset.left - contextOffset.clientWidth}px`,
        }
        return leftTop;
      case 'top':
        const top = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight)}px`,
        }
        return top;
      case 'rightTop':
        const rightTop = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight)}px`,
          left: `${contextOffset.left + gOffset.clientWidth}px`,
        };
        return rightTop;
      case 'left':
        const left = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight) / 2 }px`,
          left: `${contextOffset.left - contextOffset.clientWidth}px`,
        }
        return left;
      case 'right':
        const right = {
          top: `${contextOffset.top - (gOffset.clientHeight + contextOffset.clientHeight) / 2 }px`,
          left: `${contextOffset.left + gOffset.clientWidth}px`,
        }
        return right;
      case 'leftBottom':
        const leftBottom = {
          left: `${contextOffset.left - contextOffset.clientWidth}px`,
        }
        return leftBottom;
      case 'rightBottom':
        const rightBottom = {
          left: `${contextOffset.left + gOffset.clientWidth}px`,
        }
        return rightBottom;
      default:
        return {}
    }
  }

  render() {
    const { visible } = this.state;
    const { tip, type } = this.props;
    let pos = {};
    if (visible) {
      pos = this.typeOfPosition(type)
    }
    return (
      <div id="g-tooltip" className="g-tooltip" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        {this.props.children}
        <div id="tooltip-context" className={`tooltip-context ${visible ? '' : 'tooltip-hidden'}`} style={pos}>
          {tip}
        </div>
      </div>
    )
  }
}

export default GToolTip
