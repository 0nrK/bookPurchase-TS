
export type IBook = {
    id: number;
    author: string;
    pages: number;
    title: string;
    price: number;
    currency: string;
    cover_url: string;
    quantity?:number;
    total?:number;
}

export interface CartState  {
    cartItems: IBook[] | null,
    totalPrice: number | null,
    totalQuantity:number | null,
}

export interface FetchedBookData{
    data: IBook[],
    metadata:{
        page: number,
        records_per_page: number,
        total_records:number,
    }
}