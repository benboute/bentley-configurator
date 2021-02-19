
import React, { useContext, useEffect } from 'react';
import style from '../../styles/components/colorPicker.module.scss';
// This can be used as a service where you fetch the data
import hides from '../../data/hides';

import { Car } from '../../context/State';

const selectHide = () => {
  const [configuration, setConfiguration] = useContext(Car);
  const handleChange = selectedHide => {
	
    setConfiguration(configuration => (
		{...configuration, car: { ...configuration.car, hide: hides.filter(h => h.id == selectedHide.target.value)[0] }}
	))
  }
	return (
		<div className={style.hidesWrapper}>
			<h2>Select the interior color of your car</h2>
			<select value={configuration.car.hide.id} onChange={handleChange}>
				{hides.map((hide, index) => (
					<option key={index} value={hide.id}>{hide.name}</option>
				))}
				
          </select>
		</div>
	);
}

export default selectHide;