export function getLocaleDate(isoDateString): string {
  const options: Intl.DateTimeFormatOptions = {
    // weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const date = new Date(isoDateString);
  const dateTimeFormat = new Intl.DateTimeFormat(navigator.language, options);
  return dateTimeFormat.format(date);
}
