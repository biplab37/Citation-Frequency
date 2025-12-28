'use client';

import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip } from "./ui/chart";
import { DataPoint } from "./search_area";

const chartConfig = {
    count: {
        label: "Papers",
        color: "#10B981",
    },
} satisfies ChartConfig;

type ChartAreaProps = {
    data: DataPoint[];
};

export default function ChartArea({ data }: ChartAreaProps) {
    return (
        // <div className="max-w-4xl mx-auto border border-gray-300 h-80 rounded-2xl overflow-hidden shadow-lg shadow-green-600/20">
        <ChartContainer config={chartConfig} className="min-h-100 mt-10 p-2">
            <BarChart accessibilityLayer data={data} className="">
                <CartesianGrid />
                <XAxis dataKey="year" />
                <ChartTooltip cursor ={false}/>
                <Bar dataKey="count" fill="#10B981" radius={4} />
            </BarChart>
        </ChartContainer>
        // </div>
    )
}