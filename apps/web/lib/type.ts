import { ReactNode } from "react";

export type Component = {
    title: string;
    href: string;
    description: string;
};

export type PropertyCardProps = {
    description: string;
    title: string;
    rightImage: string;
    leftBottomImage: string;
    bottomTextLeft: ReactNode;
    bottomTextRight: ReactNode;
};

export type ProductsProps = {
    id: number
    title: string
    price: number
    description: string
    category: string,
    image: string,
    rating: { rate: number, count: number }
}
