
import React, { useContext, useEffect } from 'react';
import Color from './Color';
import style from '../../styles/components/colorPicker.module.scss';
// This can be used as a service where you fetch the data
import colors from '../../data/colors';

import { Car } from '../../context/State';

const ColorPicker = () => {
  const [state, setState] = useContext(Car);
	return (
			<div className={style.colorsWrapper}>
        <h2>Pick your color</h2>
				<ul className={style.colorpicker}>
					{colors.map((color, index) => (
						<Color
							key={index}
              color={color}
              currentColor={state.color} />
					))}
				</ul>
			</div>
		);
}

export default ColorPicker;