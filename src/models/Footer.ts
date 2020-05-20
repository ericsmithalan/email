import { BaseModel } from "./BaseModel";
import { ImageModel } from "./Image";

export interface FooterModel extends BaseModel {
    image: ImageModel;
}
