import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I’m Kuldeep Singh, a data scientist specializing in building production-grade ML solutions. I enjoy
          transforming raw data into actionable insights, crafting features, and deploying models that solve
          real-world problems. My interests include natural language processing, time-series analysis, and
          end-to-end MLOps.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h4 className="font-semibold text-gray-900">What I do</h4>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              <li>Exploratory data analysis and data storytelling</li>
              <li>Feature engineering and model selection</li>
              <li>Training, evaluation, and experiment tracking</li>
              <li>Deployment and monitoring of ML systems</li>
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h4 className="font-semibold text-gray-900">Toolbox</h4>
            <p className="mt-2 text-gray-700">
              Python, Pandas, NumPy, scikit-learn, TensorFlow/PyTorch, SQL, Airflow, Docker, FastAPI, MLflow,
              and cloud platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

