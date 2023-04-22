export interface PetPost {
    _id?: string;
    kind_animal: string;
    race?: string;
    name?: string;
    age?: number;
    images: string[];
    vaccinated?: boolean;
    castrated?: boolean;
    description?: string;
    height_cm?: number;
    long_cm?: number;
    weight_kg?: number;
    user_id: string;
    purpose: string;
    publication_date?: Date;
    purpose_achieved?: boolean;
    deleted?: boolean;
}
