import { toEnum } from "../utils/toEnum";

export const TargetKind = toEnum(["@default", "@tablet", "@phone"]);

export const GlobalTargetKind = toEnum(["@reset"]);
