import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

const SIPCalculator = () => {
    const [monthlySIP, setMonthlySIP] = useState(0);
    const [lumpSumAmount, setLumpSumAmount] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [expectedCAGR, setExpectedCAGR] = useState(0);
    const [annualStepUp, setAnnualStepUp] = useState(0);
    const [inflationRate, setInflationRate] = useState(0);
    const [futureValue, setFutureValue] = useState(0);
    const [totalInvested, setTotalInvested] = useState(0);
    const [capitalGains, setCapitalGains] = useState(0);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [pieData, setPieData] = useState({ labels: [], datasets: [] });
    const [showResults, setShowResults] = useState(false);

    const calculateSIP = () => {
        const months = timePeriod * 12;
        const monthlyRate = expectedCAGR / 12 / 100;
        let futureValue = 0;
        let sipAmount = monthlySIP;
        let totalInvested = 0;
        const dataPoints = [];
        const labels = [];

        for (let i = 1; i <= months; i++) {
            if (i % 12 === 0 && annualStepUp > 0) {
                sipAmount *= 1 + annualStepUp / 100; // Apply annual step-up
            }
            futureValue = (futureValue + sipAmount) * (1 + monthlyRate);
            totalInvested += sipAmount;

            if (i % 12 === 0) {
                dataPoints.push(futureValue.toFixed(2));
                labels.push(`Year ${i / 12}`);
            }
        }

        // Add lump sum amount
        futureValue += lumpSumAmount * Math.pow(1 + expectedCAGR / 100, timePeriod);

        // Calculate capital gains
        const capitalGains = futureValue - totalInvested - lumpSumAmount;

        // Set state values
        setFutureValue(futureValue.toFixed(2));
        setTotalInvested(totalInvested.toFixed(2));
        setCapitalGains(capitalGains.toFixed(2));

        // Line chart data
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "Investment Growth",
                    data: dataPoints,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    fill: true,
                },
            ],
        });

        // Pie chart data
        setPieData({
            labels: ["Total Invested", "Future Value"],
            datasets: [
                {
                    data: [totalInvested, futureValue],
                    backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
                    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                    borderWidth: 1,
                },
            ],
        });

        // Show the results after calculation
        setShowResults(true);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-8 font-sans">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">SIP Calculator with Charts</h1>
            <InputForm
                monthlySIP={monthlySIP}
                setMonthlySIP={setMonthlySIP}
                lumpSumAmount={lumpSumAmount}
                setLumpSumAmount={setLumpSumAmount}
                timePeriod={timePeriod}
                setTimePeriod={setTimePeriod}
                expectedCAGR={expectedCAGR}
                setExpectedCAGR={setExpectedCAGR}
                annualStepUp={annualStepUp}
                setAnnualStepUp={setAnnualStepUp}
                inflationRate={inflationRate}
                setInflationRate={setInflationRate}
                calculateSIP={calculateSIP}
            />
            {showResults && (
                <>
                    <ResultDisplay
                        futureValue={futureValue}
                        totalInvested={totalInvested}
                        capitalGains={capitalGains}
                    />
                    <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6 sm:gap-10">
                        <div className="w-full sm:w-5/8">
                            <LineChart chartData={chartData} />
                        </div>
                        <div className="w-full sm:w-3/8">
                            <PieChart pieData={pieData} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SIPCalculator;
