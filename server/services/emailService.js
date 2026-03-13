const { Anthropic } = require('@anthropic-ai/sdk');

class EmailService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || 'dummy-key-for-dev',
    });
  }

  /**
   * Simulated Gmail Connect
   * In production, this would use googleapis package and OAuth2 client.
   */
  async connectGmail(authCode) {
    console.log(`Connecting to Gmail with auth code: ${authCode}`);
    // Simulate token exchange
    return {
      accessToken: 'mock_access_token',
      refreshToken: 'mock_refresh_token',
      expiresIn: 3600
    };
  }

  /**
   * Simulated Email Sync
   * Fetches recent emails, filters for attachments that look like resumes,
   * parses them, and ingests them into the DB.
   */
  async syncEmails(userId) {
    console.log(`Syncing emails for user: ${userId}`);
    // Simulate fetching emails and parsing attachments
    const simulatedIngestion = [
      { name: 'John Doe', source: 'Gmail', status: 'Parsed' },
      { name: 'Jane Smith', source: 'Gmail', status: 'Parsed' }
    ];
    
    return {
      status: 'success',
      syncedCount: simulatedIngestion.length,
      candidates: simulatedIngestion
    };
  }

  /**
   * Generate Personalized Email using Claude AI
   * Generates tailored templates based on AI insights.
   */
  async sendCandidateEmail(to, templateType, candidateData) {
    console.log(`Preparing to send ${templateType} email to ${to}`);
    
    try {
      const systemPrompt = `You are an expert HR recruiter assistant writing highly professional emails.
Generate a personalized email based on the candidate's data and the template requirement: ${templateType}.
Adhere strictly to professional conventions. Do NOT include placeholder brackets for the user to fill out if you can infer the data.
Sign off as "The TalentOS Team".
Return ONLY the raw email text.`;

      const promptContext = `Candidate Name: ${candidateData.name}
Role Applied: ${candidateData.role}
Key Skills: ${candidateData.skills?.join(', ')}
Template Required: ${templateType}
(Context: For interviews, propose standard next steps. For offers, congratulate them. For rejections, be polite and encourage future applications.)`;

      if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_anthropic_api_key_here') {
        const mockDraft = `Dear ${candidateData.name},\n\nThank you for applying to the ${candidateData.role} position. We have received your application and are currently reviewing your profile.\n\nBest regards,\nThe TalentOS Team`;
        return { status: 'mock_sent', draft: mockDraft };
      }

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        system: systemPrompt,
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: promptContext
        }]
      });

      const draft = response.content[0].text;
      
      // In production, instantiate nodemailer/SendGrid and send `draft` to `to`.
      console.log(`Simulating sending email:\n\n${draft}`);
      
      return { status: 'sent', draft };
    } catch (error) {
      console.error('Email generation error:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();
