import React from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import style from  '../styles/components/index.module.scss';

const Wheels = props => {
  const { data } = props;
  
  return (
    <div className={style.configurator}>
      <div className={style.container}>
        <Sidebar index={3} />
        <Content index={3} />
      </div>
    </div>
  );
};

export default Wheels