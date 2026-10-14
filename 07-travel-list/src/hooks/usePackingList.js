import { useState, useEffect } from 'react';

const STORAGE_KEY = 'far-away-travel-list';

function isPackingListItem(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    typeof item.id === 'string' &&
    typeof item.description === 'string' &&
    typeof item.quantity === 'number' &&
    Number.isInteger(item.quantity) &&
    item.quantity >= 1 &&
    item.quantity <= 20 &&
    typeof item.packed === 'boolean'
  );
}

function loadPackingList() {
  try {
    const savedItems = localStorage.getItem(STORAGE_KEY);

    if (savedItems === null) {
      return {
        ok: true,
        items: []
      };
    }

    const parsedItems = JSON.parse(savedItems);

    if (!Array.isArray(parsedItems) || !parsedItems.every(isPackingListItem)) {
      return {
        ok: false,
        error: 'invalid-data'
      };
    }

    return { ok: true, items: parsedItems };
  } catch {
    return {
      ok: false,
      error: 'storage-unavailable'
    };
  }
}

export default function usePackingList() {
  const [initialLoad] = useState(loadPackingList);

  const [items, setItems] = useState(() =>
    initialLoad.ok ? initialLoad.items : []
  );

  // Persistence is best-effort; failed initial loads
  // must not overwrite potentially recoverable data in localStorage.
  useEffect(() => {
    if (!initialLoad.ok) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Keep the in-memory list usable if persistence fails.
    }
  }, [items, initialLoad]);

  function addItem(item) {
    setItems(currentItems => [...currentItems, item]);
  }

  function removeItem(id) {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  }

  function togglePacked(id) {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    setItems([]);
  }

  return {
    items,
    addItem,
    removeItem,
    togglePacked,
    clearList
  };
}
