
import React from 'react';
import { useRouter } from 'next/router'
import style from '../styles/components/option.module.scss';

const Option = ({activeTab,tabIndex,title, image, url}) => {
  const router = useRouter();
  //used this instead of normal navigation because i did not yet put the state in a session storage
  //Link(nextJs) should also work but can only accept 1 child prop (href) 

  return (
		<a style={{ backgroundImage: `url(${image})` }} onClick={() => router.push(url)}  className={style.option + " " + (activeTab === tabIndex ? style.active : '')}>
			<span className={style.title}>{title}</span>
			<div className={style.overlay}></div>
		</a>
  );
}
export default Option