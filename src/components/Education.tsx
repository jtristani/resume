import React from 'react';

const Education: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold border-b-2 border-accent pb-2 mb-4">Education</h2>
    <ul className="text-gray-800 text-sm space-y-2">
      <li>
        <strong>Georgia Institute of Technology</strong> | 2019 – 2022
        <br />
        Master of Science in Computer Science, AI/ML | Human–Computer Interaction
      </li>
      <li>
        <strong>Polytechnic University of Puerto Rico</strong> | 2011 – 2016
        <br />
        Bachelor of Science in Computer Engineering
      </li>
    </ul>
  </section>
);

export default Education;
