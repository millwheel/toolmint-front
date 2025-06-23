import { getProducts } from "@/api/product";
import {SimpleProductCard} from "@/components/ProductCard";

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <>
            {/* Hero Section */}
            <section className="bg-teal-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">최고의 SaaS 도구들을 발견하세요</h1>
                    <p className="text-xl text-gray-600 mb-4">
                        매일 새로운 제품이 등록되고 있어요. 지금 탐험해보세요!
                    </p>
                </div>
            </section>

            {/* Product Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
                {/* 1. 신규 제품 */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">신규 제품</h2>
                        <span className="text-sm text-gray-500">
                            {products?.length ?? 0}개 제품
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products?.slice(0, 6).map((product) => (
                            <SimpleProductCard key={product.code} product={product} />
                        ))}
                    </div>
                </section>

                {/* 2. 인기 있는 제품 */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">인기 있는 제품</h2>
                        <span className="text-sm text-gray-500">최근 7일 기준</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/*{popularProducts?.map((product) => (*/}
                        {/*    <SimpleProductCard key={product.slug} product={product} />*/}
                        {/*))}*/}
                    </div>
                </section>

                {/* 3. 에디터 추천 제품 */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Editor’s Pick</h2>
                        <span className="text-sm text-gray-500">에디터가 선정한 추천 제품</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/*{editorPickProducts?.map((product) => (*/}
                        {/*    <SimpleProductCard key={product.slug} product={product} />*/}
                        {/*))}*/}
                    </div>
                </section>
            </div>
        </>
    );
}