export interface IUser {
    _id: number | string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    address: string;
    imageProfile: string;
    isAdmin: boolean;
    isVerified: boolean;
    isBlocked: boolean;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiry: Date;
    verifyToken: string;
    verifyTokenExpiry: Date;
    cartItems: Array<IProduct>;
    wishlist: Array<IProduct>;
    timestamps: Date
}

export interface IProduct {
    _id: string;
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
    _id: number | string;
    category: string;
    image: string;
    gender: string;
}

export interface ICurrency {
    _id: number | string;
    currency: string;
}
export interface IColor {
    _id: number | string;
    color: string;
}

export interface IBrand {
    _id: number | string;
    color: string;
    image: string;
}

export interface ISize {
    _id: number | string;
    size: string;
}

export interface IGender {
    _id: number | string;
    gender: string;
}

export interface IOrder {
    _id: number | string;
    user: string;
    orderItems: Array<IProduct>;
    shippingAddress: string;
    paymentMethod: string;
    paymentResult: string;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
    isDelivered: boolean;
    deliveredAt: Date;
    createdAt: Date;
    isPaid: boolean;
    paidAt: Date;
}

export interface IAddress {
    _id: number | string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    shippingPrice: number;
}