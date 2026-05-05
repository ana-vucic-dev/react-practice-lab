export default function StepMessage({ step, children }) {
  return (
    <section
      className='message'
      aria-labelledby={`step-${step}-title`}>
      <h2 id={`step-${step}-title`}>Step {step}</h2>
      {children}
    </section>
  );
}
