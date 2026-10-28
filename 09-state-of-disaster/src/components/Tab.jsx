export default function Tab({ index, item, ref, activeTab, onClick }) {
  const { id, label, icon, activeIcon } = item;
  const isSelected = activeTab === index;

  return (
    <button
      role='tab'
      id={`tab-${id}`}
      aria-controls={`panel-${id}`}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      ref={ref}
      className={isSelected ? 'tab active' : 'tab'}
      onClick={() => onClick(index)}>
      <i
        className={isSelected ? activeIcon : icon}
        aria-hidden='true'></i>{' '}
      {label}
    </button>
  );
}
