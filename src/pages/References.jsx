import React from "react";
import Card from "../components/Card";

const References = ({ referenceData }) => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold mb-8" style={{ color: "black" }}>
        Skills
      </h1>

      {referenceData.map((item, index) => (
        <Card key={index} header={`Reference ${index + 1}`} title={item.name}>
          <div className="space-y-4">
            <p className="text-gray-600">{item.description}</p>

            <ul className="list-disc list-inside text-gray-600">
              <li>
                Email: <a href={`mailto:${item.email}`}>{item.email}</a>
              </li>
              <li>
                Phone: <a href={`tel:${item.phone}`}>{item.phone}</a>
              </li>
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default References;
