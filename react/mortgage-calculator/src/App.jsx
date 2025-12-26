import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const formatGBP = (num) =>
    num.toLocaleString("en-GB", { style: "currency", currency: "GBP" });

  function handleCalculate() {
    const P = Number(amount);
    const years = Number(term);
    const annualRate = Number(rate);

    if (!P || !years || annualRate < 0) {
      setMonthlyPayment("");
      setTotalAmount("");
      return;
    }

    const n = years * 12;
    const r = annualRate / 100 / 12;

    let M;
    if (r === 0) {
      M = P / n;
    } else {
      M = P * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
    }
    const total = M * n;

    setMonthlyPayment(formatGBP(Number(M.toFixed(2))));
    setTotalAmount(formatGBP(Number(total.toFixed(2))));
  }

  return (
    <>
      <div className="container">
        <div>
          <h1>Mortgage Calculator</h1>
        </div>
        <div className="layout"></div>
        <div className="inputs">
          <div>
            <label>Loan Amount (£)</label>
            <input
              type="number"
              placeholder="20000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label>Term (Years)</label>
            <input
              type="number"
              placeholder="10"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>

          <div>
            <label>Interest Rate (%)</label>
            <input
              type="number"
              placeholder="3.125"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div>
            <button onClick={handleCalculate}>Calculate</button>
          </div>

          <div className="layout">
            <div className="outputs">
              <div>
                <label>Monthly Payment (£)</label>
                <p>{monthlyPayment || "-"}</p>
              </div>

              <div>
                <label>Total Amount (£)</label>
                <p>{totalAmount || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
