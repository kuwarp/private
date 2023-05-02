import React, { useState } from "react";
import Chart from "chart.js/auto";

const Homecalc = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [paymentFrequency, setPaymentFrequency] = useState(12);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
  
    const calculateMonthlyPayment = () => {
      // calculate monthly payment using formula mentioned earlier
      const monthlyInterestRate = interestRate / (12 * 100);
      const totalPayments = loanTerm * paymentFrequency;
      const paymentAmount =
        (loanAmount * monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments) /
        ((1 + monthlyInterestRate) ** totalPayments - 1);
      setMonthlyPayment(paymentAmount.toFixed(2));
  
      // generate chart data
      const chartData = {
        labels: [],
        datasets: [
          {
            label: 'Monthly Payment',
            data: [],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
  
      let balance = loanAmount;
      for (let i = 1; i <= totalPayments; i++) {
        const interestPaid = balance * monthlyInterestRate;
        const principalPaid = paymentAmount - interestPaid;
        balance -= principalPaid;
        chartData.labels.push(`Payment ${i}`);
        chartData.datasets[0].data.push(paymentAmount.toFixed(2));
      }
  
      // render chart
      const chartCanvas = document.getElementById('chart');
      new Chart(chartCanvas, {
        type: 'pie',
        data: chartData,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    };
  return (
    <>
       <div>
      <h2>EMI Calculator</h2>
      <div>
        <label>Loan Amount:</label>
        <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
      </div>
      <div>
        <label>Interest Rate:</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div>
        <label>Loan Term (Years):</label>
        <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
      </div>
      <div>
        <label>Payment Frequency (Months):</label>
        <input type="number" value={paymentFrequency} onChange={(e) => setPaymentFrequency(e.target.value)} />
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
      <div>
        Monthly Payment: {monthlyPayment}
      </div>
      <canvas id="chart" className="w-20"></canvas>
      </div>
    </>
  )
}

export default Homecalc
