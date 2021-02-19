
import React, { useContext } from 'react';
import style from '../styles/components/overview.module.scss';
import { Car } from '../context/State';
import wheels from '../data/wheels';

const OverviewPanel = ({isOpen, closeMenu}) => {
  const [configuration, setConfiguration] = useContext(Car);
  
  const calculateTotal = () => 
  {
	  let wheelPrice = parseInt(configuration.car.rims.price);
	  let hidePrice = parseInt(configuration.car.hide.price);
	  let totalprice;
	  return totalprice = wheelPrice + hidePrice;
  }
  return (
	<div className={style.panelContainer + ' ' + ( isOpen ? style.open : '')}>
		<div className={style.intro}>
			<h2>Overview</h2>
			<span className={style.closeButton} onClick={closeMenu}>
				Close
			</span>
		</div>
		<div className={style.colorSelection}>
			<h3>chosen color:</h3>
			{configuration.car.color.title}
		</div>
		<div className={style.interiorSelection}>
			<h3>chosen interior:</h3>
			{configuration.car.hide.name}
			<span>Price : € {configuration.car.hide.price}</span>
		</div>
		<div className={style.wheelSelection}>
			<h3>chosen wheels:</h3>
			{configuration.car.rims.name}
			<span>Price : € {configuration.car.rims.price}</span>
		</div>
		<div className={style.total}>
			<span>the extra configuration for your car will cost you:</span>
			<b>€ {calculateTotal()}</b>
		</div>
	</div>
  );
}
export default OverviewPanel