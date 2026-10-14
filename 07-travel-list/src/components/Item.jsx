import useDialog from '../hooks/useDialog.js';

export default function Item({ item, removeItem, togglePacked }) {
  const { openDialog } = useDialog();
  const { id, description, quantity, packed } = item;

  return (
    <li className='list-item'>
      <input
        type='checkbox'
        id={`item-${id}`}
        checked={packed}
        onChange={() => togglePacked(id)}
      />

      <label
        htmlFor={`item-${id}`}
        style={{ textDecoration: packed ? 'line-through' : 'none' }}>
        {quantity} {description}
      </label>

      <button
        type='button'
        aria-haspopup='dialog'
        aria-label={`Delete ${description}`}
        className='btn delete-item-btn'
        onClick={e =>
          openDialog(
            {
              id: 'item-deletion-dialog',
              labelId: 'item-deletion-title',
              className: 'confirmation-dialog',
              title: 'Confirm Deletion',
              content: (
                <>
                  <p className='question'>
                    Delete <strong>{description}</strong> from your packing
                    list?
                  </p>
                </>
              ),
              confirmBtnClassName: 'btn dialog-delete-btn',
              confirmText: 'Delete',
              onConfirm: () => removeItem(id)
            },
            e.currentTarget
          )
        }>
        <span aria-hidden='true'>×</span>
      </button>
    </li>
  );
}
