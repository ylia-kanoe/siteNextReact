export type productReviews = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

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
    reviews: productReviews[],
    sku: string,
    availabilityStatus: string
}

export type productsData = {
    products: productData[],
    limit: number
}

export type setProductsCategory = {
    category: string
}