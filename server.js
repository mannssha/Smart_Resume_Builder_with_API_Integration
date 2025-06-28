
const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/generate-pdf", async (req, res) => {
  const { name, role, education, experience } = req.body;

  if (!name || !role || !education || !experience) {
    return res.status(400).send("Missing fields!");
  }

  const html = `
    <html>
    <head><style>body { font-family: Arial; }</style></head>
    <body>
      <h1>${name}</h1>
      <h2>Role: ${role}</h2>
      <h3>Education</h3><p>${education}</p>
      <h3>Experience</h3><p>${experience}</p>
    </body>
    </html>
  `;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(pdfBuffer);
  } catch (err) {
    console.error("Error generating PDF:", err);
    res.status(500).send("Error generating PDF");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
