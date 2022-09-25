export const convertLabDateToDate = (dateString: string): Date => {
  const year: number = parseInt(dateString.substring(0, 4), 10);
  const month: number = parseInt(dateString.substring(4, 6), 10);
  const day: number = parseInt(dateString.substring(6, 8), 10);

  return new Date(year, month - 1, day);
};

export const convertLabDateToLongString = (dateString: string): string => {
  if (!dateString) {
    return '';
  }
  const date = convertLabDateToDate(dateString);

  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
