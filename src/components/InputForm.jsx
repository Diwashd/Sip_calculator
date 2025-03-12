import React from "react";

const InputForm = ({
    monthlySIP,
    setMonthlySIP,
    lumpSumAmount,
    setLumpSumAmount,
    timePeriod,
    setTimePeriod,
    expectedCAGR,
    setExpectedCAGR,
    annualStepUp,
    setAnnualStepUp,
    inflationRate,
    setInflationRate,
    calculateSIP,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Input Details</h2>
            <div className="space-y-4">
                <InputField label="Monthly SIP Amount (रु)" value={monthlySIP} setValue={setMonthlySIP} />
                <InputField label="Lump Sum Amount (रु)" value={lumpSumAmount} setValue={setLumpSumAmount} />
                <InputField label="Time Period (Years)" value={timePeriod} setValue={setTimePeriod} />
                <InputField label="Expected CAGR (%)" value={expectedCAGR} setValue={setExpectedCAGR} />
                <InputField label="Annual Step-Up Percentage (%)" value={annualStepUp} setValue={setAnnualStepUp} />
                <InputField label="Inflation Rate (%)" value={inflationRate} setValue={setInflationRate} />
            </div>
            <button
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                onClick={calculateSIP}
            >
                Calculate SIP Value
            </button>
        </div>
    );
};

const InputField = ({ label, value, setValue }) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder={label}
            />
        </div>
    );
};

export default InputForm;
