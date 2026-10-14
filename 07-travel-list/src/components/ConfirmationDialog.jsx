import { useEffect, useRef } from 'react';

export default function ConfirmationDialog({ config, closeDialog }) {
  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  if (!config) return null;

  const {
    id,
    labelId,
    className,
    title,
    content,
    confirmBtnClassName,
    confirmText = 'Confirm',
    onConfirm
  } = config;

  function handleConfirm() {
    onConfirm?.();
    closeDialog();
  }

  function handleCancel() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      id={id}
      className={className}
      aria-labelledby={labelId}
      aria-describedby={`dialog-${id}-content`}
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={closeDialog}>
      <h1 id={labelId}>{title}</h1>

      <div
        id={`dialog-${id}-content`}
        className='dialog-content'>
        {content}
      </div>

      <div className='dialog-actions'>
        <button
          type='button'
          className='btn cancel-btn'
          onClick={handleCancel}>
          Cancel
        </button>

        <button
          type='button'
          className={confirmBtnClassName}
          onClick={handleConfirm}>
          {confirmText}
        </button>
      </div>
    </dialog>
  );
}
