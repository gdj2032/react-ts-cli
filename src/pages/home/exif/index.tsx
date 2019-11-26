export const RoutePath = '/home/exif';

import React, { Component } from 'react';
import './index.scss';

class Exif extends Component {

  state = {
    source: require('../../../images/exif.jpeg'),
  }

  componentDidMount() {
    this.getExif(this.state.source)
  }

  getExif = (source) => {
    let rotate = 0;
    const imageObj = new Image();
    imageObj.src = source;
    imageObj.onload = function () {
      EXIF.getData(imageObj, function () {
        let Orientation = 1;
        EXIF.getData(imageObj, () => {
          const width = this.width;
          const height = this.height;
          Orientation = EXIF.getTag(this, 'Orientation');
          console.log("TCL: approval -> imageObj.onload -> Orientation", Orientation, width, height)
          if (Orientation && Orientation !== 1) {
            const ims = document.getElementById('exif-img-1');
            switch (Orientation) {
              case 6: //需要顺时针（向左）90度旋转
                console.log('需要顺时针（向左）90度旋转');
                rotate = 90;
                if (ims) {
                  ims.style.transform = `rotate(${rotate}deg)`;
                  ims.style.margin = `${20 * (width / height)}px`;
                }
                break;
              case 8: //需要逆时针（向右）90度旋转
                console.log('需要顺时针（向右）90度旋转');
                rotate = -90;
                if (ims) {
                  ims.style.transform = `rotate(${rotate}deg)`;
                  ims.style.margin = `${20 * (width / height)}px`;
                }
                break;
              case 3: //需要180度旋转
                console.log('需要180度旋转');
                rotate = 180;
                if (ims) {
                  ims.style.transform = `rotate(${rotate}deg)`;
                }
                break;
            }
          }
        })
        document.getElementById('img-opacity').style.opacity = '1';
      })
    }
  }

  render() {
    const { source } = this.state;
    return (
      <div className="g-page">
        <h1>EXIF---Web端图片方向不正确问题（旋转了90度）</h1>
        <div><h2>问题：</h2>移动端h5页面，input上传图片，有时候，在pc端查看时翻转90度。</div>
        <div>
          原状：
          <img src={source} className="exif-img-0" width="200" />
        </div>
        <div className="img-opacity" id="img-opacity">
          EXIF后：
          <img src={source} className="exif-img-1" id="exif-img-1" width="200" />
        </div>
      </div>
    )
  }
}

export default Exif;
