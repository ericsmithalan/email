import { toEnum } from "../utils/toEnum";

//https://stackoverflow.design/email/base/mso/

export const MsoOperatorKind = toEnum(["gt", "lt 9", "gte 10", "lte 11", "|", "!"]);
