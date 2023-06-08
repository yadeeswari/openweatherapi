let restapi = "https://restcountries.com/v3.1/all";

async function api() {
  let url = fetch(restapi);
  let out = await (await url).json();
  // console.log(out[0]);
  let parent = document.querySelector(".row");
  for (let i of out) {
    try {
      // console.log(i);
      let datacont = document.createElement("div");
      datacont.classList.add("card");

      //latlng
    let lat = i.latlng[0];
      let lng = i.latlng[1];
      datacont.setAttribute("lat", lat);
      datacont.setAttribute("lng", lng);

      //Name
      let countryname = document.createElement("h3");
      countryname.innerText = i.name.common;
      datacont.append(countryname);

      //Flag
      let countryflag = document.createElement("img");
      countryflag.setAttribute("src", i.flags.png);
      datacont.append(countryflag);

      //Capital
      let countrycapital = document.createElement("p");
      countrycapital.innerText = "Capital : " + i.capital[0];
      datacont.append(countrycapital);
      // console.log(i.capital[0]);

      //Region
      let countryregion = document.createElement("p");
      countryregion.innerText = "Region : " + i.region;
      datacont.append(countryregion);

      //Country codes
      let countrycode = document.createElement("p");
      countrycode.innerText = "Contry Code : " + i.cca3;
      datacont.append(countrycode);

      //Click Button
      let clickbtn = document.createElement("button");
      clickbtn.setAttribute("onclick", "clicking(this)");
      clickbtn.innerHTML = "Click for Weather";
      datacont.append(clickbtn);
      // console.log(click_btn);

      parent.append(datacont);
    } catch (err) {
      // console.log(err);
    }
  }
}
api();

async function clicking(e) {
  var parent = e.parentElement;
  // console.log(e.parentElement);
  let lat = parent.getAttribute("lat");
  let lon = parent.getAttribute("lng");
  let apikey = "02c0a4cb6d534fb8ec504bd1d2f69fe2";
  let weatherapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
  let weatherurl = fetch(weatherapi);
  let out1 = await (await weatherurl).json();
  // console.log(out1);
  let result = document.querySelector("body div.container");
  result.innerHTML = "";
  let dataele = document.createElement("h1");
  dataele.classList.add("cName");
  let dataele1 = document.createElement("p");
  dataele.classList.add("cWeather");
  // console.log(data_ele.innerText);
  dataele.innerText = JSON.stringify(out1.sys.country);
  dataele1.innerText = JSON.stringify(out1.weather);
  result.append(dataele);
  result.append(dataele1);
}