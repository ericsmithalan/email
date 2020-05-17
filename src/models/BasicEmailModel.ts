export interface AddressModel {
    line1: string;
    line2: string;
}

export interface SignatureModel {
    name: string;
    jobTitle?: string;
    department?: string;
    businessPhone?: string;
    cellPhone?: string;
    address?: AddressModel;
}

export interface ContentModel {
    paragraphs: string[];
}

export interface BasicEmailModel {
    to?: string;
    signature?: SignatureModel;
    content?: any[];
}
