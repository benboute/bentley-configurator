import React from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import style from  '../styles/components/index.module.scss';

const Colors = props => {
  const { data } = props;
  
  return (
    <div className={style.configurator}>
      <div className={style.container}>
        <Sidebar index={1} />
        <Content index={1} />
      </div>
    </div>
  );
};

export default Colors