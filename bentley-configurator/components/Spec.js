
import React from 'react';
import style from '../styles/components/specs.module.scss';

const Spec = ({value, label}) => {
  
  return (
	<div className={style.specsItem}>
		<span className={style.value}>{value}</span>
		<span className={style.label}>{label}</span>
	</div>
  );
}
export default Spec