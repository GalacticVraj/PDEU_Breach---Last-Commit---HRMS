require('dotenv').config();
console.log('GROQ_API_KEY present:', !!process.env.GROQ_API_KEY);
if (process.env.GROQ_API_KEY) {
  console.log('Key starts with:', process.env.GROQ_API_KEY.substring(0, 10));
}
