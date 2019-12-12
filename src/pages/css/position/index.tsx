export const RoutePath = '/css/position';
import React, { Component } from 'react';
import './index.scss';

export class CssPosition extends Component {

  async componentDidMount() {
    document.addEventListener("DOMContentLoaded", (e) => {
      const s = document.getElementsByClassName("text-aaaa");
      console.log("TCL: CssPosition -> stickyItem -> s", s)
      const a = Array.prototype.slice.call(s)
      console.log("TCL: CssPosition -> componentDidMount -> a", a)
      a[0].style.color = 'blue'
    });
  }
  staticItem = () => {
    return (
      <div>
        <h2>static 属性值</h2>
        <div>static是position属性的默认值。如果省略position属性，浏览器就认为该元素是static定位。</div>
        <div>这时，浏览器会按照源码的顺序，决定每个元素的位置，这称为<span className="text-key">"正常的页面流"（normal flow）</span>。每个块级元素占据自己的区块（block），元素与元素之间不产生重叠，这个位置就是元素的默认位置。</div>
        <div>注意，static定位所导致的元素位置，是浏览器自主决定的，所以这时top、bottom、left、right这四个属性无效。</div>
      </div>
    )
  };

  relativeItem = () => {
    return (
      <div>
        <h2>relative 属性值</h2>
        <div>relative表示，相对于默认位置（即static时的位置）进行偏移，即定位基点是元素的默认位置。</div>
        <div>它必须搭配top、bottom、left、right这四个属性一起使用，用来指定偏移的方向和距离。</div>
      </div>
    )
  }

  absoluteItem = () => {
    return (
      <div>
        <h2>absolute 属性值</h2>
        <div>absolute表示，相对于上级元素（一般是父元素）进行偏移，即定位基点是父元素。</div>
        <div>它有一个重要的限制条件：定位基点（一般是父元素）不能是static定位，否则定位基点就会变成整个网页的根元素html。另外，absolute定位也必须搭配top、bottom、left、right这四个属性一起使用。</div>
        <div>注意，absolute定位的元素会被"正常页面流"忽略，即在"正常页面流"中，该元素所占空间为零，周边元素不受影响。</div>
      </div>
    )
  }

  fixedItem = () => {
    return (
      <div>
        <h2>fixed 属性值</h2>
        <div>fixed表示，相对于视口（viewport，浏览器窗口）进行偏移，即定位基点是浏览器窗口。这会导致元素的位置不随页面滚动而变化，好像固定在网页上一样。</div>
        <div>它如果搭配top、bottom、left、right这四个属性一起使用，表示元素的初始位置是基于视口计算的，否则初始位置就是元素的默认位置。</div>
      </div>
    )
  }


  stickyItem = () => {
    return (
      <div>
        <h2>sticky 属性值</h2>
        <div>sticky跟前面四个属性值都不一样，它会产生动态效果，很像relative和fixed的结合：一些时候是relative定位（定位基点是自身默认位置），另一些时候自动变成fixed定位（定位基点是视口）。</div>
        <div>因此，它能够形成"动态固定"的效果。比如，网页的搜索工具栏，初始加载时在自己的默认位置（relative定位）。</div>
        <div>sticky生效的前提是，必须搭配top、bottom、left、right这四个属性一起使用，不能省略，否则等同于relative定位，不产生"动态固定"的效果。原因是这四个属性用来定义"偏移距离"，浏览器把它当作sticky的生效门槛。</div>
        <div>它的具体规则是，当页面滚动，父元素开始脱离视口时（即部分不可见），只要与sticky元素的距离达到生效门槛，relative定位自动切换为fixed定位；等到父元素完全脱离视口时（即完全不可见），fixed定位自动切换回relative定位。</div>
      </div>
    )
  }

  render() {
    return (
      <div className="g-page g-position">
        <h1>CSS 定位详解</h1>
        <ul>
          <li>static</li>
          <li>relative</li>
          <li>fixed</li>
          <li>absolute</li>
          <li>sticky (2017年浏览器才支持)</li>
        </ul>
        <div className="text-aaaa" id="aaaa">aaaa</div>
        {/* {this.staticItem()}
        {this.relativeItem()}
        {this.absoluteItem()}
        {this.fixedItem()} */}
        {this.stickyItem()}


        <h3>sticky 的应用</h3>
        <h4>1.堆叠效果</h4>
        <a href="https://jsbin.com/fegiqoquki/edit?html,css,output">查看demo</a>
        <h4>1.表格的表头锁定</h4>
        <a href="https://jsbin.com/decemanohe/edit?html,css,output">查看demo</a>
      </div>
    )
  }
}

export default CssPosition
