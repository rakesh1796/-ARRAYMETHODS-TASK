var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var result = JSON.parse(request.response)
console.log(result);

// 1) Get all the countries from Asia continent /region using Filter method

var asia_data = result.filter ((ele) => ele.region === "Asia")
console.log(asia_data);

var asia_countries = asia_data.map((ele) => ele.name.common)
console.log(asia_countries);

// 2) Get all the countries with a population of less than 2 lakhs using Filter method

var popu = result.filter((ele) => ele.population <= 200000)
console.log(popu);

var names = popu.map((ele) => ele.name.common)
console.log(names);

// 3) Print the following details name, capital, flag, using forEach method

result.forEach(element => {
console.log(element.name.common);
console.log(element.capital);
console.log(element.flags.png);

});

// 4) Print the total population of countries using reduce method

var total_popu = result.reduce((acc,cv) => acc+cv.population,0)
console.log(total_popu);

// 5) Print the country that uses US dollars as currency.

var currency = result.filter((ele) => ele?.currencies?.USD)
    console.log(currency)

var us_dollar = currency.map((ele) => ele.name.common)
console.log(us_dollar);

   }