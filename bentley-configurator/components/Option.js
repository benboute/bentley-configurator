
import React from 'react';
import Image from 'next/image'
import style from '../styles/components/option.module.scss';

const Option = ({title, image}) => {
  
  return (
	<div className={style.OptionsWrapper}>
		<a style={{ backgroundImage: `url(${image})` }} className={style.Option}>
			<span className={style.title}>{title}</span>
			<div className={style.overlay}></div>
		</a>
	</div>
  );
}
export default Option