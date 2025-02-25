export type propsPagination = {
    limitProd: number,
    skipProd: number,
    nextPage: (skip: number) => void,
    forwardPage:() => void
}