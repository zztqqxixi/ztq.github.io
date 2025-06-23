// src/components/FunctionCard.js

import React from 'react';

const FunctionCard = ({ title, functions }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>函数名</th>
            <th>说明</th>
            <th>示例</th>
          </tr>
        </thead>
        <tbody>
          {functions.map((fn, index) => (
            <tr key={index}>
              <td><code>{fn.name}</code></td>
              <td>{fn.desc}</td>
              <td><pre>{fn.example}</pre></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FunctionCard;