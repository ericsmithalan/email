import React, { FC, ReactNode } from "react";

import { Blurb } from "../components/Blurb";
import { Header } from "../components/Header";
import { If } from "../components/If";
import ContentWithGutters from "../components/layouts/ContentWithGutters";
import { StandardContainer } from "../components/layouts/StandardContainer";
import { Signature } from "../components/Signature";
import { Spacer } from "../components/Spacer";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Img, P } from "../lib/primitives";
import { style } from "../lib/style";
import { Styleable } from "../lib/types";
import { hasValue } from "../lib/utils/validation";
import { BlurbModel } from "../models/Blurb";
import { FooterModel } from "../models/Footer";
import { HeaderModel } from "../models/Header";
import { NewsletterModel } from "../models/Newsletter";
import { SignatureModel } from "../models/Signature";

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
    title: "GODDARD SYSTEMS",
    subTitle: "PROJECT UPDATES",
    intro: "DIGITAL INNOVATIONS CONTINUE AT GODDARD",
    paragraphs: [
        `Goddard Systems is the franchisor of The Goddard School which is an early childhood education provider with more than 500 franchised Schools in 37 states and hundreds of markets, including Atlanta, Boston, Chicago, Houston, Philadelphia and Portland. Goddard approached us to help them gain access to all their data and generate reports to make data-driven business decisions.`,
        `Ascendum began building a next generation data and analytics platform for Goddard Systems in late February. The solution provides enterprise architecture, data accuracy and enterprise reporting. This will modernize the data infrastructure and build a pathway to monetizing analytics and data within the system.`,
        `Goddard Data Team: Data Scientists - Neta Iser (Tech Lead), Anvesh Muttavarapu, and Harini Chakravathy; Program Manager - Chris Ransdell; DevOps - Aaron Dean, Business Analyst - Jeff Wills; QA - Jaclyn Lacey; BI Engineer - Doolam Venkata Atchi Reddy, Lavanya Chenna, Pyapili Yallapu Dinesh, Rajat Sharma, and Rami Reddy`,
        `Goddard Franchise Contingency Planning Project With the advent of the Covid-19 pandemic, the franchisees of GSI are under immense financial pressure. There is a need for a system to help the franchisees get a view of their expenses and figure out contingency planning. In less than a week, Ascendum built a financial planning template web application that allowed each franchisee to provide data on the expenses for each of the schools. Well done!`,
        `Contingency App Team: Devs - Mickey Mentzer and Josh Snapp; Program Lead - Chris Ransdell; Design - Paige Warman`,
        `Goddard Network Support The Goddard team needs the expertise to help setup and lead the infrastructure architecture to support their digital transformation. Ascendum will work with Goddard to help build out a new Azure infrastructure and establish best practices for updating legacy tools and equipment, opportunities for automation and security.`
    ]
};

interface TestModel {
    header?: HeaderModel;
    blurbs?: BlurbModel[];
    footer?: FooterModel;
    signature?: SignatureModel;
}

const test: TestModel = {
    header: {
        title: "DEVELOP BEYOND NEWSLETTER",
        date: new Date(),
        image: {
            alt: "test alt",
            width: "100%",
            height: 100
        }
    },
    blurbs: [blurb1, blurb2],
    signature: {
        name: "Eric Smith",
        jobTitle: "UX Designer",
        email: "eric.smith@ascendum.com",
        department: "Ascendum Digital",
        workPhone: "253 229 1679",
        cellPhone: "253 229 1679",
        location: "US HQ"
    }
};

export interface TestTemplateProps extends Styleable {}

export const TestTemplate: FC<TestTemplateProps> = (props: TestTemplateProps) => {
    const { newsletterTable } = useClassNames(styles);

    const merged = useStyle2(styles, props, {
        className: newsletterTable
    });

    const render = (model: NewsletterModel) => {
        const modules = [];

        modules.push(<If test="gte mso 9">{<div>test comment</div>}</If>);

        if (hasValue(model.header)) {
            modules.push(<Header {...model.header} />);
            modules.push(<Spacer height={50} />);
        }

        if (hasValue(model.blurbs)) {
            model.blurbs?.forEach((item, i: number) => {
                modules.push(<Blurb key={item.title} {...item} />);
                modules.push(<Spacer key={i} height={80} />);
            });
        }

        if (hasValue(model.signature)) {
            modules.push(<Signature {...(model.signature as SignatureModel)} />);
        }

        modules.push(
            <ContentWithGutters leftGutterContent={<Img width={180} height={250} />}>
                <P>
                    Foot Locker’s Project Greenhouse mobile and web application developed by the
                    Ascendum Digital team is an honoree in the 2020 Webby Awards. The international
                    Webby Awards is hailed as the "Internet's highest honor" by The New York Times.
                    There were more than 13k submissions this year.
                </P>
                <P>
                    By earning the “Honoree” status, Project Greenhouse was named a top five
                    submission in the Mobile App Beauty and Lifestyle category, along with notable
                    names including Macy’s and Gucci. The Webby Awards is the leading international
                    awards organization honoring excellence on the Internet, including websites,
                    video, advertising, media & PR, apps, mobile, voice, social, podcasts, and
                    games.
                </P>
                <P>
                    The official Webby Award (selected by the Academy) and People’s Voice Award
                    (selected by the voting public) winners will be announced during a live
                    streaming broadcast on Tuesday May 19 at 3pm ET, 12pm PT, and 8pm GMT at
                    www.webbyawards.com. The event is virtually hosted by stand-up comedian, actor
                    and writer Patton Oswalt.
                </P>
            </ContentWithGutters>
        );

        return modules;
    };

    return <StandardContainer>{render(test)}</StandardContainer>;
};
