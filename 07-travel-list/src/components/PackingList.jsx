import { useMemo, useState } from 'react';
import useDialog from '../hooks/useDialog.js';
import Item from './Item.jsx';
import ListSort from './ListSort.jsx';

export default function PackingList({
  items,
  removeItem,
  togglePacked,
  clearList
}) {
  const { openDialog } = useDialog();

  const [sortBy, setSortBy] = useState('input');

  const sortedItems = useMemo(() => {
    if (sortBy === 'packed') {
      return [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    if (sortBy === 'name') {
      return [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }

    return items;
  }, [items, sortBy]);

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <section
      className='packing-list-container'
      aria-label='Packing list'>
      <ul className='packing-list'>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            togglePacked={togglePacked}
          />
        ))}
      </ul>

      {items.length ? (
        <div className='list-actions'>
          <ListSort
            selectedValue={sortBy}
            onChange={handleSortChange}
          />

          <button
            type='button'
            aria-haspopup='dialog'
            className='btn clear-list-btn'
            onClick={e =>
              openDialog(
                {
                  id: 'list-deletion-dialog',
                  labelId: 'list-deletion-title',
                  className: 'confirmation-dialog',
                  title: 'Confirm Deletion',
                  content: (
                    <>
                      <p className='question'>
                        Are you sure you want to delete all items?
                      </p>
                      <p className='warning'>This action cannot be undone.</p>
                    </>
                  ),
                  confirmBtnClassName: 'btn dialog-delete-btn',
                  confirmText: 'Delete',
                  onConfirm: clearList
                },
                e.currentTarget
              )
            }>
            CLEAR LIST
          </button>
        </div>
      ) : null}
    </section>
  );
}
