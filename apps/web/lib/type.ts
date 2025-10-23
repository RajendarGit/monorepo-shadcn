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