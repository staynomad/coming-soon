import React, {useState} from 'react'
import axios from 'axios';

const App = function () {
	const [email, setEmail] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("http://localhost:5000/users/", {
				email: email,
			})
			.then(
				alert("Email has been submitted!")
				
			)
			.catch((err) => {
				if (err.response) {
					alert(err.response.data.errors[0])
				}
				else {
					alert("Error processing entry. Please try again.")
				}
			});
	};
	return (
    <div>
			<form onSubmit={(e) => submitForm(e)}>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter your email address"
				/>
				<input type="submit" />
			</form>
		</div>
	);
};
export default App
