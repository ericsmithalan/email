import { BaseModel } from "./BaseModel";
import { ImageModel } from "./Image";

export interface HeaderModel extends BaseModel {
    image?: ImageModel;
    title?: string;
    date?: Date;
}
