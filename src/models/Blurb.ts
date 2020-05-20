import { BaseModel } from "./BaseModel";
import { HeroModel } from "./Hero";

export interface BlurbModel extends BaseModel {
    hero: HeroModel;
    title: string;
    subTitle: string;
    paragraphs: string[];
}
