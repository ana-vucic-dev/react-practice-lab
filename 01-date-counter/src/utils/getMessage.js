export default function getMessage(count) {
  if (count === 0) {
    return 'Today is';
  }

  const dayCount = Math.abs(count);
  const dayLabel = dayCount === 1 ? 'day' : 'days';

  return count > 0
    ? `${dayCount} ${dayLabel} from today is`
    : `${dayCount} ${dayLabel} ago was`;
}
