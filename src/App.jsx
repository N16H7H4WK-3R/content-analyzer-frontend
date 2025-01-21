import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import TextDisplay from './components/TextDisplay';
import AnalysisResult from './components/AnalysisResult';

const App = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleUploadSuccess = (response) => {
    setText(response.text);
    setAnalysis(response.analysis);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Social Media Content Analyzer
        </h1>
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        {text && <TextDisplay text={text} />}
        {analysis && <AnalysisResult analysis={analysis} />}
      </div>
    </div>
  );
};

export default App;