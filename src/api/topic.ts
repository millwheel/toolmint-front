import {TopicSummaryResponse} from "@/data/type";

export async function getTopics(): Promise<TopicSummaryResponse[]> {
    try {
        const res = await fetch('http://localhost:8080/topics', {
            next: { revalidate: 60 },
        })

        if (!res.ok) {
            console.error(`Failed to fetch topics: ${res.status} ${res.statusText}`)
            return []
        }

        return res.json()
    } catch (error) {
        console.error('Error fetching topics:', error)
        return []
    }
}