export interface IProduct {
    id: number | string;
    name: string;
    description: string;
    price: number;
    category: string;
    code: string;
    image: string;
    size: number;
    stock: number;
    color: string;
    gender: string;
    brand: string;
    seller: string;
    currency: string;
    reviews: string;
    isDeleted: boolean;
    isBlocked: boolean;
    isVerified: boolean;
    isFeatured: boolean;
    isTrending: boolean;
    timestamps: Date;
}

export interface ICategory {
    id: number | string;
    category: string;
    image: string;
    gender: string;
}