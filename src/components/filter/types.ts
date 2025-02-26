export type propsFilter = {
    filterCategory: (category: string) => void,
    limitProduct: number,
    skipProduct: number,
    sortProduct: (nameSort: string, order: string, category: string) => void,
}