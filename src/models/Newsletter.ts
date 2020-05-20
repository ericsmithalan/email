import { BaseModel } from "./BaseModel";
import { BlurbModel } from "./Blurb";
import { FooterModel } from "./Footer";
import { HeaderModel } from "./Header";

export interface NewsletterModel extends BaseModel {
    header?: HeaderModel;
    blurbs?: BlurbModel[];
    footer?: FooterModel;
}
