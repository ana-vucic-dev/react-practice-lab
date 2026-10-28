export default function StateDestroyer({ item }) {
  const { id, title, subtitle, Content } = item;

  return (
    <div
      role='tabpanel'
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className='tab-panel'>
      <h2 className='tab-title'>
        {title} <span aria-hidden='true'>💥</span>
      </h2>
      <p className='tab-subtitle'>{subtitle}</p>

      <div className='tab-content'>
        <Content />
      </div>
    </div>
  );
}
