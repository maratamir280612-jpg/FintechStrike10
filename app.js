// JavaScript source code
const accounts = [
  {
    name: "USD Operations",
    balance: 1250000,
    currency: "USD"
  },
  {
    name: "EUR Settlement",
    balance: 420000,
    currency: "EUR"
  },
  {
    name: "KZT Reserve",
    balance: 890000000,
    currency: "KZT"
  },
  {
    name: "Crypto Liquidity",
    balance: 210000,
    currency: "USDT"
  }
];

const recommendations = [
  "Move 250k USD to EUR Settlement",
  "Increase USDT reserve buffer",
  "Delay outgoing SWIFT transfer",
  "Convert excess KZT into USD"
];

const alerts = [
  "Projected EUR liquidity shortage in 4 days",
  "SWIFT settlement delayed due to holiday",
  "High outgoing cashflow expected tomorrow"
];

const cards = document.getElementById("cards");

accounts.forEach(acc => {

  cards.innerHTML += `
    <div class="card">
      <h3>${acc.name}</h3>

      <div class="balance">
        ${acc.balance.toLocaleString()} ${acc.currency}
      </div>
    </div>
  `;
});

const alertsBox = document.getElementById("alerts");

alerts.forEach(alert => {
  alertsBox.innerHTML += `
    <div class="alert">
      ${alert}
    </div>
  `;
});

const recsBox = document.getElementById("recs");

recommendations.forEach(rec => {
  recsBox.innerHTML += `
    <div class="rec">
      ${rec}
    </div>
  `;
});

const labels = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun"
];

function runForecast() {

  const score = Math.floor(Math.random() * 30) + 70;

  document.getElementById("score").innerText =
    score + "/100";

  alertsBox.innerHTML += `
    <div class="alert">
      AI detected elevated liquidity stress in EUR corridor
    </div>
  `;
}
function simulateDelay() {

  alertsBox.innerHTML += `
    <div class="alert">
      SWIFT transfer delayed by 2 banking days
      due to regional holiday.
    </div>
  `;
}

function makeTransfer() {

  const amount =
    document.getElementById("amount").value;

  alert(
    "Transfer executed: $" +
    amount +
    " successfully reallocated."
  );
}

setInterval(() => {

  const random =
    Math.floor(Math.random() * 50000);

  balances.push(700000 + random);

  balances.shift();

  chart.update();

}, 3000);

const balances = [
  900000,
  850000,
  780000,
  720000,
  690000,
  810000,
  950000
];

const chart = new Chart(document.getElementById("chart"), {
  type: "line",

  data: {
    labels: labels,

    datasets: [{
      label: "Projected Liquidity",
      data: balances,
      tension: 0.4
    }]
  }
});