import React, { useState } from 'react';

// ---------- STEP 1 ----------
const Details = ({ formData, handleChange }) => {
  return (
    <div className='flex flex-col gap-2.5'>
      <div className='flex flex-col gap-1.5'>
        <label>name</label>
        <input
          value={formData.name}
          type='text'
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label>age</label>
        <input
          type='number'
          value={formData.age}
          onChange={(e) => handleChange('age', e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label>profession</label>
        <input
          type='text'
          value={formData.profession}
          onChange={(e) => handleChange('profession', e.target.value)}
        />
      </div>
    </div>
  );
};

// ---------- STEP 2 ----------
const AddressDetails = ({ formData, handleChange }) => {
  return (
    <div className='flex flex-col gap-3.5'>
      <div className='flex flex-col gap-3'>
        <label>Address 1</label>
        <input
          type='text'
          value={formData.address1}
          onChange={(e) => handleChange('address1', e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-3'>
        <label>Address 2</label>
        <input
          type='text'
          value={formData.address2}
          onChange={(e) => handleChange('address2', e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-3'>
        <label>City</label>
        <input
          type='text'
          value={formData.city}
          onChange={(e) => handleChange('city', e.target.value)}
        />
      </div>
    </div>
  );
};

// ---------- STEP 3 ----------
const Review = ({ formData }) => {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <h2 className='font-bold text-lg'>Review Your Information</h2>

      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Age:</strong> {formData.age}
      </p>
      <p>
        <strong>Profession:</strong> {formData.profession}
      </p>

      <p>
        <strong>Address 1:</strong> {formData.address1}
      </p>
      <p>
        <strong>Address 2:</strong> {formData.address2}
      </p>
      <p>
        <strong>City:</strong> {formData.city}
      </p>

      <button className='bg-green-500 text-white px-3 py-1 rounded mt-3'>
        Save
      </button>
    </div>
  );
};

// ---------- STEPPER COMPONENT ----------
const Stepper = ({ steps, activeStep }) => {
  return (
    <div className='flex items-center justify-center mb-4 w-full'>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <div key={index} className='flex items-center w-full'>
            {/* Circle */}
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                ${
                  isActive
                    ? 'bg-blue-500'
                    : isCompleted
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }
              `}
            >
              {index + 1}
            </div>

            {/* Line (except after last circle) */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1 h-1 
                  ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                `}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ---------- MAIN APP ----------
const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    address1: '',
    address2: '',
    city: '',
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const steps = [
    { title: 'Fill in Your Details', components: Details },
    { title: 'Address Details', components: AddressDetails },
    { title: 'Review and Save', components: Review },
  ];

  const ActiveCompo = steps[activeStep];

  return (
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-4 p-5 border rounded-md w-[400px]'>
        {/* Stepper */}
        <Stepper steps={steps} activeStep={activeStep} />

        <h1 className='text-xl font-semibold'>{ActiveCompo.title}</h1>

        <ActiveCompo.components
          formData={formData}
          handleChange={handleChange}
        />

        <div className='flex justify-between mt-3'>
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
            className='px-3 py-1 bg-gray-300 rounded disabled:opacity-40'
          >
            Previous
          </button>

          <button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => prev + 1)}
            className='px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-40'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
