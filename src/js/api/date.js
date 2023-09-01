function currentDate() {
    const http = new XMLHttpRequest();
    const url = `http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires`;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = function () {
        let data;
        try {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                let current = {
                    date: new Date(data.datetime).toLocaleString(),
                };
                renderDate(current);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

function renderDate(current) {
    document.querySelector("#date").innerHTML = current.date;
}
currentDate();