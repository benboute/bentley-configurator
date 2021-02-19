
import React, { useContext } from 'react';
import Image from 'next/image'
import Spec from '../components/Spec';
import ColorPicker from '../components/options/ColorPicker';
import SelectHide from './options/SelectHide';
import SelectWheel from './options/SelectWheels';
import style from '../styles/components/content.module.scss';
import { Car } from '../context/State';

const Content = ({index}) => {
const [configuration, setConfiguration] = useContext(Car);

const switchContent = i => {
	switch (i) {
		case 1:
			return <ColorPicker />
		case 2:
			return <SelectHide />
		case 3:
			return <SelectWheel />
	}
}
  return (
	<div className={style.contentContainer}>
		<div className={style.specsWrapper}>
			<Spec value={'333km/u'} label={'Top speed'} />
			<Spec value={'3,6s'} label={'0-100 km/u'} />
			<Spec value={'275g/km'} label={'Emission'} />
		</div>
		<div className={style.carWrapper}>
			<Image src={`/continental${configuration.car.color.id}.png`} alt="car" width={850} height={480}></Image>
		</div>
		<div className={style.flyout}>
			{switchContent(index)}
		</div>
	</div>
  );
}
export default Content