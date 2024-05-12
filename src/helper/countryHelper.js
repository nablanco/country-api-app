import { countryCodes } from "./countryCodeObject";

export function getCountryByCode(code) {
  return countryCodes[code];
}
