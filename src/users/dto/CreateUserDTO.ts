import { Type } from "class-transformer"; // Importing 'Type' to handle type conversion for nested objects
import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"; // Importing validators from class-validator

// DTO (Data Transfer Object) for user settings
export class CreateUserSettingsDTO {
    @IsOptional() // Field is optional
    @IsBoolean() // Must be a boolean value if provided
    receiveNotifications?: boolean; // Optional 'receiveNotifications' field of type boolean

    @IsOptional() // Field is optional
    @IsBoolean() // Must be a boolean value if provided
    receiveEmails?: boolean; // Optional 'receiveEmails' field of type boolean

    @IsOptional() // Field is optional
    @IsBoolean() // Must be a boolean value if provided
    receiveSMS?: boolean; // Optional 'receiveSMS' field of type boolean
}

// DTO for creating a user, with validation rules
export class CreateUserDTO {
    @IsString() // 'User' must be a string (nested object is invalid due to type declaration)
    @IsNotEmpty() // Field must not be empty
    User: string;

    @IsString() // 'Vendor' must be a string
    @IsNotEmpty() // Field must not be empty
    Vendor: string; // 'Vendor' field of type string

    @IsString() // 'Product' must be a string (nested object is invalid due to type declaration)
    @IsNotEmpty() // Field must not be empty
    Product: string;
    @IsObject() // 'Cart' must be an object
    @IsNotEmpty() // Field must not be empty
    Cart: { // 'Cart' object with fields 'name' and 'price'
        name: string,
        price: number,
    };

    @IsOptional() // Field is optional
    @ValidateNested() // Validate the nested object using its DTO
    @Type(() => CreateUserSettingsDTO) // Specify the type to be transformed into 'CreateUserSettingsDTO'
    settings?: CreateUserSettingsDTO; // Optional 'settings' field, which references the CreateUserSettingsDTO
}
