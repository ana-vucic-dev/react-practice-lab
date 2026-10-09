export const FILTERS = [
  {
    value: 'all',
    label: 'Show all',
    filterFn: () => true
  },
  {
    value: 'available',
    label: 'Available only',
    filterFn: pizza => !pizza.soldOut
  },
  {
    value: 'vegan',
    label: 'Vegan',
    emoji: '🌱',
    filterFn: pizza => pizza.vegan
  },
  {
    value: 'vegetarian',
    label: 'Vegetarian',
    emoji: '🧀',
    filterFn: pizza => pizza.vegetarian
  }
];

export const FILTER_MAP = Object.fromEntries(
  FILTERS.map(filter => [filter.value, filter])
);
