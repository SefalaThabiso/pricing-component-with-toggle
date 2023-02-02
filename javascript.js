const checkBox = document.querySelector("[data-checkbox]");
let annualPrices = document.getElementsByClassName("annually");
let monthlyPrices = document.getElementsByClassName("monthly");
const pricesSwitch = document.getElementById("switch");
let prices = document.getElementsByClassName("price");

function togglePrices() {
  if (checkBox.checked) {
    annualPrices = [...annualPrices];
    annualPrices.forEach((element) => {
      element.classList.remove("visible");
    });

    monthlyPrices = [...monthlyPrices];
    monthlyPrices.forEach((element) => {
      element.classList.add("visible");
    });
  } else {
    monthlyPrices = [...monthlyPrices];
    monthlyPrices.forEach((element) => {
      element.classList.remove("visible");
    });

    annualPrices = [...annualPrices];
    annualPrices.forEach((element) => {
      element.classList.add("visible");
    });
  }
}

pricesSwitch.addEventListener("click", () => {
  togglePrices();
  console.log("Switch pressed");
});

togglePrices();
