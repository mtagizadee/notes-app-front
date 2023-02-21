export const isNotEmpty = (value: string) =>
  value !== "" && value !== null && value !== undefined;

export const minLength = (length: number) => (value: string) => {
  return value.length >= length;
};

export const maxLength = (length: number) => (value: string) => {
  return value.length <= length;
};
