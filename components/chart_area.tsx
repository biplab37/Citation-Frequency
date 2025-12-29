'use client';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip } from "./ui/chart";
import { DataPoint } from "./search_area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const chartConfig = {
    count: {
        label: "Papers",
        color: "#10B981",
    },
} satisfies ChartConfig;

type ChartAreaProps = {
    data: DataPoint[];
};

export default function ChartArea({ data, keyword }: ChartAreaProps & { keyword: string }) {
    return (
        // <div className="max-w-4xl mx-auto border border-gray-300 h-80 rounded-2xl overflow-hidden shadow-lg shadow-green-600/20">
        <Card className="mt-8 md:flex w-sm md:w-lg lg:w-4xl">
            <CardHeader>
                <CardTitle>Number of papers with the word <span className="text-green-600">{keyword}</span> over the year</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[20vw] min-w-fit">
                    <BarChart accessibilityLayer data={data} className="">
                        <CartesianGrid vertical={true}/>
                        <XAxis dataKey="year" />
                        <YAxis label={{ value: "Number of papers", angle: -90, position: "insideLeft" }} />
                        <ChartTooltip cursor={false} />
                        <Bar dataKey="count" fill="var(--chart-2)" radius={4} />
                    </BarChart>
                </ChartContainer>
                <div className="text-sm text-center text-gray-500">
                    Year
                </div>
            </CardContent>
        </Card>
        // </div>
    )
}