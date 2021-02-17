
import React, { useContext, useEffect } from 'react';
import style from '../../styles/components/color.module.scss';
import { Car } from '../../context/State';

const Color = ({color, currentColor}) => {
  const [state, setState] = useContext(Car);

  const updateColor = selectedColor => {
    setState(state => ({...state, color: selectedColor }))
  }

	return (
		<li className={style.colorWrap}>
			<button onClick={() => {updateColor(color)}}
				className={`${style.colorlink} ${color.id === state.color.id ? style.active : ""}`} 	>
				<div className={style.color} style={{backgroundColor: color.code}}></div>
			</button>
		</li>
	)
}
export default Color