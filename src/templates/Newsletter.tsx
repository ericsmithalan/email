import React, { FC, ReactNode } from "react";

import { Blurb } from "../components/Blurb";
import { Header } from "../components/Header";
import { If } from "../components/If";
import { Spacer } from "../components/Spacer";
import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Table, Td, Tr } from "../lib/primitives";
import { Styleable } from "../lib/types";
import { hasValue } from "../lib/utils/validation";
import { BlurbModel } from "../models/Blurb";
import { NewsletterModel } from "../models/Newsletter";

const styles = style({
    newsletterTable: {
        width: 800,
        "@tablet": {
            width: "100%"
        }
    }
});

const blurb1: BlurbModel = {
    hero: {
        image: {
            width: "100%",
            height: "auto"
        }
    },
    title: "FOOT LOCKER",
    subTitle: "WEBBY HONOREE",
    intro: "FOOT LOCKER PROJECT GREENHOUSE RECEIVES WEBBY HONOR",
    paragraphs: [
        `Foot Locker’s Project Greenhouse mobile and web application developed by the Ascendum Digital team is an honoree in the 2020 Webby Awards. The international Webby Awards is hailed as the "Internet's highest honor" by The New York Times. There were more than 13k submissions this year.`,
        `By earning the “Honoree” status, Project Greenhouse was named a top five submission in the Mobile App Beauty and Lifestyle category, along with notable names including Macy’s and Gucci. The Webby Awards is the leading international awards organization honoring excellence on the Internet, including websites, video, advertising, media & PR, apps, mobile, voice, social, podcasts, and games.`,
        `The official Webby Award (selected by the Academy) and People’s Voice Award (selected by the voting public) winners will be announced during a live streaming broadcast on Tuesday May 19 at 3pm ET, 12pm PT, and 8pm GMT at www.webbyawards.com. The event is virtually hosted by stand-up comedian, actor and writer Patton Oswalt.`,
        `From April 27 through May 7, more than 600k people cast nearly 2.2 million votes in the People’s Choice Award. Huge thanks to all Vora employees who took the time to vote for and promote the Greenhouse nomination through your social media channels and elsewhere. We greatly appreciate your support.`,
        `This is the second prestigious award the app has won, after receiving a Gold Award in the Hermes Creative Awards last month. A fantastic accomplishment all – well done!`,
        `Project Greenhouse Ascendum Team: Android Devs - Ben Beverly and Matt Laser; iOS Devs - Marcus Adams and Mark Fisher; Website Devs - Jimmy Kausha and Tyler Knipfer; Azure Devs - Sraddhan Shah and Nitin Rangarajan; QA - Ani Talukder and Marc Betts; Designer - Kristin Rohrkasse; Product Director - Robbie Sykes`
    ]
};

const blurb2: BlurbModel = {
    hero: {
        image: {
            width: "100%",
            height: "auto"
        }
    },
    title: "FOOT LOCKER",
    subTitle: "WEBBY HONOREE",
    intro: "FOOT LOCKER PROJECT GREENHOUSE RECEIVES WEBBY HONOR",
    paragraphs: [
        `Foot Locker’s Project Greenhouse mobile and web application developed by the Ascendum Digital team is an honoree in the 2020 Webby Awards. The international Webby Awards is hailed as the "Internet's highest honor" by The New York Times. There were more than 13k submissions this year.`,
        `By earning the “Honoree” status, Project Greenhouse was named a top five submission in the Mobile App Beauty and Lifestyle category, along with notable names including Macy’s and Gucci. The Webby Awards is the leading international awards organization honoring excellence on the Internet, including websites, video, advertising, media & PR, apps, mobile, voice, social, podcasts, and games.`,
        `The official Webby Award (selected by the Academy) and People’s Voice Award (selected by the voting public) winners will be announced during a live streaming broadcast on Tuesday May 19 at 3pm ET, 12pm PT, and 8pm GMT at www.webbyawards.com. The event is virtually hosted by stand-up comedian, actor and writer Patton Oswalt.`,
        `From April 27 through May 7, more than 600k people cast nearly 2.2 million votes in the People’s Choice Award. Huge thanks to all Vora employees who took the time to vote for and promote the Greenhouse nomination through your social media channels and elsewhere. We greatly appreciate your support.`,
        `This is the second prestigious award the app has won, after receiving a Gold Award in the Hermes Creative Awards last month. A fantastic accomplishment all – well done!`,
        `Project Greenhouse Ascendum Team: Android Devs - Ben Beverly and Matt Laser; iOS Devs - Marcus Adams and Mark Fisher; Website Devs - Jimmy Kausha and Tyler Knipfer; Azure Devs - Sraddhan Shah and Nitin Rangarajan; QA - Ani Talukder and Marc Betts; Designer - Kristin Rohrkasse; Product Director - Robbie Sykes`
    ]
};

const newsletter: NewsletterModel = {
    header: {
        title: "My Title",
        date: new Date(),
        image: {
            alt: "test alt",
            width: "100%",
            height: 100
        }
    },
    blurbs: [blurb1, blurb2]
};

export interface NewsletterTemplateProps extends Styleable {
    model?: NewsletterModel;
}

export const NewsletterTemplate: FC<NewsletterTemplateProps> = (props: NewsletterTemplateProps) => {
    const { newsletterTable } = useClassNames(styles);

    NewsletterTemplate.defaultProps = {
        className: newsletterTable
    };

    const merged = useStyle2(styles, props, NewsletterTemplate.defaultProps);

    const render = (model: NewsletterModel) => {
        const modules = [];

        modules.push(<If test="gte mso 9">{<div>test comment</div>}</If>);

        if (hasValue(model.header)) {
            modules.push(<Header {...model.header} />);
            modules.push(<Spacer height={50} />);
        }

        if (hasValue(model.blurbs)) {
            model.blurbs?.forEach((item, i: number) => {
                modules.push(<Blurb key={i} {...item} />);
                modules.push(<Spacer height={80} />);
            });
        }

        return modules;
    };

    return (
        <Table align="center" {...merged}>
            <Tr>
                <Td>{render(newsletter)}</Td>
            </Tr>
        </Table>
    );
};
