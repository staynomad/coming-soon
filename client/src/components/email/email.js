import React, {useState} from 'react'
import axios from 'axios';
import "./email.css"

const Email = function () {
	const [email, setEmail] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("https://vhomes-coming-soon-backend.herokuapp.com/users", {
				email: email,
			})
			.then(() => {
				alert("Email has been submitted!")
				window.location.reload()
			})
			.catch((err) => {
				console.log(err)
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
		<div className="email-wrapper">
			<form onSubmit={(e) => submitForm(e)}>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter your email address"
				/>
				<input type="submit" />
			</form>
		</div>
	</div>
	);
};
export default Email
