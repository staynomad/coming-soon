import React from 'react'
import Countdown from './components/countdown/countdown'
import Email from './components/email/email'
import './main.css'

const App = function () {
	return (
    <div>
		<div className='container1'>
			<h2 className='center'> The Future of Flexible Rentals </h2>
			<h3 className='center'> Register now to be notified when we officially release! </h3>
			<Email />
			<Countdown timeTillDate="12 25 2020, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
		</div>
	</div>
	);
};
export default App
