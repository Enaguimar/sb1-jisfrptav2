import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '@/types';
import { generateCaptcha } from '@/utils/captcha';

export const ContactForm: React.FC = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserCaptcha('');
    setCaptchaError('');
  };

  const onSubmit = async (data: ContactFormData) => {
    if (userCaptcha.toLowerCase() !== captcha.code.toLowerCase()) {
      setCaptchaError('El código de verificación no coincide');
      return;
    }

    try {
      // Here you would implement your email sending logic
      console.log('Sending email to info@valledericote.com', data);
      reset();
      setUserCaptcha('');
      refreshCaptcha();
      alert('Mensaje enviado correctamente');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          {...register('name', { required: 'El nombre es obligatorio' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input
          type="tel"
          {...register('phone')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea
          {...register('message', { required: 'El mensaje es obligatorio' })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Código de verificación</label>
        <div className="mt-1 flex items-center space-x-4">
          <div className="bg-gray-100 px-4 py-2 rounded-md select-none font-mono text-lg">
            {captcha.text}
          </div>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="text-green-600 hover:text-green-700"
          >
            Refrescar
          </button>
        </div>
        <input
          type="text"
          value={userCaptcha}
          onChange={(e) => setUserCaptcha(e.target.value)}
          placeholder="Introduce el código"
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        {captchaError && (
          <p className="mt-1 text-sm text-red-600">{captchaError}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
      >
        Enviar mensaje
      </button>
    </form>
  );
};