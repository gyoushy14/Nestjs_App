export declare class CreateUserSettingsDTO {
    receiveNotifications?: boolean;
    receiveEmails?: boolean;
    receiveSMS?: boolean;
}
export declare class CreateUserDTO {
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
    settings?: CreateUserSettingsDTO;
}
