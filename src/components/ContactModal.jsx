import React, { useEffect, useState } from 'react';

const ContactModal = ({ isOpen, onClose, email }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Simple mailto fallback - opens email client with pre-filled details
      const mailtoLink = `mailto:ayushpalworks@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}\n\n---\nSent from Ayush Pal Portfolio (https://ayush-portfolio.vercel.app)`)}`;
      window.open(mailtoLink, '_blank');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white text-gray-900 dark:bg-black dark:text-white overflow-y-auto">
      <div className="fixed top-6 left-6 z-50">
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          <span className="text-sm">&larr; Back to Home</span>
        </button>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <button
          type="button"
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-white/10 flex items-center justify-center hover:border-blue-600 dark:hover:border-blue-500 transition-all"
          aria-label="Close contact modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Me</h1>
            <p className="text-gray-600 dark:text-gray-300 italic max-w-xl mx-auto">
              Let&apos;s discuss your next project or just say hello.
            </p>

            {email && (
              <div className="mt-6">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-white/10 hover:border-blue-600 dark:hover:border-blue-500 transition-all"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className="bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="modal-name">
                    Full Name
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="modal-email">
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="modal-message">
                  Your Message
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
