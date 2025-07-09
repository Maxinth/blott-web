export function formateDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}
