export default function Link({ url, text }) {
  return (
    <div className='link'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'>
        {text}
      </a>
    </div>
  );
}
