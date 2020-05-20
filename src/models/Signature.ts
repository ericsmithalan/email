import { BaseModel } from "./BaseModel";

export type Department =
    | "Ascendum"
    | "Ascendum Digital"
    | "Ascendum Talent"
    | "Ascendum KPS"
    | "Ascendum Products"
    | "Ascendum Distancing";

export type Location =
    | "US HQ"
    | "India HQ"
    | "India"
    | "Cambridge UK"
    | "New Jersey US"
    | "Ahmedabad India"
    | "Sydney Australia";

export interface SignatureModel extends BaseModel {
    name: string;
    jobTitle: string;
    email: string;
    department: Department;
    workPhone: string;
    cellPhone: string;
    location: Location;
}
