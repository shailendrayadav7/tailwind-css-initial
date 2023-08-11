import React, { useState } from 'react';

interface FormProps {
  onSubmit: (data: any) => void;
  submitDisabled: boolean;
}

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, submitDisabled }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" disabled={submitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
