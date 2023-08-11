import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';

const App: React.FC = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleFormSubmit = (data: any) => {
    console.log(data); 
    setSubmitDisabled(true); 
  };

  return (
    <div className="p-8">
      <Button type="primary" onClick={() => alert('Primary button clicked')}>
        Primary Button
      </Button>
      <Button type="secondary" onClick={() => alert('Secondary button clicked')}>
        Secondary Button
      </Button>
      <Button type="outlined" onClick={() => alert('Outlined button clicked')}>
        Outlined Button
      </Button>

      <Card>
        <h2 className="text-lg font-semibold">Tailwind CSS</h2>
        <p>Setting up Tailwind CSS in a Vite project. </p>
      </Card>

      <Form onSubmit={handleFormSubmit} submitDisabled={submitDisabled} />
    </div>
  );
};

export default App;
