let Routes = {
    "Paris": "Skopje",
    "Zurich": "Amsterdam",
    "Prague": "Zurich",
    "Barcelona": "Berlin",
    "Kiev": "Prague",
    "Skopje": "Paris",
    "Amsterdam": "Barcelona",
    "Berlin": ["Kiev", "Amsetrdam"],
}

let cityVisited = {
    "Amsterdam": false,
    "Kiev": false,
    "Zurich": false,
    "Prague": false,
    "Berlin": false,
    "Barcelona": false,
};

let count = 0;
let currentCity = "Kiev";
let ans = ""

while (count < Object.keys(cityVisited).length) {
    cityVisited[currentCity] = true;
    ans += currentCity + "--->";
    count++;
    currentCity = Routes[currentCity];
}

console.log(ans);

