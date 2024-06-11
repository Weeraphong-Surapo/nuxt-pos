export interface productData {
    id: number;
    name: string;
    price: number;
    active: boolean;
    quantity?: number;
    barcode?:string;
    is_active?: boolean | number;
    cost?: number;
    description?: string;
    file_path?: string;
    category: {
        id: number;
        name: string;
    };
    sub_category: {
        id: number;
        name: string;
    };
}

export interface productFormData {
    id: number | null;
    name: string;
    price: number;
    category: number | string;
    sub_category: number | string;
    is_active: boolean | number;
    description: string;
    cost: number | string;
    file: File | null;
    quantity: number;
    barcode: string
    file_path?: string;
}