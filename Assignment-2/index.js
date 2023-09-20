let Routes = {
    "Paris": "Skopje",
    "Zurich": "Amsterdam",
    "Prague": "Zurich",
    "Barcelona": "Berlin",
    "Kiev": "Prague",
    "Skopje": "Paris",
    "Amsterdam": "Barcelona",
    "Berlin": "Kiev",
}

let cityVisited = {
    "Amsterdam": false,
    "Kiev": false,
    "Zurich": false,
    "Prague": false,
    "Berlin": false,
    "Barcelona": false,
    "Paris": false,
};

let count = 0;
let currentCity = "Kiev";
let ans = ""

while (count < 7) {
    cityVisited[currentCity] = true;
    ans += currentCity + "--->";
    currentCity = Routes[currentCity];
    count++;
}

console.log(ans);
console.log(cityVisited);