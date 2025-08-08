import React from 'react';
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiPlotly, SiApacheairflow, SiDocker, SiGithubactions, SiGooglecloud, SiTypescript, SiReact, SiFastapi, SiFlask, SiStreamlit } from 'react-icons/si';
import { FaDatabase, FaTools, FaBolt, FaAws } from 'react-icons/fa';

type Skill = { name: string; Icon?: any };

const categories: { title: string; items: Skill[] }[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'SQL', Icon: FaDatabase },
      { name: 'TypeScript', Icon: SiTypescript },
    ],
  },
  {
    title: 'ML / DS',
    items: [
      { name: 'Pandas', Icon: SiPandas },
      { name: 'NumPy', Icon: SiNumpy },
      { name: 'scikit-learn', Icon: SiScikitlearn },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'PyTorch', Icon: SiPytorch },
    ],
  },
  {
    title: 'Visualization',
    items: [
      { name: 'Plotly', Icon: SiPlotly },
    ],
  },
  {
    title: 'Data Engineering',
    items: [
      { name: 'Airflow', Icon: SiApacheairflow },
      { name: 'dbt', Icon: FaTools },
      { name: 'Hadoop/Spark', Icon: FaTools },
    ],
  },
  {
    title: 'APIs & Apps',
    items: [
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Flask', Icon: SiFlask },
      { name: 'Streamlit', Icon: SiStreamlit },
      { name: 'React', Icon: SiReact },
    ],
  },
  {
    title: 'Ops',
    items: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'MLflow', Icon: FaBolt },
      { name: 'CI/CD', Icon: SiGithubactions },
      { name: 'AWS', Icon: FaAws },
      { name: 'GCP', Icon: SiGooglecloud },
    ],
  },
];

const Skills: React.FC = () => {
  const allSkills = categories.flatMap((c) => c.items);

  return (
    <section id="skills" className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Skills</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {allSkills.map(({ name, Icon }) => {
            const Comp = (Icon ?? FaTools) as any;
            return (
              <div
                key={name}
                className="flex flex-col items-center justify-center rounded-md border bg-white px-3 py-5 min-w-0 shadow-sm hover:shadow transition-shadow"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
                  {React.createElement(Comp, { size: 28 } as any)}
                </span>
                <span className="mt-2 text-center text-sm font-medium text-gray-800 leading-snug break-words whitespace-normal">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

