const fs = require('fs');
const pdfParse = require('pdf-parse');
const { Anthropic } = require('@anthropic-ai/sdk');

class ResumeParser {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || 'dummy-key-for-dev',
    });
  }

  async parseResume(pdfBuffer) {
    try {
      // 1. Extract raw text from PDF
      const pdfData = await pdfParse(pdfBuffer);
      const rawText = pdfData.text;

      console.log(`Extracted ${rawText.length} characters from PDF.`);

      if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_anthropic_api_key_here') {
         console.log("No valid Anthropic connection. Returning mock parsed resume for demo.");
         return this._mockResponse(rawText);
      }

      // 2. Send structured prompt to Claude
      const systemPrompt = `You are an expert HR AI parser. You will read raw text extracted from a resume PDF and convert it into a highly structured JSON format.
      
Return ONLY a valid JSON object matching this exact structure (do not include markdown wrapping or extra text):
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "location": "string",
  "currentRole": "string",
  "company": "string",
  "experience": [{"role": "string", "company": "string", "duration": "string", "highlights": ["string"]}],
  "education": [{"degree": "string", "school": "string", "year": "string"}],
  "skills": ["string"],
  "projects": ["string"],
  "certifications": ["string"],
  "summary": "string"
}`;

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        system: systemPrompt,
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: `Here is the raw text from the resume:\n\n<resume_text>\n${rawText}\n</resume_text>\n\nParse this into the requested JSON format.`
        }]
      });

      const responseText = response.content[0].text;
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {
         let parsedData = JSON.parse(jsonMatch[0]);
         parsedData.confidenceScore = 0.95; // In a real app, you could ask Claude to supply a confidence rating
         return parsedData;
      }
      
      throw new Error("Failed to extract valid JSON from Claude response.");

    } catch (error) {
      console.error("Error parsing resume:", error);
      throw error;
    }
  }

  // Fallback for development/hackathon visual without API key
  _mockResponse(rawText) {
     return {
       name: "Dev Mode Placeholder",
       email: "candidate@mock.com",
       phone: "+1 555-000-0000",
       location: "Remote",
       currentRole: "Software Engineer",
       company: "Uploaded Inc",
       experience: [
         { role: "Software Engineer", company: "Uploaded Inc", duration: "2021-Present", highlights: ["Built backend APIs"] }
       ],
       education: [
         { degree: "B.S. Computer Science", school: "Mock University", year: "2020" }
       ],
       skills: ["JavaScript", "React", "Node.js", "SQL"],
       projects: [],
       certifications: [],
       summary: "This is a simulated parse result because no Anthropic API key was found in the environment.",
       confidenceScore: 0.99
     };
  }
}

module.exports = new ResumeParser();
