import React from 'react';

const AnalysisResult = ({ analysis }) => {
    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
            <p className="text-sm text-gray-700">
                <strong>Sentiment:</strong> {analysis.sentiment}
            </p>
            <p className="text-sm text-gray-700 mt-2">
                <strong>Keywords:</strong> {analysis.keywords.join(', ')}
            </p>
        </div>
    );
};

export default AnalysisResult;