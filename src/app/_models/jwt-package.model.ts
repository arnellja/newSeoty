import { EmployeeSummary } from "./EmployeeSummary.model";
import { PersonProSummaryResponseInfo } from "./PersonProSummaryResponseInfo.model";

export interface JWTPackage {
  personSummaryInfo: PersonProSummaryResponseInfo;
  employeeSummaryInfo: EmployeeSummary;
}

export interface JwtPayload {
  iss: string;
  sub: string;
  aud: string;
  exp: string;
  nbf: string;
  iat: string;
  jti: string;
}

export interface JwtHeader {
  alg: string;
  typ: string;
}