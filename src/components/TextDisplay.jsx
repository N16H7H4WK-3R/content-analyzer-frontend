import React from 'react';

const TextDisplay = ({ text }) => {
    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Extracted Text</h3>
            <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm text-gray-700">
                {text}
            </pre>
        </div>
    );
};

export default TextDisplay;