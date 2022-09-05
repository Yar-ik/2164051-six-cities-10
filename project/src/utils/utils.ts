export const calcRatingPercent = (rating: number) => `${(100 * rating) / 5}%`;

export const upFirstLetter = (str = '') =>
  str.charAt(0).toUpperCase() + str.slice(1);
