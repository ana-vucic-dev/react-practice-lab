export default function CoverImage() {
  return (
    <figure>
      <img
        className='cover-image'
        src='https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Computer with coding illustrations'
        loading='lazy'
      />

      <figcaption>
        Image by
        <a
          href='https://unsplash.com/@growtika'
          target='_blank'
          rel='noopener'
          tabIndex='-1'>
          Growtika
        </a>
        on
        <a
          href='https://unsplash.com/photos/a-computer-with-a-keyboard-and-mouse-yGQmjh2uOTg'
          target='_blank'
          rel='noopener'
          tabIndex='-1'>
          Unsplash
        </a>
      </figcaption>
    </figure>
  );
}
