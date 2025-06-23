import {ProductResponse, ProductSummaryResponse} from "@/data/type";

export async function getProducts() : Promise<ProductSummaryResponse[]> {
    try {
        const res = await fetch(`http://localhost:8080/products`, {
            next: {revalidate: 60}
        })

        if (!res.ok) {
            console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
            return []
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return []
    }
}

export async function getProduct(code: string): Promise<ProductResponse | null> {
    try {
        const res = await fetch(`http://localhost:8080/products/${code}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            console.error(`Failed to fetch product: ${res.status} ${res.statusText}`);
            return null;
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}