import React from 'react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Sales Forecasting (Time-Series)',
    description:
      'Built a demand forecasting pipeline using feature engineering and XGBoost/Prophet, with model monitoring.',
    tech: ['Python', 'Pandas', 'Prophet', 'XGBoost', 'MLflow', 'Airflow'],
    demoUrl: 'https://example.com/forecasting-demo',
    sourceUrl: 'https://github.com/example/forecasting',
  },
  {
    title: 'NLP Text Classifier',
    description:
      'End-to-end text classification system with FastAPI inference service and CI/CD.',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'Docker', 'GitHub Actions'],
    demoUrl: 'https://example.com/nlp-demo',
    sourceUrl: 'https://github.com/example/nlp-classifier',
  },
  {
    title: 'Interactive Analytics Dashboard',
    description:
      'Real-time analytics built with Streamlit and Plotly for exploratory data analysis.',
    tech: ['Streamlit', 'Plotly', 'Pandas'],
    demoUrl: 'https://example.com/analytics-demo',
    sourceUrl: 'https://github.com/example/analytics-dashboard',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{p.title}</h4>
              <p className="mt-2 text-gray-700 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full border bg-gray-50 px-2.5 py-1 text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {p.demoUrl && (
                  <a
                    className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {p.sourceUrl && (
                  <a
                    className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                    href={p.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

