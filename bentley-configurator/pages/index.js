import React from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import style from  '../styles/components/index.module.scss';

const Index = props => {
  const { data } = props;
  
  return (
    <div className={style.configurator}>
      <div className={style.container}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Index