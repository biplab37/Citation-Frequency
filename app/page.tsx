import ChartArea from "@/components/chart_area";
import SearchArea from "@/components/search_area";

export default function Home() {
  return (
    <main className="absolute inset-0 h-screen">
          <div className="text-4xl font-bold text-center mt-6">
            Citation Frequency
          </div>
      <div className="flex flex-col relative overflow-hidden h-auto">
        <SearchArea />
      </div>
      <div className="text-center text-sm text-gray-500 mb-4 fixed bottom-0 inset-x-0">
        @2025 Biplab Mahato
      </div>
    </main>
  );
}
