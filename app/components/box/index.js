import React, { PropTypes } from 'react';
import { Col } from 'react-flexbox-grid/lib';
import box from './style.scss';

const Box = props => (
  <Col {...props}>
    <div className={box[props.type || 'box']}>
      {props.children}
    </div>
  </Col>
  );

Box.propTypes = {
  type: PropTypes.oneOf(['row', 'container', 'nested', 'large']).isRequired,
  children: PropTypes.node,
};

export default Box;
