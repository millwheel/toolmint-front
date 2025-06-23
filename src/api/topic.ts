import {TopicResponse, TopicSummaryResponse} from "@/data/type";

export async function getTopicSummaries(): Promise<TopicSummaryResponse[]> {
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

export async function getTopic(code: string): Promise<TopicResponse | null> {
    try {
        const res = await fetch(`http://localhost:8080/topics/${code}`, {
            next: { revalidate: 60 }
        })

        if (!res.ok) {
            console.error(`Failed to fetch topic: ${res.status} ${res.statusText}`)
            return null
        }

        return res.json()
    } catch (error) {
        console.error('Error fetching topic:', error)
        return null
    }
}