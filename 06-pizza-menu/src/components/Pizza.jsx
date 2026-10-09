import { useMemo } from 'react';
import { CLOUDINARY_BASE } from '../config/cloudinary.js';

export default function Pizza({ pizza }) {
  const {
    id,
    name,
    ingredients,
    imageName,
    imageWidth,
    imageHeight,
    price,
    soldOut
  } = pizza;
  const imageUrl = `${CLOUDINARY_BASE}${imageName}`;

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }),
    []
  );

  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <figure className='pizza-image-container'>
        <img
          src={imageUrl}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          loading='lazy'
          decoding='async'
        />
      </figure>

      <div
        className='pizza-info'
        aria-labelledby={`pizza-${id}`}>
        <h3 id={`pizza-${id}`}>{name}</h3>

        <p
          className='ingredients'
          aria-label='Ingredients'>
          {ingredients}
        </p>

        <span
          className='price'
          aria-label='Price'>
          {soldOut ? 'SOLD OUT' : `${formatter.format(price)}`}
        </span>
      </div>
    </li>
  );
}
