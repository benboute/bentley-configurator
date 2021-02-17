
import React, { useContext } from 'react';
import Image from 'next/image'
import Spec from '../components/Spec';
import ColorPicker from '../components/options/ColorPicker';
import style from '../styles/components/content.module.scss';
import { Car } from '../context/State';

const Content = () => {
const [state, setState] = useContext(Car);
  return (
	<div className={style.contentContainer}>
		<div className={style.specsWrapper}>
			<Spec value={'333km/u'} label={'Top speed'} />
			<Spec value={'3,6s'} label={'0-100 km/u'} />
			<Spec value={'275g/km'} label={'Emission'} />
		</div>
		<div className={style.carWrapper}>
			<Image src={`/continental${state.color.id}.png`} alt="car" width={850} height={480}></Image>
		</div>
		<div className={style.flyout}>
			<ColorPicker />
		</div>
	</div>
  );
}
export default Content