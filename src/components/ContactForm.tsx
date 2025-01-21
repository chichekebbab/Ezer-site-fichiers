import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xjkknejp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000); // Cache l'animation après 3 secondes
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
      console.error(error);
    }
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
          required
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

      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-lg text-center animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mx-auto mb-4 animate-check"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3 className="text-2xl font-light text-gray-900 mb-2">Message envoyé !</h3>
            <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      )}
    </form>
  );
}