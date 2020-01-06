import React, { Component } from 'react';
import './index.scss'
import { message } from 'antd';

interface Props {
  currentPage: any;
  totalPage: any;
  onChangePage: (num: any) => any;
}
export class Paginations extends Component<Props> {

  input: any;

  state = {
    currentPage: this.props.currentPage, //当前页码
    groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
    startPage: this.props.currentPage - 2 <= 0 ? 1 : this.props.currentPage - 2,  //分组开始页码
    totalPage: this.props.totalPage //总页数
  }

  onChangePage = (currentPage, isInput?: boolean) => {
    if(isInput) {
      if(!currentPage) return;
      currentPage = Number(currentPage)
      if(isNaN(currentPage)) return;
      const isOver = currentPage > this.state.totalPage || currentPage < 0
      if(isOver) {
        message.error('输入的页数超出范围')
        return;
      }
    }
    if(currentPage <= 0) return;
    if(currentPage > this.state.totalPage) return;
    if(currentPage === this.state.currentPage) return;
    const { groupCount } = this.state;
    //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
    if (currentPage >= groupCount) {
      this.setState({
        startPage: currentPage - 2,
        currentPage
      })
    }
    if (currentPage < groupCount) {
      this.setState({
        startPage: 1,
        currentPage
      })
    }
    //第一页时重新设置分组的起始页
    if (currentPage === 1) {
      this.setState({
        startPage: 1,
        currentPage
      })
    }
    this.props.onChangePage(currentPage)
  }

  pageItem = (i) => <span className={this.state.currentPage === i ? 'current-page' : ''} key={i} onClick={() => this.onChangePage(i)}>{i}</span>

  ellipsisItem = () => <p>...&nbsp;</p>

  createPage = () => {
    const { currentPage, groupCount, startPage, totalPage } = this.state;
    let pages = [];
    if (totalPage <= 5) {
      /*总页码小于等于5时，全部显示出来*/
      for (let i = 1; i <= totalPage; i++) {
        pages.push(this.pageItem(i))
      }
    } else {
      //第一页
      pages.push(this.pageItem(1))

      let pageLength = 0;
      if (groupCount + startPage > totalPage) {
        pageLength = totalPage
      } else {
        pageLength = groupCount + startPage;
      }
      //前面省略号(当当前页码比分组的页码大时显示省略号)
      if (currentPage >= groupCount) {
        pages.push(this.ellipsisItem())
      }
      //非第一页和最后一页显示
      for (let i = startPage; i < pageLength; i++) {
        if (i <= totalPage - 1 && i > 1) {
          pages.push(this.pageItem(i))
        }
      }
      //后面省略号
      if (totalPage - startPage >= groupCount + 1) {
        pages.push(this.ellipsisItem())
      }
      //最后一页
      pages.push(this.pageItem(totalPage))
    }
    return pages;
  }

  render() {
    const { currentPage, groupCount, startPage, totalPage } = this.state;
    return (
      <div className="m-table-page">
        <div className={`${currentPage !== 1 ? 'p-page-hover' : ''} p-page-prev`} onClick={() => this.onChangePage(currentPage - 1)}>上一页</div>
        {this.createPage()}
        <div className={`${currentPage !== totalPage ? 'p-page-hover' : ''} p-page-next`} onClick={() => this.onChangePage(currentPage + 1)}>下一页</div>
        <div className="p-page-total">共 {totalPage} 页</div>
        <div>跳到第</div>
        <input ref={input => this.input = input} />
        <div>页</div>
        <span className="p-page-confirm" onClick={() => this.onChangePage(this.input.value, true)}>确定</span>
      </div>
    )
  }
}

export default Paginations
