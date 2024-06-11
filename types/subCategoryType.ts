export interface subCategoryType {
    name: string;
    id: number | null;
}

export interface subCategoryFormData {
    name: string;
    id: number;
    categorys: {
        id: number;
        name: string;
    };
}