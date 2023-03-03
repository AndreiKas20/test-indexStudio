import React from 'react';
import styles from './iconcar.module.css';

export interface IIcon {
  width: string,
  height: string,
  noActive?: boolean
}

export function IconCar({width, height, noActive} : IIcon) {
  return (
      <svg style={{width: width, height: height}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path style={noActive ? {fill: '#00A0AB'} : {}} d="M6.42149 19.4356C7.50378 19.4356 8.38115 18.5583 8.38115 17.476C8.38115 16.3937 7.50378 15.5163 6.42149 15.5163C5.33919 15.5163 4.46182 16.3937 4.46182 17.476C4.46182 18.5583 5.33919 19.4356 6.42149 19.4356Z" fill="#C7C7C7"/>
        <path style={noActive ? {fill: '#00A0AB'} : {}}  d="M19.6681 7.15701C19.3836 6.62474 18.8285 6.29297 18.225 6.29432H15.9336V9.35927C15.9336 9.70064 16.2333 9.97678 16.5748 9.97678H21.1774L19.6681 7.15701Z" fill="#C7C7C7"/>
        <path style={noActive ? {fill: '#00A0AB'} : {}} d="M17.5007 15.5163C16.4183 15.5163 15.5409 16.3937 15.5409 17.4761C15.5409 18.5585 16.4183 19.4359 17.5007 19.4359C18.5831 19.4359 19.4605 18.5585 19.4605 17.4761C19.4605 17.4761 19.4605 17.476 19.4605 17.476C19.4592 16.3942 18.5825 15.5175 17.5007 15.5163Z" fill="#C7C7C7"/>
        <path style={noActive ? {fill: '#00A0AB'} : {}} d="M22.6466 12.064L21.6335 10.7729H16.5748C15.7943 10.7729 15.1374 10.1396 15.1374 9.35918V5.58964C15.1447 5.27131 14.8925 5.00741 14.5742 5.00015C14.5629 4.9999 14.5516 4.99995 14.5403 5.0004H2.63458C2.29315 5.0004 2 5.24822 2 5.58964V16.4847C2 16.8262 2.29315 17.0928 2.63458 17.0928H3.69119C3.89637 15.585 5.285 14.529 6.79282 14.7341C8.01972 14.901 8.98457 15.8659 9.15153 17.0928H14.7706C14.9759 15.5849 16.3646 14.529 17.8725 14.7342C19.0993 14.9012 20.064 15.866 20.231 17.0928H22.3654C22.7068 17.0928 23 16.8262 23 16.4847V13.0707C22.9966 12.7053 22.8724 12.3514 22.6466 12.064Z" fill="#C7C7C7"/>
      </svg>

  );
}
