import React, { Component } from 'react';
import AfterForm1 from './AfterMoving/AfterForm1';
import AfterForm2 from './AfterMoving/AfterForm2';
import AfterForm3 from './AfterMoving/AfterForm3';

class AfterMovingIn extends Component {
  render() {
    return (
      <div>
        <h1>입주 후 확인 사항</h1>
        <div>
          <AfterForm1 />
          <AfterForm2 />
          <AfterForm3 />
        </div>
      </div>
    );
  }
}

export default AfterMovingIn;
