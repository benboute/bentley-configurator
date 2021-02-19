import React from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import style from  '../styles/components/index.module.scss';

const Interior = props => {
  const { data } = props;
  
  return (
    <div className={style.configurator}>
      <div className={style.container}>
        <Sidebar index={2} />
		<Content index={2} />
      </div>
    </div>
  );
};

export default Interior