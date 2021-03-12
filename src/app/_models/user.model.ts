import { Roles } from './roles.model';

export interface User {
    roles: Roles;
    first_name: string;
    last_name: string;
    net_id: string;
    byu_id: string;
    email: string;
    user_department: string;
};