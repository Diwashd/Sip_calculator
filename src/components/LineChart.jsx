import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ chartData }) => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
                📊 Investment Growth Over Time
            </h3>
            <div className="w-full h-64 sm:h-96">
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default LineChart;
