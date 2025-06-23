import Link from 'next/link'
import {SimpleProductCard} from "@/components/ProductCard";
import {getTopic} from "@/api/topic";

export default async function TopicDetailPage({params}: {
    params: { code: string }
}) {
    const { code } = await params
    const topic = await getTopic(code)
    
    // NOTE topic이 존재하지 않을 때
    if (!topic) {
        return (
            <section className="bg-teal-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        토픽이 존재하지 않습니다.
                    </h1>
                    <Link
                        href="/topics"
                        className="font-bold text-blue-600 py-3"
                    >
                        다른 토픽 찾기
                    </Link>
                </div>
            </section>
        )
    }

    // NOTE topic이 존재할 때
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-teal-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-baseline space-x-4 mb-4">
                        <div className="text-4xl">{topic.emoji}</div>
                        <h1 className="text-4xl font-bold text-gray-900">{topic.name}</h1>
                    </div>
                    <p className="text-xl text-gray-600 mb-8 mx-auto">
                        {topic.name} 토픽에 해당하는 {topic.products.length} 개의 제품을 찾았습니다.
                    </p>
                </div>
            </section>

            {/* Products Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                {topic.products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topic.products.map((product) => (
                            <SimpleProductCard
                                key={product.code}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyState />
                )}
            </section>
        </div>
    )
}

function EmptyState() {
    return (
        <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
                <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-6V8h6v5z"
                    />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">제품 없음</h3>
            <p className="text-gray-500 mb-6">
                현재 토픽 내 제품이 없습니다. 잠시만 기다려주세요.
            </p>
        </div>
    );
}