
import React, { useContext, useEffect } from 'react';
import style from '../../styles/components/wheelSelection.module.scss';
// This can be used as a service where you fetch the data
import Wheels from '../../data/wheels';

import { Car } from '../../context/State';

const selectHide = () => {
  const [configuration, setConfiguration] = useContext(Car);
  const handleChange = selectedWheels => {
    setConfiguration(configuration => (
      {...configuration, car: { ...configuration.car, rims: Wheels.filter(h => h.id == selectedWheels.target.value)[0] }}
    ))
  }
	return (
		<div className={style.wheelsWrapper}>
			<h2>Select your wheels</h2>
			<div>
				{Wheels.map((wheel, index) => (
					<div className={style.radioInput}>
						<input key={index} onChange={handleChange} checked={configuration.car.rims.id == wheel.id}  type="radio" value={wheel.id} name="wheel" />
						{wheel.name}
					</div>
				))}
          </div>
		</div>
	);
}

export default selectHide;