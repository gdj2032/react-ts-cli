import * as React from 'react';
import './index.scss';
import { HomeMenu } from '@/components/HomeMenu';
import { shopService, carouselService } from '@/service';
import { connect } from '@/utils';
import { IListInfo } from '@/service/shop';
import { Row, Col, Carousel } from '@tmind/yuna'
import { TYPE_LIST, HOME_PAGE_SIZE } from '@/constants';
import Paginations from '@/components/Paginations';

interface Props {
  history?: any;
  user?: any;
}

@connect
class Home extends React.Component<Props> {

  state = {
    data: null,
    carouselData: [],
    active: {
      visible: false,
      list: null,
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.getShopList({ offset: 0, limit: HOME_PAGE_SIZE })
    this.getCarouselList();
  }

  getShopList = async (opt: IListInfo) => {
    const [err, data] = await shopService.getShopList(opt);
    if (!err) {
      this.setState({ data: data })
    }
  }

  getCarouselList = async () => {
    const [err, data] = await carouselService.getCarouselList();
    console.log("TCL: Home -> getCarouselList -> data", data)
    if (!err) {
      this.setState({ carouselData: data.data })
    }
  }

  onLeftOver = (list) => {
    this.setState({
      active: {
        visible: true,
        list: list,
      }
    })
  }

  onLeftLeave = () => {
    this.setState({
      active: {
        visible: false,
        list: null,
      }
    })
  }

  ShopListItem = (item) => {
    return (
      <Col span={6} key={item.id}>
        <div className="shop-list-item">
          <img src={item.url} className="item-img" />
          <div className="item-name">
            <p className="i-name">{item.name}</p>
            <p>
              <span className="item-price-discount">{item.discountPrice}</span>
              <span className="item-price-real">{item.realPrice}</span>
            </p>
          </div>
          <div className="item-desc" >{item.description}</div>
          <div className="item-num">
            <div className="i-sale i-num">已售{item.saleNum}</div>
            <div className="i-comment i-num">评论{item.commentNum}</div>
          </div>
        </div>
      </Col>
    )
  }

  leftTypeShop = () => {
    return (
      <div className="shop-type-left">
        {
          TYPE_LIST.map((list, idx) => {
            return (
              <div key={idx} className="left-line" onMouseOver={() => this.onLeftOver(list)} onMouseLeave={this.onLeftLeave}>
                {
                  list.map((item, index) => {
                    const exit = index !== list.length - 1 ? '/' : ''
                    return (
                      <span key={item.name} className="left-line-item">
                        <a className="l-item-name">{item.name}</a>
                        <span>{exit}</span>
                      </span>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }

  centerActive = () => {
    const { active } = this.state;
    console.log("TCL: Home -> centerActive -> active", active)
    return (
      <div className="shop-center-active">
        {
          active.list && active.list.map(i => {
            return (
              <div key={i.name} className="active-list">
                <h2>{i.name}</h2>
              </div>
            )
          })
        }
      </div>
    )
  }

  centerCarousel = () => {
    return (
      <div className="shop-type-center">
        <Carousel autoplay>
          {
            this.state.carouselData.map(item => {
              return (
                <div key={item.id} className="center-carouse">
                  <img src={item.url} />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    )
  }

  rightTypeShop = () => {
    return (
      <div className="shop-type-right">right</div>
    )
  }

  onChangePage = (params) => {
    console.log("TCL: Home -> onChangePage -> params", params)
    this.getShopList({ offset: (params - 1) * HOME_PAGE_SIZE, limit: HOME_PAGE_SIZE })
  }

  render() {
    const { data, active } = this.state;
    return (
      <div className="g-home">
        <HomeMenu {...this.props} />
        <div className="home">
          <div className="h-shop-type">
            <Row>
              <Col span={4}>
                {this.leftTypeShop()}
              </Col>
              {
                active.visible ?
                  <Col span={16}>
                    {this.centerActive()}
                  </Col>
                  :
                  <Col span={16}>
                    {this.centerCarousel()}
                  </Col>
              }
              <Col span={4}>
                {this.rightTypeShop()}
              </Col>
            </Row>
          </div>
          <div className="h-shop-list">
            <Row>
              {
                data && data.data.map(item => this.ShopListItem(item))
              }
            </Row>
          </div>
          <div>
            {
              data &&
              <Paginations
                currentPage={(data.offset % data.limit) + 1}
                totalPage={Math.ceil(data.total / data.limit)}
                onChangePage={this.onChangePage}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home
