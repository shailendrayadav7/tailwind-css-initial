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
      <h1 className="text-2xl font-semibold mb-4">Animal List</h1>
      <div className="grid grid-cols-2 gap-4">
        <Button type="primary" onClick={() => alert('Primary button clicked')}>
          Domestic Animal
        </Button>
        <Button type="secondary" onClick={() => alert('Secondary button clicked')}>
          Wild Animal
        </Button>
        <Button type="outlined" onClick={() => alert('Outlined button clicked')}>
          Tertiary Animal
        </Button>
      </div>

      <h1 className="text-2xl font-semibold mb-4">Domestic Animal</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <h2 className="text-lg font-semibold">Dog</h2>
          <img src="src\assets\images\dog.jpg" alt="Card Image" className="w-full h-auto mb-4" />
          <p>This is Yeezy.</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Cat</h2>
          <img src="src\assets\images\cat.jpg" alt="Card Image" className="w-full h-auto mb-4" />
          <p>This is Lucy.</p>
        </Card>
      </div>

      <h1 className="text-2xl font-semibold mb-4">User Form</h1>
      <Form onSubmit={handleFormSubmit} submitDisabled={submitDisabled} />
    </div>
  );
};

export default App;
