setInterval(function () {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    `HH:mm:ss`
  )} <small>${londonTime.format("A")}</small>`;

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    `HH:mm:ss`
  )} <small>${losAngelesTime.format("A")}</small>`;

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do, YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    `HH:mm:ss`
  )} <small>${berlinTime.format("A")}</small>`;

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    `HH:mm:ss`
  )} <small>${tokyoTime.format("A")}</small>`;
}, 1000);

//select
function updateCity(event) {
  let timezone = event.target.value;
  let name = timezone.replace("_", " ").split("/")[1];
  let time = moment().tz(timezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${name}</h2>
            <div class="date">${time.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${time.format("HH:mm:ss")}<small>${time.format(
    "A"
  )}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
