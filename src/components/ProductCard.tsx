import {TopicProductResponse} from "@/data/type";
import Link from "next/link";

export function SimpleProductCard({ product }: { product: TopicProductResponse }) {
    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-200">
            <Link href={`/products/${product.code}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
            </Link>
            <p className="text-gray-600 text-sm line-clamp-3">
                {product.summary}
            </p>
        </div>
    )
}
