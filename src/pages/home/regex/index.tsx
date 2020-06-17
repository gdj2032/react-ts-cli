export const RoutePath = '/home/regex';
import React, { Component } from 'react'
import './index.scss'

interface IProps {
}

interface IState {
}

class RegexPage extends Component<IProps, IState> {

  state: IState = {}

  componentDidMount() {
    let str = '2020-11-13';
    let arr = str.match(/(\d{4})[-](\d{2})[-](\d{2})/);
    console.log("RegexPage -> componentDidMount -> arr", arr)
    console.log(RegExp.$3)

    //g 全局替换
    //i 忽略大小写
    //gi 全局替换并忽略大小写
  }

  render() {
    return (
      <div className="g-regular">
        <h1>正则表达式</h1>
        <div>~匹配字符串</div>
        <div>~由元字符或者限定字符组成</div>

        <h2>元字符</h2>
        <ul>
          <li> . => 除了\n以外的任意一个字符</li>
          <li>[] => 范围 例:[0-9]: 0-9的任意一个数字 [a-z] [A-Z] [a-zA-Z0-9]</li>
          <li>[] => 另一个函数 把正则表达式中元字符的意义干掉 [.] 就是一个</li>
          <li>|  => 或者 例: [a-z|0-9] 该字符为小写字母或者数字</li>
          <li>() => 分组 提升优先级 </li>
          <li>*  => 前面的表达式出现了0次到多次</li>
          <li>+  => 前面的表达式出现了1次到多次</li>
          <li>?  => 前面的表达式出现了0次或1次 另一个含义: 阻止贪婪模式</li>
        </ul>
        <h2>限定符</h2>
        <ul>
          <li>
            {`{}`} => 更加的明确前面的表达式出现的次数
            <ul>
              <li>{`{0, }`} => 前面的表达式出现了0次到多次</li>
              <li>{`{1, }`} => 前面的表达式出现了1次到多次</li>
              <li>{`{0,1}`} => 前面的表达式出现了0次或1次</li>
              <li>{`{5,10}`} => 前面的表达式出现了5次到10次</li>
            </ul>
          </li>
          <li>^  =>以什么开始,或者是取反 例:
            <ul>
              <li>^[0-9] 以数字开头</li>
              <li>[^a-z] 取反 非小写字母</li>
            </ul>
          </li>
          <li>$ => 以什么结束 例:
            <ul>
              <li> [0-9]$ 必须以数字结束</li>
              <li> [0-9][a-z]$ 必须以小写字母结束 1a </li>
            </ul>
          </li>

          <li>{'\d'} 任意一个数字</li>
          <li>{'\D'} 非数字</li>
          <li>{'\s'} 空白符中的一个</li>
          <li>{'\S'} 非空白符</li>
          <li>{'\w'} 非特殊符号</li>
          <li>{'\W'} 特殊符号</li>
        </ul>
        <div>--------------------------------------------</div>
        <h2>Demo</h2>
        <div>身份证的正则表达式: 15位或18位
          <div>----- {'([1-9][0-9]{14})|([1-9][0-9]{16}[0-9xX])'}</div>
          <div>----- {'([1-9][0-9]{14})([0-9]{2}[0-9xX])?'}</div>
        </div>
        <div>邮箱的正则表达式:
          <div>----- {'[0-9a-za-z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}'}</div>
        </div>
        <div>中文的正则表达式:
          <div>-----{`[\\u4e00-\\u9af5]{2-6}`}</div>
        </div>
        <a href="https://www.baidu.com">跳转吧</a>
      </div>
    )
  }
}

export default RegexPage;
