'use client';

import { getCitationFreq } from "@/lib/get_citation_freq";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {useState} from "react";
import ChartArea from "./chart_area";

export interface DataPoint {
    year: number;
    count: number;
};

export default function SearchArea() {
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState<DataPoint[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        if (!keyword.trim()) {
            setError("Please enter a valid keyword.");
            setData([]);
            return;
        }
        setLoading(true);
        setError(null);

        try {
            const response = await getCitationFreq(keyword);
            console.log("API Response:", response);
            const formattedData = response.group_by.map(item => ({
                year: parseInt(item.key_display_name, 10),
                count: item.count,
            })).sort((a, b) => a.year - b.year);
            console.log("Formatted Data:", formattedData);
            setData(formattedData);
        } catch (error) {
            setError("Failed to fetch data. Please try again.");
            console.error(error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-16 w-4xl mx-auto mt-20 flex flex-col items-center">
        <div className="w-xl flex items-center justify-center gap-6">
            <Input placeholder="Type a word or phrase..." className="p-4 text-lg" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key==='Enter' && handleSearch()}
            />
            <Button className="" type="submit" onClick={handleSearch} disabled={loading}>
                Search
            </Button>
        </div>
        {error && <p className=" text-red-600 text-center text-sm">{error}</p>}
        <div>
            {!loading && data.length>0 && <ChartArea data={data} />}
        </div>
        </div>
    )
}