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

export interface Point {
    x: number;
    y: number;
}

export type NodeType = {
    id: string;
    value: string;
    readonly: boolean;
    children: NodeType[];
};

export type TreeNodeProps = {
    node: NodeType;
    onUpdate: (updatedNode: NodeType) => void;
    onDelete: (id: string) => void;
};

export type UserProps = {
    id?: number;
    username: string;
    email: string;
};
