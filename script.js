document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const covidStats = document.getElementById("covid-stats");
    const stateNameElement = document.getElementById("state-name");
    const totalCases = document.getElementById("total-cases");
    const totalRecovered = document.getElementById("total-recovered");
    const totalDeaths = document.getElementById("total-deaths");

    searchBtn.addEventListener("click", () => {
        const queryState = searchInput.value.trim();
        if (queryState) {
            fetchCovidData(queryState);
        } else {
            alert("Please enter a state name.");
        }
    });

    function fetchCovidData(queryState) {
        const url = "https://api.rootnet.in/covid19-in/stats/latest";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const regionalData = data.data.regional;
                const result = regionalData.find(entry => entry.loc.toLowerCase() === queryState.toLowerCase());

                if (result) {
                    stateNameElement.textContent = `State: ${result.loc}`;
                    totalCases.textContent = result.totalConfirmed;
                    totalRecovered.textContent = result.discharged;
                    totalDeaths.textContent = result.deaths;

                    covidStats.classList.remove("hidden");
                } else {
                    alert("State not found. Please check the spelling.");
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                alert("Failed to fetch data. Please try again later.");
            });
    }
});
