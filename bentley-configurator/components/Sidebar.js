
import React from 'react';
import Image from 'next/image'
import Option from '../components/Option';
import style from '../styles/components/sidebar.module.scss';

const Sidebar = () => {
  
  return (
	<div className={style.Sidebar}>
		<div className={style.logoWrapper}>
			<Image src="/bentley.png" alt="logo" width={232} height={75}></Image>
			<h2><span>Ben</span>tley</h2>
			<h3>Configurator</h3>
		</div>
		<div className={style.optionsWrapper}>
			<Option title={'Colors'} image={'/color.jpg'} />
			<Option title={'Engine'} image={'/engine.jpg'} />
			<Option title={'Rims'} image={'/rims.jpg'} />
		</div>
		<div className={style.buttonWrapper}>
			<a className={style.summary}>Overview</a>
		</div>
	</div>
  );
}
export default Sidebar