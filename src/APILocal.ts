export const APILocal = {
  get: (key: string) => localStorage.getItem(key),

  set: (key: string, data: string) => localStorage.setItem(key, data),
};
