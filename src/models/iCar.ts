interface iProperty {
    name: string;
    value: string | number;
    type: "string" | "dropdown";
}

export interface iCar {
    id: number | string;
    title: string;
    text: string;
    image: string;
    price: number;
    date: Date;
    properties: iProperty[];
}