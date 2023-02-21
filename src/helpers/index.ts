import { isNotEmpty } from "../validators";

export const undefineEmptyValues = (obj: any) => {
  for (const key in obj) {
    if (!isNotEmpty(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
};
