const tasaMex = 266.89;
const tasaUSD = 4909;

let button = document.getElementById("convertir");
button.onclick = () => {
  let money = document.getElementById("cantidad").value;
  console.log(money);
};

if (document.getElementById("moneda").value === "USD") {
  usdToCop(money);
}
// else if (document.getElementById("moneda").value("USD")) {
//   mxnToCop(money);
// }

function usdToCop(usd) {
  return money * tasaUSD;
}

function mxnToCop(mxn) {
  return mxn / 3000;
}

// module.exports = {
//   usdToCop,
//   mxntoUsd,
// };

// // Path: semana1\Lab4\index.js

// const { usdToCop, mxntoUsd } = require("./cambioDIvisa");

// console.log(usdToCop(1));
// console.log(mxntoUsd(3000));
