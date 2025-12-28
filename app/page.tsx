import ChartArea from "@/components/chart_area";
import SearchArea from "@/components/search_area";

export default function Home() {
  return (
        <main className="">
      <div className=" relative overflow-hidden h-auto lg:max-h-[60vh]">
        <SearchArea />
        <ChartArea />
      </div>
    </main>
  );
}
