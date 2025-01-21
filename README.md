# Content Analyzer Frontend

This is the frontend of the **Content Analyzer** project, which allows users to upload PDF and image files for text extraction and AI-driven content analysis.

## Project Overview

1. **User Uploads a File:**  
   - Supports drag-and-drop or file selection.
   - Sends the file to the backend API.

2. **Backend Processing:**  
   - PDFs: Extracted using `PyPDF2` or `pdfplumber`.  
   - Images: Text extracted via `Tesseract OCR`.  
   - AI/ML service analyzes engagement metrics (sentiment, keywords).

3. **AI/ML Analysis:**  
   - Evaluates text for sentiment and keyword insights.  
   - Provides suggestions for content improvement.

4. **Display Results:**  
   - Extracted text and suggestions are displayed to the user.  
   - Loading states and error handling included.

---

## Live Demo

Check out the live project: [Content Analyzer](https://content-analyzer-unthinkable.netlify.app/)

---

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **API Handling:** Axios
- **Deployment:** Netlify

## Usage
- Open the app in your browser: https://content-analyzer-unthinkable.netlify.app/
- Drag and drop or select a file.
- View extracted text and AI-generated suggestions.

## Features
- **User-Friendly Interface:** Intuitive drag-and-drop file upload.
- **Responsive Design:** Fully responsive for mobile and desktop.
- **Loading & Error Handling:** Smooth user experience.
- **API Communication:** Seamless interaction with backend.
- **Performance Optimized:** Leveraging Vite for fast builds.

## Contact
For inquiries or support, reach out to:

- Aryan Gupta
- Email: aryan014kumar@gmail.com
- GitHub: [N16H7H4WK-3R](https://github.com/N16H7H4WK-3R)