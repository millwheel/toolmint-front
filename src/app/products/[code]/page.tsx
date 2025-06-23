import Link from 'next/link';
import {getProduct} from "@/api/product";

function formatViews(views: number): string {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
}

export default async function ProductDetailPage({
                                                    params
                                                }: {
    params: { code: string }
}) {
    const { code } = await params;
    console.log("code:", code);
    const product = await getProduct(code);

    if (!product) {
        return (
            <section className="bg-teal-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        제품을 찾을 수 없습니다
                    </h1>
                    <Link
                        href="/"
                        className="font-bold text-blue-600 py-3"
                    >
                        홈으로 돌아가기
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-teal-50 py-10">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="text-center">
                        {/* Product Icon */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg opacity-90" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            {product.summary}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href={product.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                웹사이트 방문
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <button className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                좋아요
                            </button>

                        </div>

                        {/* stats */}
                        <div className="text-center items-baseline flex justify-center space-x-1">
                            <div className="text-xl text-gray-900">{formatViews(product.totalViews)}</div>
                            <div className="text-sm text-gray-600">조회수</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">제품 소개</h2>
                        <div className="prose prose-gray max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="max-w-4xl mx-auto px-4 pb-12">
                <div className="text-center">
                    <Link
                        href="/public"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        다른 제품 둘러보기
                    </Link>
                </div>
            </section>
        </div>
    );
}