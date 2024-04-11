export type ButtonProps = {
    title: string;
    type?: "button" | "submit";
    variant?: string;
    leftIcon?: string;
    rightIcon?: string;
    classes?: string;
    handleClick?: () => void;
};

export type SearchManuFacturerProps = {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
};

export type FilterProps = {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
};

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export type CarCardProps = {
    car: CarProps;
};

export type CarDetailProps = {
    car: CarProps;
    isOpenModal: boolean;
    closeModal: () => void;
};
