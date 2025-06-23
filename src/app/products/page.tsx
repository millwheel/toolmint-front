import {getProducts} from "@/api/product";


export default async function ProductsPage() {

    const products = await getProducts();

    return null;
}