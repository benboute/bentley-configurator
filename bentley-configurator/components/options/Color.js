
import React, { useContext, useEffect } from 'react';
import style from '../../styles/components/color.module.scss';
import { Car } from '../../context/State';

const Color = ({color}) => {
  const [configuration, setConfiguration] = useContext(Car);

  const updateColor = selectedColor => {
    setConfiguration(configuration => (
		{...configuration,
			 car: { ...configuration.car, color: selectedColor }}))
  }

	return (
		<li className={style.colorWrap}>
			<button onClick={() => {updateColor(color)}}
				className={`${style.colorlink} ${color.id === configuration.car.color.id ? style.active : ""}`} 	>
				<div className={style.color} style={{backgroundColor: color.code}}></div>
			</button>
		</li>
	)
}
export default Color