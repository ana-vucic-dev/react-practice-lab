export default function calculateTotalTip(bill, people) {
  const totalPercentage = people.reduce((sum, person) => {
    const tip = person.tip;
    return sum + (tip === '' || tip === undefined ? 0 : Number(tip));
  }, 0);

  const averagePercentage =
    people.length > 0 ? totalPercentage / people.length : 0;

  return Number(((bill * averagePercentage) / 100).toFixed(2));
}
