export default function Stats({ items }) {
  const totalItems = items.length;

  if (!totalItems) {
    return (
      <p className='stats'>
        <em>
          Start adding items to your packing list
          <span aria-hidden='true'> 🚀</span>
        </em>
      </p>
    );
  }

  const packedItems = items.filter(item => item.packed).length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <p className='stats'>
      {packedPercentage === 100 ? (
        <em>
          You got everything! Ready to go!
          <span aria-hidden='true'> ✈️</span>
        </em>
      ) : (
        <em>
          <span aria-hidden='true'>💼 </span>
          {`You have ${totalItems} ${totalItems === 1 ? 'item' : 'items'} on your list. You have packed ${packedItems} (${packedPercentage}%).`}
        </em>
      )}
    </p>
  );
}
