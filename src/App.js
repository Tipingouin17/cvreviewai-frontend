import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle file submission goes here
  };

  return (
    <div>
      <h1>CVReviewAI</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf, .doc, .docx" />
        <button type="submit">Upload CV</button>
      </form>
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
}

export default App;