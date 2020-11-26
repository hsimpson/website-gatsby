export function getLocaleDate(isoDateString): string {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  let lang = 'en';
  if (typeof navigator !== 'undefined') {
    lang = navigator.language;
  }

  const date = new Date(isoDateString);
  const dateTimeFormat = new Intl.DateTimeFormat(lang, options);
  return dateTimeFormat.format(date);
}
