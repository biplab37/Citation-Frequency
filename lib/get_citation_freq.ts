export interface CitationFreq {
    key: string;
    key_display_name: string;
    count: number;
}

export interface CitationFreqMeta {
    count: number;
    db_response_time_ms: number;
    page: number;
    per_page: number;
    groups_count: number;
}

export interface CitationFreqResponse {
    meta: CitationFreqMeta;
    group_by: CitationFreq[];
}

export async function getCitationFreq(term: string): Promise<CitationFreqResponse> {
    const url = `https://api.openalex.org/works?filter=default.search:${encodeURIComponent(term)},publication_year:1950-2025&group_by=publication_year`


        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
}