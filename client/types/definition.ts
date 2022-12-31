export interface Addon {
    name: string;
    is_default?: boolean;
    price: number;
    id: number;
}

interface GenericProduct {
    id: number;
    name: string;
    price: number;
    quantity_available: number;
    image: string;
    vat: number;
}

export interface ProductType extends GenericProduct {
    addons: Addon[];
}

export interface CartProductType extends Omit<GenericProduct, "quantity_available" | "image"> {
    quantity?: number;
    addon: Omit<Addon, "is_default" | "id">;
}


