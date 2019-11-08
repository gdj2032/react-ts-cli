import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const SvgIcon = props => {
  const { name, color, size } = props;

  return (
    <i aria-hidden="true" className="anticon">
      <svg className="svg-class" style={{ width: `${size}px`, height: `${size}px` }}>
        <use xlinkHref={"#icon-" + name} fill={color} />
      </svg>
    </i>
  );
};

SvgIcon.propTypes = {
  // svg名字
  name: PropTypes.string.isRequired,
  // 填充颜色
  color: PropTypes.string,
  size: PropTypes.number,
};

SvgIcon.defaultProps = {
  color: "currentColor"
};

export default SvgIcon;
