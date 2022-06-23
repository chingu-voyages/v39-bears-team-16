const lang = 'en-us';
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  return new Intl.DateTimeFormat(lang, options).format(new Date());
};
