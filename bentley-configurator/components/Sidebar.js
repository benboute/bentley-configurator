
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Option from '../components/Option';
import OverviewPanel from '../components/OverviewPanel';
import style from '../styles/components/sidebar.module.scss';
import menuItems from '../data/menu';

const Sidebar = ({index}) => {

  const [overviewOpen , setOverviewOpen] = useState(false);
  const closeMenu = () => {
    setOverviewOpen(false);
  };
  return (
  <>
	<div className={style.Sidebar}>
      <div className={style.logoWrapper}>
        <Link href="/"><Image src="/bentley.png" alt="logo" width={232} height={75}></Image></Link>
        <h2><span>Ben</span>tley</h2>
        <h3>Configurator</h3>
      </div>
      <div className={style.optionsWrapper}>
          {menuItems.map((item, i) => (
            <div className={style.OptionsWrapper}>
              <Option key={i} activeTab={index} tabIndex={item.id} title={item.name} image={item.image} url={item.url} /> 
            </div>
          ))}
      </div>
      <div className={style.buttonWrapper}>
        <button onClick={ () => setOverviewOpen(!overviewOpen)} className={style.summary}>Overview</button>
      </div>
    </div>
  
    <OverviewPanel closeMenu={closeMenu} isOpen={overviewOpen}/>
  </>
  );
}
export default Sidebar