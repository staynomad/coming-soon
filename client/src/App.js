import React, {useState} from 'react'
import axios from 'axios';

const App = function () {
	const [email, setEmail] = useState("");

	function submitForm() {
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("http://localhost:5000/users/", {
				email: email,
			})
			.catch((data) => {
				console.log(data)
				if (data.errors) {
          alert(data.errors[0]);
        } else {
					alert(data.message[0])
        }
			});
	}
	return (
    <div>
			<form onSubmit={submitForm}>
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
