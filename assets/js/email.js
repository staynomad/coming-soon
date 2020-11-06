window.onload = function() {
    document.getElementById("button").addEventListener("click",
        function() {
            const data = { "email": document.getElementById('email').value };
            fetch('https://vhomes-coming-soon-backend.herokuapp.com/users', {
              method: 'POST',
              body: JSON.stringify(data),
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
        }
    );
}
