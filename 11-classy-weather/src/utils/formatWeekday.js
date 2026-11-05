export default function formatWeekday(dateStr) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short'
  }).format(new Date(dateStr));
}
