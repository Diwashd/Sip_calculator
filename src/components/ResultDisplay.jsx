import React from "react";

const ResultDisplay = ({ futureValue, totalInvested, capitalGains }) => {
    // Format numbers with commas using the Indian numbering system
    const formattedFutureValue = parseFloat(futureValue).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
    });
    const formattedTotalInvested = parseFloat(totalInvested).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
    });
    const formattedCapitalGains = parseFloat(capitalGains).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
    });

    return (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Future Value of Investment</h2>
            <div className="text-lg text-gray-700 space-y-2">
                <h3 className="font-semibold">💰 Total Corpus: <span className="text-blue-600 font-bold">रु.{formattedFutureValue}/-</span></h3>
                <h3 className="font-semibold">📌 Total Invested: <span className="text-green-600 font-bold">रु.{formattedTotalInvested}/-</span></h3>
                <h3 className="font-semibold">📈 Capital Gains: <span className="text-red-600 font-bold">रु.{formattedCapitalGains}/-</span></h3>
            </div>
        </div>
    );
};

export default ResultDisplay;
