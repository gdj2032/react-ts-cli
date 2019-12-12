export const RoutePath = '/css/animate';
import React, { Component } from 'react';
import './index.scss';

class Animate extends Component {

  state = {

  }

  transformItem = () => {
    return (
      <div>
        <h3>1.变形(transform)</h3>
        <h4>属性：</h4>
        <div>
          <span className="an-word">rotate</span> 旋转（中心为原点）<br />
          <span className="an-word">skew</span> 扭曲、倾斜（skew(x,y), skewX(x), skewY(y)）<br />
          <span className="an-word">scale</span> 缩放（scale(x,y), scaleX(x), scaleY(y)）<br />
          <span className="an-word">translate</span> 移动（translateX,translateY）<br />
          <span className="an-word">matrix</span> 矩阵变形。
        </div>
      </div>
    )
  }

  transitionItem = () => {
    return (
      <div>
        <h3>2.转换(transition)</h3>
        <div className="an-content">css的transition允许css的属性值在一定的时间区间内平滑地过渡。</div>
        <h5>属性：</h5>
        <div>
          <span className="an-word">transition-property</span>是用来指定当元素其中一个属性改变时执行transition效果，其主要有以下几个值：none(没有属性改变)；all（所有属性改变）这个也是其默认值；indent（元素属性名）。当其值为none时，transition马上停止执行，当指定为all时，则元素产生任何属性值变化时都将执行transition效果，ident是可以指定元素的某一个属性值。
        </div>
        <div>
          <span className="an-word">transition-duration</span>是用来指定元素,转换过程的持续时间
        </div>
        <div>
          <span className="an-word">transition-timing-function</span>:
          <img src={require('../../../images/ani_transition_articlex.png')} />
        </div>
        <div>
          <span className="an-word">transition-delay</span>[延迟] ：是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行transition效果
        </div>
      </div>
    )
  }

  animationItem = () => {
    return (
      <div>
        <h3>3.animation（@keyframes规则）</h3>
        <div className="an-content">CSS3中添加的新属性animation是用来为元素实现动画效果的，但是animation无法单独担当起实现动画的效果。承载动画的另一个属性——@keyframes。使用的时候为了兼容可加上-webkit-、-o-、-ms-、-moz-、-khtml-等前缀以适应不同的浏览器。</div>
        <div>
          <ul>
            <li>创建动画的原理是，将一套 CSS 样式逐渐变化为另一套样式。</li>
            <li>通过 @keyframes 规则，您能够创建动画。</li>
            <li>@keyframes定义一个动画，并定义具体的动画效果，比如是放大还是位移等等。</li>
            <li>@keyframes 它定义的动画并不直接执行，需要借助animation来运转。</li>
            <li>
              <div>在动画过程中，您能够多次改变这套 CSS 样式。</div>
              <div className="an-content-gray">百分比是指动画完成一遍的时间长度的的百分比 ，0% 是动画的开始时间，50%是动画完成一半的时间，100% 动画的结束时间。百分比后面的花括号写：在动画执行过程中的某时间点要完成的变化。</div>
            </li>
            <li>以百分比来规定改变发生的时间，或者通过关键词 "from" 和 "to"，等价于 0% 和 100%。</li>
            <li>为了获得最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。</li>
          </ul>
        </div>
        <div>
          <h4>语法</h4>
          <div>{'@keyframes animationname {keyframes-selector {css-styles;}}'}</div>
        </div>
        <div className="an-test">
          <h5>例子1：</h5>
          <div className="an-test1">sdfjsfkf</div>
        </div>
      </div>
    )
  }

  transformUpper = () => {
    return (
      <div className="an-tran-upper">
        <h3>transform 高级</h3>
        <div>
          <ul>
            <li>transform: perspective, transform-style: preserve-3d;</li>
            <li>perspective--自己 视觉效果 只给最外层加一次</li>
            <li>preserve-3d--子元素 子元素可以脱离父级 每个需要子集出来的地方都要加</li>
          </ul>
        </div>
        <div className="margin-left">
          <h4>1. 多个变换一起使用，顺序是'反的'</h4>
          <div>
            <div className="an-box an-tran-many1">transform: scale(2,1) rotate(45deg);</div>
            <div className="an-box an-tran-many2">transform: rotate(45deg) scale(2,1);</div>
          </div>
          <h4>2. 3D变换</h4>
          <div className="an-box an-tran-3d"></div>
        </div>
      </div>
    )
  }

  _3DBoxModal = () => {
    return (
      <div className="an-3d-box-modal">
        <h3>3D盒子</h3>
        <div>
          <div className="an-3d-box-test">
            <div className="box-child">测试文字</div>
          </div>
        </div>
        <div>
          <h5>立方体</h5>
          <div className="an-box">
            <div className="front">前</div>
            <div className="back">后</div>
            <div className="top">上</div>
            <div className="down">下</div>
            <div className="left">左</div>
            <div className="right">右</div>
          </div>
        </div>
      </div>
    )
  }

  turnItem = () => {
    return (
      <div className="an-turn">
        <h3>翻转</h3>
        <div className="turn-box">
          <div className="front">前</div>
          <div className="back">后</div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="g-page g-animate">
        <h1>Animate动画</h1>
        <div className="an-content">变形(transform)、转换(transition)和动画(animation)</div>
        {this.transformItem()}
        {this.transitionItem()}
        {this.animationItem()}
        {this.transformUpper()}
        {this._3DBoxModal()}
        {this.turnItem()}
      </div>
    )
  }
}

export default Animate;
