import { AuthProviderEnum, UserStatusEnum } from "@prisma/client"; // Adjust the import path according to your project structure and prisma schema location, e.g.,

export interface createUserInterface {
    name?: string;
    lastName?: string;
    avatar?: string;
    email: string;
    backupEmail?: string;
    phone?: string;
    password?: string;
    country?: string;
    language?: string;
    emailConfirm?: boolean;
    backupEmailConfirm?: boolean
    phoneConfirm?: boolean

    twoFactorEnabled?: boolean;
    twoFactorSecret?: string;


    status?: UserStatusEnum;
    authProvider?: AuthProviderEnum;
}

export interface updateUserInterface {

    name?: string;
    lastName?: string;
    avatar?: string;
    email?: string;
    backupEmail?: string;
    phone?: string;
    password?: string;
    country?: string;
    language?: string;
    emailConfirm?: boolean;
    backupEmailConfirm?: boolean
    phoneConfirm?: boolean

    twoFactorEnabled?: boolean;
    twoFactorSecret?: string;


    status?: UserStatusEnum;
    authProvider?: AuthProviderEnum;

}