import React from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ pieData }) => {
    return (
        <div className="w-full bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                🥧 Investment Breakdown
            </h3>
            <div className="flex justify-center items-center h-96">
                <Pie data={pieData} />
            </div>
        </div>
    );
};

export default PieChart;
