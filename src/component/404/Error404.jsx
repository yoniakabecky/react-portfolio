import React from 'react';
import ModalNav from '../Layout/ModalNav';

import piggy from '../../resources/piggy.png';

const Error404 = () => {
  return (
    <div>
      <ModalNav isBgGray={false} />
      <div className="container alignItemCenter justifyCenter textAlignCenter">
        <h3>
          Oops!<br />
          Please check the URL.
        </h3>
        <img src={piggy} alt="piggy" rel="preload" />
        <h4 className="red">Page Not Found</h4>
      </div>

    </div>
  );
}

export default Error404;
