import React, { useState } from 'react';

function App() {
  const [cv, setCv] = useState('');
  const handleUpload = () => {
    // Logic to handle CV upload
  };

  return (
    <div>
      <h1>CV Review AI</h1>
      <textarea
        value={cv}
        onChange={(e) => setCv(e.target.value)}
        placeholder="Paste your CV here..."
      />
      <button onClick={handleUpload}>Get Feedback</button>
    </div>
  );
}

export default App;