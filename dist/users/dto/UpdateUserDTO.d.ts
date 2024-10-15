export declare class UpdateUserDTO {
    User: {
        name: string;
        email: string;
        password: string;
    };
    Vendor: string;
    Product: {
        title: string;
        price: number;
        description: string;
    };
    Cart: {
        name: string;
        price: number;
    };
}
