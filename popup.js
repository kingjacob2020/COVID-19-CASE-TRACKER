var country = prompt("Country:");
if (country != 'all') {
    fetch("https://corona.lmao.ninja/v2/countries/" + 'country')
}
else fetch("https://corona.lmao.ninja/v2/all")
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
