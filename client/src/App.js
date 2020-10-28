import React from 'react'
import Countdown from './components/countdown/countdown'
import Email from './components/email/email'

const App = function () {
	return (
    <div>
		<Countdown timeTillDate="12 25 2020, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
		<br />
		<Email />
	</div>
	);
};
export default App
