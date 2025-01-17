import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "mt-1 block w-full px-4 py-3 bg-gray-50 border-0 focus:ring-1 focus:ring-primary text-gray-900 placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-light tracking-wide text-gray-600">
          Nom complet
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className={inputClasses}
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-light tracking-wide text-gray-600">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className={inputClasses}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-light tracking-wide text-gray-600">
          Téléphone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className={inputClasses}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-light tracking-wide text-gray-600">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className={inputClasses}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 text-sm tracking-wider font-light text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
      >
        ENVOYER
      </button>
    </form>
  );
}