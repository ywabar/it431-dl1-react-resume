import React from "react";
import Card from "../components/Card";

const Skills = ({ skillsData }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-8" style={{ color: "black" }}>
        Skills
      </h1>

      {skillsData.map((item, index) => (
        <Card key={index} header={`Skill ${index + 1}`} title={item.skillname}>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600">
              <li>Years of Experience: {item.yearsOfExperience}</li>
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
