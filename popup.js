var country = window.prompt("Enter country");
fetch('https://disease.sh/v3/covid-19/countries/' + country)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        document.getElementById('totalDeaths').textContent += data.deaths
        document.getElementById('totalCases').textContent += data.cases
        document.getElementById('todayDeaths').textContent += data.todayDeaths
        document.getElementById('todayCases').textContent += data.todayCases
    })
