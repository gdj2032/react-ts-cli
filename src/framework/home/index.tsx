import * as React from 'react';
import './index.scss';
import { HomeMenu } from '@/components/HomeMenu';
import { shopService, carouselService } from '@/service';
import { connect } from '@/utils';
import { IListInfo } from '@/service/shop';
import { Row, Col, Carousel } from '@tmind/yuna'
import { TYPE_LIST } from '@/constants';

interface Props {
  history?: any;
  user?: any;
}

@connect
class Home extends React.Component<Props> {

  state = {
    data: null,
    carouselData: []
  }

  componentDidMount() {
    console.log(this.props);
    this.getShopList({ offset: 0, limit: 10 })
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

  onLeftOver = (list, idx) => {
    console.log("TCL: Home -> onLeftOver -> list, idx", list, idx)
  }

  onLeftLeave = (event) => {
    console.log("TCL: Home -> onLeftLeave -> event", event)
  }

  ShopListItem = (item) => {
    return (
      <Col span={4} key={item.id}>
        <div className="shop-list-item">
          <img src={item.url} className="item-img" />
          <div className="item-name">{item.name}</div>
          <div className="item-desc">{item.description}</div>
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
              <div key={idx} className="left-line" onMouseOver={() => this.onLeftOver(list, idx)} onMouseLeave={this.onLeftLeave}>
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

  render() {
    const { data } = this.state;
    return (
      <div className="g-home">
        <HomeMenu {...this.props} />
        <div className="home">
          <div className="h-shop-type">
            <Row>
              <Col span={4}>
                {this.leftTypeShop()}
              </Col>
              <Col span={16}>
                {this.centerCarousel()}
              </Col>
              <Col span={4}>
                <div>right</div>
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
        </div>
      </div>
    )
  }
}

export default Home
