export class UpdateUserDTO {
    User: string;
    Vendor: string;
    Product: string;
    Cart: { name: string, price: number };
}