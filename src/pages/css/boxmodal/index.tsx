export const RoutePath = '/css/boxmodal';
import React, { Component } from 'react';
import './index.scss';

class BoxModal extends Component {

  firstItem = () => {
    return (
      <div>
        <div className="bm-ul-1">
          <div className="ul-content">会影响其他排列</div>
          <ul className="p-uli-1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="bm-ul-2">
          <div className="ul-content">不会影响其他排列</div>
          <ul className="p-uli-2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }

  boxSizing = () => {
    return (
      <div className="bm-box-sizing">
        <ul>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
          <li>ddd</li>
          <li>eee</li>
        </ul>
      </div>
    )
  }
  render() {
    return (
      <div className="g-page box-modal">
        <h1>盒模型</h1>
        <div>物体占据的空间</div>
        <div>css3样式不改变盒模型</div>
        <div>css3样式（尤其是translate）不会引起重排，重绘，性能更高</div>
        {this.firstItem()}
        <div>"box-sizing"</div>
        {this.boxSizing()}
      </div>
    )
  }
}

export default BoxModal
