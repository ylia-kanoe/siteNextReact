import { productData } from "@/app/services/productApi/types";
import { ProductItem } from "../productItem";

export async function ProductList({ products }: { products: productData[] }) {
    return (
        <>
            <ul className="grid grid-cols-4 gap-4 place-items-center">{products.map((item) => (
                <ProductItem key={item.id} {...item} />
            ))}
            </ul>
        </>
    )
}