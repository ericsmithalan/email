import { BaseModel } from "./BaseModel";

export interface ImageModel extends BaseModel {
    alt?: string;
    src?: string;
    width?: string | number;
    height?: string | number;
}
