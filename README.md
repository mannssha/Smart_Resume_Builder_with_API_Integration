# resume_maker
A simple and elegant front-end tool to create professional resumes. Enter your details, preview in real-time, and export as a beautifully styled PDF
# 📝 Resume & Cover Letter Generator

A clean, responsive front-end with gpt-3.5 integration application to create professional resumes and cover letters. Users can input their details in a form and generate a beautifully styled PDF resume with a single click.

---

## ✨ Features


-  Real-time form input and resume preview
-  One-click export to high-quality PDF
-  Visually appealing, professional layout with modern CSS
-  Auto-generated summary based on user input
-  Clean UI and easy navigation



### 💻 Tech Stack:

* **Frontend**:

  * HTML5, CSS3, JavaScript (Vanilla JS)
  * Responsive UI design with modern CSS

* **AI Integration**:

  * OpenAI GPT-3.5/4 API for generating resume content and cover letter

* **PDF Export**:

  * `html2pdf.js` JavaScript library for client-side PDF generation

* **No Backend**:

  * Entirely runs in the browser (frontend-only)

---

### ▶️ How to Run:

1. **Download or Clone the Project**

   * Unzip the project folder or clone from your Git repository

2. **Set Up Your OpenAI API Key**

   * Open the `script.js` file
   * Replace the line:

     ```javascript
     "Authorization": "Bearer sk-YOUR_OPENAI_API_KEY"
     ```

     with your actual API key from [https://platform.openai.com](https://platform.openai.com)

3. **Open the App**

   * Double-click `index.html` or open it in any modern web browser

4. **Use the Form**

   * Enter your personal details (name, email, education, etc.)
   * Click **"Generate"** to fetch resume + cover letter from OpenAI
   * Review the generated content on screen

5. **Download the PDF**

   * Click **"Download PDF"** to save your resume and cover letter locally







