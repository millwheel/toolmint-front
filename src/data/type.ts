export type TopicSummaryResponse = {
    id: number
    code: string
    name: string
    emoji: string
    productCount: number
}

export type TopicResponse = {
    id: number
    name: string
    code: string
    emoji: string
    products: TopicProductResponse[]
}

export type TopicProductResponse = {
    id: number
    name: string
    code: string
    summary: string
}

export type ProductSummaryResponse = {
    id: number
    code: string
    name: string
    summary: string
    topics: ProductTopicResponse[]
}

export type ProductTopicResponse = {
    id: number
    code: string
    name: string
}

export type ProductResponse = {
    id: number
    code: string
    name: string
    summary: string
    description: string
    websiteUrl: string
    createdAt: string
    updatedAt: string
    totalViews: number
}