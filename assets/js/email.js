const spinner = document.getElementById("spinner");

function load() {
    spinner.className = "show"
    document.getElementById("button").style.color = "#00b18200";
}

function stopLoad() {
    spinner.className = ""
    document.getElementById("button").style.color = "white";
}

window.onload = function () {
    document.getElementById("button").addEventListener("click",
        function (event) {
            load()
            if (document.getElementById('email').value == "") {
            //   alert("Please enter an email.")
              stopLoad()
              return 0
            }
            event.preventDefault();
            const data = { "email": document.getElementById('email').value };
            fetch('https://vhomes-coming-soon-backend.herokuapp.com/users', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then(async (res) => {

                let errorMessage = await res.json()
                if (res.ok) {
                  alert("Email has been submitted!")
                  window.location.reload()
                }
                else {
                  alert(errorMessage.errors)
                  window.location.reload()
                }
            })
            // .catch with fetch only catches request (server) errors
            .catch((err) => {
                console.log(err)
                alert(err.response.data.errors)
            });
        }
    );
}
