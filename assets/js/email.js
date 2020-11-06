window.onload = function () {
    document.getElementById("button").addEventListener("click",
        function (event) {
            event.preventDefault();
            const data = { "email": document.getElementById('email').value };
            fetch('https://vhomes-coming-soon-backend.herokuapp.com/users', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then(() => {
                    console.log(JSON.stringify(data))
                    alert("Email has been submitted!")
                    window.location.reload()
                })
                .catch((err) => {
                    console.log(err)
                    if (err.response) {
                        alert(err.response.data.errors[0])
                    }
                    else {
                        // alert("Error processing entry. Please try again.")
                    }
                });
        }
    );
}
