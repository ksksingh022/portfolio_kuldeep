import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Get in touch</h3>
        <p className="mt-4 text-gray-700">
          Looking to collaborate or discuss data science? Email me or connect via social links.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">
            Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border px-4 py-2 text-gray-900 hover:bg-white">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border px-4 py-2 text-gray-900 hover:bg-white">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

