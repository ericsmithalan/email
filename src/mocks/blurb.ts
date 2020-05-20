import faker from "faker";

import { BlurbModel } from "../models/Blurb";
import { HeroModel } from "../models/Hero";

const hero: HeroModel = {
    image: {
        alt: faker.name.title(),
        src: faker.image.imageUrl()
    }
};

export const blurb: BlurbModel = {
    hero: hero,
    title: faker.commerce.productName(),
    subTitle: faker.commerce.department(),
    intro: faker.lorem.words(6),
    paragraphs: [faker.lorem.paragraph(3), faker.lorem.paragraph(6), faker.lorem.paragraph(4)]
};
