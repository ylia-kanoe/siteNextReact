
import { Filter } from "../components/filter";
import { ProductList } from "../components/productList";
import { ProductApi } from "../services/productApi";

export async function Product() {
    const data = await ProductApi.getProductList(24)
    const products = data.products

    return (<>
        <Filter />
        <ProductList products={products} />
    </>
    )
}