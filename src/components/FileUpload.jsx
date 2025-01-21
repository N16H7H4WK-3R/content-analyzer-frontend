import React, { useState } from 'react';
import { uploadFile } from '../utils/api';

const FileUpload = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        validateFile(selectedFile);
    };

    // Handle file drop
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        validateFile(droppedFile);
    };

    // Validate file type and size
    const validateFile = (file) => {
        if (!file) return;

        const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.type)) {
            setError('Invalid file type. Please upload a PDF, PNG, or JPG file.');
            return;
        }

        if (file.size > maxSize) {
            setError('File size too large. Maximum size is 5MB.');
            return;
        }

        setError('');
        setFile(file);
    };

    // Handle file upload
    const handleSubmit = async () => {
        if (!file) return;

        setIsLoading(true);
        try {
            const response = await uploadFile(file);
            onUploadSuccess(response);
        } catch (error) {
            setError('Upload failed. Please try again.');
            console.error('Upload failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <div
                className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                    <p className="text-gray-600">
                        Drag and drop a file here or{' '}
                        <span className="text-blue-500 underline">click to browse</span>
                    </p>
                </label>
                {file && (
                    <p className="mt-4 text-sm text-gray-600">
                        Selected file: <span className="font-medium">{file.name}</span>
                    </p>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
            )}

            {/* Upload Button */}
            <button
                onClick={handleSubmit}
                disabled={isLoading || !file}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <svg
                            className="animate-spin h-5 w-5 mr-3 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Uploading...
                    </div>
                ) : (
                    'Upload'
                )}
            </button>
        </div>
    );
};

export default FileUpload;