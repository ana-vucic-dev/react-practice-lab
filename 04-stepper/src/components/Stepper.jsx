import { useState } from 'react';
import { steps } from '../data/steps.js';
import CoverImage from './CoverImage';
import StepMessage from './StepMessage';
import Link from './Link';
import Button from './Button';

export default function Stepper() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const totalSteps = steps.length;

  function handlePrevious() {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  }

  function handleNext() {
    if (step < totalSteps) {
      setStep(prevStep => prevStep + 1);
    }
  }

  return (
    <section
      className='steps-container'
      aria-label={`${totalSteps} steps to growing your developer income`}>
      <div className='steps-trigger-container'>
        {!isOpen && (
          <i
            className='bi bi-arrow-right steps-trigger-icon'
            aria-hidden='true'></i>
        )}

        <button
          className='steps-trigger'
          aria-expanded={isOpen}
          aria-controls='steps'
          aria-label={isOpen ? 'Close steps section' : 'Open steps section'}
          onClick={() => setIsOpen(isPrevOpen => !isPrevOpen)}>
          {isOpen ? '\u00D7' : `Explore Steps`}
        </button>
      </div>

      {isOpen ? (
        <section
          className='steps'
          id='steps'>
          <div
            className='numbers'
            aria-hidden='true'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            <p>
              {steps[step - 1].message}{' '}
              <span aria-hidden='true'>{steps[step - 1].emoji}</span>
            </p>
            <Link
              url={steps[step - 1].url}
              text={steps[step - 1].linkText}
            />
          </StepMessage>

          <div className='buttons'>
            <Button
              bgColor={step === 1 ? '#9472fa' : '#7950f2'}
              onClick={handlePrevious}>
              <span aria-hidden='true'>👈</span> Previous
            </Button>

            <Button
              bgColor={step === totalSteps ? '#9472fa' : '#7950f2'}
              onClick={handleNext}>
              Next <span aria-hidden='true'>👉</span>
            </Button>
          </div>
        </section>
      ) : (
        <CoverImage />
      )}
    </section>
  );
}
