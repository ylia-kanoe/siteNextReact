export type productData = {
    id: number,
    title: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number, // всего на складе
    tags: string[],
    images: string[],
    thumbnail: string,
    description: string,
    brand: string,
    reviews: [
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
    ]
}

export type productsData = {
    products: productData[],
    limit: number
}

export type setProductsCategory = {
    category: string
}