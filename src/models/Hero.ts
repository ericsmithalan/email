import { BaseModel } from "./BaseModel";
import { ImageModel } from "./Image";

export interface HeroModel extends BaseModel {
    image: ImageModel;
}
