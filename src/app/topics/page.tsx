import Link from 'next/link'
import {getTopicSummaries} from "@/api/topic";


export default async function TopicsPage() {
    const topics = await getTopicSummaries()

    return (
        <>
            {/* Hero Section */}
            <section className="bg-teal-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        카테고리별로 도구 찾기
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 mx-auto">
                        {topics.length} 개의 카테고리에서 도구를 찾아보세요
                    </p>
                </div>
            </section>

            {/* Topics Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">All Topics</h2>
                        <span className="text-sm text-gray-500">
                            {topics.length} topics found
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {topics.map((topic) => (
                            <Link key={topic.id} href={`/topics/${topic.code}`}>
                                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl group-hover:scale-110 transition-transform">
                                            {topic.emoji}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                                                {topic.name}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {topic.productCount.toLocaleString()} products
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}