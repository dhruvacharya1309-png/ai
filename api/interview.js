
// api/interview.js
// Vercel Serverless Function (Node.js runtime)

// ============================================================
// QUESTION BANK — 60 CURATED QUESTIONS
// ============================================================

export const QUESTION_BANK = {
  HR: {
    curator: "Nimit Ganatra",
    fresher: [
      { id: "HR-F01", question: "What is the most important responsibility of an HR professional?", thinkingWindowSeconds: 0 },
      { id: "HR-F02", question: "How would you handle a conflict between two employees?", thinkingWindowSeconds: 15 },
      { id: "HR-F03", question: "Whom would you hire: a highly skilled candidate with poor communication or a moderately skilled candidate with excellent communication?", thinkingWindowSeconds: 15 },
      { id: "HR-F04", question: "Why might a new employee resign within three months?", thinkingWindowSeconds: 15 },
      { id: "HR-F05", question: "How would you handle a manager asking for confidential salary information?", thinkingWindowSeconds: 0 },
      { id: "HR-F06", question: "How would you handle an employee who is frequently late but performs well?", thinkingWindowSeconds: 15 },
      { id: "HR-F07", question: "How would you recruit for a role you have never hired for before?", thinkingWindowSeconds: 15 },
      { id: "HR-F08", question: "How would you motivate an employee who feels unappreciated?", thinkingWindowSeconds: 15 },
      { id: "HR-F09", question: "What is employee attrition and how is it calculated?", thinkingWindowSeconds: 0 },
      { id: "HR-F10", question: "How would you handle a recruitment situation involving a close friend?", thinkingWindowSeconds: 15 }
    ],
    experienced: [
      { id: "HR-E01", question: "How would you reduce employee attrition that has increased from 12% to 24%?", thinkingWindowSeconds: 60 },
      { id: "HR-E02", question: "How would you investigate why 30% of new hires leave within six months?", thinkingWindowSeconds: 60 },
      { id: "HR-E03", question: "How would you handle a high-performing employee who repeatedly violates company policies?", thinkingWindowSeconds: 15 },
      { id: "HR-E04", question: "How would you recruit 40% more employees without increasing the recruitment budget?", thinkingWindowSeconds: 60 },
      { id: "HR-E05", question: "How would you resolve significant salary differences between employees in similar roles?", thinkingWindowSeconds: 60 },
      { id: "HR-E06", question: "How would you prove HR's contribution to business performance?", thinkingWindowSeconds: 15 },
      { id: "HR-E07", question: "How would you reduce employee costs by 15% without affecting critical operations?", thinkingWindowSeconds: 60 },
      { id: "HR-E08", question: "How would you identify why a department consistently misses performance targets?", thinkingWindowSeconds: 60 },
      { id: "HR-E09", question: "Why might employee engagement be high while productivity is declining?", thinkingWindowSeconds: 60 },
      { id: "HR-E10", question: "How would you handle a workplace misconduct allegation against a senior leader?", thinkingWindowSeconds: 60 }
    ]
  },

  Marketing: {
    curator: "Chetan Pathak",
    fresher: [
      { id: "MKT-F01", question: "What is the difference between marketing, advertising and sales?", thinkingWindowSeconds: 0 },
      { id: "MKT-F02", question: "How would you market a new skincare product to college students?", thinkingWindowSeconds: 15 },
      { id: "MKT-F03", question: "Which would you choose with a limited budget: Instagram, Google Ads or influencer marketing?", thinkingWindowSeconds: 15 },
      { id: "MKT-F04", question: "How would you increase customers for a new local café?", thinkingWindowSeconds: 15 },
      { id: "MKT-F05", question: "What are reach, impressions, engagement rate and conversion rate?", thinkingWindowSeconds: 0 },
      { id: "MKT-F06", question: "Why might customers visit an online store without purchasing?", thinkingWindowSeconds: 15 },
      { id: "MKT-F07", question: "How would you create a seven-day social media plan for a clothing brand?", thinkingWindowSeconds: 60 },
      { id: "MKT-F08", question: "How would you compete with a competitor selling the same product at a lower price?", thinkingWindowSeconds: 15 },
      { id: "MKT-F09", question: "Why might a campaign receive thousands of likes but generate very few sales?", thinkingWindowSeconds: 15 },
      { id: "MKT-F10", question: "How would you spend ₹10,000 to promote a new product?", thinkingWindowSeconds: 60 }
    ],
    experienced: [
      { id: "MKT-E01", question: "How would you evaluate the profitability of a campaign spending ₹5 lakh and generating ₹8 lakh in attributed revenue?", thinkingWindowSeconds: 60 },
      { id: "MKT-E02", question: "How would you reduce customer acquisition cost after a 35% increase?", thinkingWindowSeconds: 60 },
      { id: "MKT-E03", question: "How would you improve a marketing funnel with 100,000 visitors but only 100 customers?", thinkingWindowSeconds: 60 },
      { id: "MKT-E04", question: "How would you compete against a brand with a significantly larger marketing budget?", thinkingWindowSeconds: 60 },
      { id: "MKT-E05", question: "How would you improve lead quality when Google Ads generates irrelevant conversions?", thinkingWindowSeconds: 60 },
      { id: "MKT-E06", question: "How would you allocate a ₹20 lakh quarterly marketing budget?", thinkingWindowSeconds: 60 },
      { id: "MKT-E07", question: "How would you address a 25% decline in repeat purchases?", thinkingWindowSeconds: 60 },
      { id: "MKT-E08", question: "How would you measure marketing attribution when customers interact with multiple channels?", thinkingWindowSeconds: 60 },
      { id: "MKT-E09", question: "How would you double revenue in 12 months with only a 10% increase in marketing budget?", thinkingWindowSeconds: 60 },
      { id: "MKT-E10", question: "How would you handle a marketing campaign that receives significant negative public attention?", thinkingWindowSeconds: 60 }
    ]
  },

  Finance: {
    curator: "CA Bhargav Pandya",
    fresher: [
      { id: "FIN-F01", question: "What is the difference between revenue, profit and cash flow?", thinkingWindowSeconds: 0 },
      { id: "FIN-F02", question: "What are the three main financial statements?", thinkingWindowSeconds: 0 },
      { id: "FIN-F03", question: "What is working capital and how is it calculated?", thinkingWindowSeconds: 0 },
      { id: "FIN-F04", question: "A company earns ₹10 lakh in revenue and has ₹8 lakh in expenses. Calculate its profit and profit margin.", thinkingWindowSeconds: 15 },
      { id: "FIN-F05", question: "How does an unpaid customer invoice affect a company's financial statements?", thinkingWindowSeconds: 15 },
      { id: "FIN-F06", question: "How would you plan a quarterly departmental budget of ₹5 lakh?", thinkingWindowSeconds: 15 },
      { id: "FIN-F07", question: "What do the current ratio and debt-to-equity ratio indicate?", thinkingWindowSeconds: 0 },
      { id: "FIN-F08", question: "What is depreciation, and does it involve a direct cash outflow?", thinkingWindowSeconds: 0 },
      { id: "FIN-F09", question: "How would you investigate and control monthly budget overspending?", thinkingWindowSeconds: 15 },
      { id: "FIN-F10", question: "Would you recommend purchasing machinery for ₹10 lakh if it saves ₹3 lakh annually? Why?", thinkingWindowSeconds: 60 }
    ],
    experienced: [
      { id: "FIN-E01", question: "Why might a profitable company have negative operating cash flow despite 30% revenue growth?", thinkingWindowSeconds: 60 },
      { id: "FIN-E02", question: "How would you manage a working capital crisis involving rising receivables and inventory?", thinkingWindowSeconds: 60 },
      { id: "FIN-E03", question: "Why might EBITDA margin fall from 22% to 14% despite 20% revenue growth?", thinkingWindowSeconds: 60 },
      { id: "FIN-E04", question: "How would you evaluate a ₹50 lakh investment using NPV, IRR and payback period?", thinkingWindowSeconds: 90 },
      { id: "FIN-E05", question: "How would you investigate an 18% quarterly budget overrun?", thinkingWindowSeconds: 60 },
      { id: "FIN-E06", question: "How would you manage rising debt and interest expenses while profits are declining?", thinkingWindowSeconds: 60 },
      { id: "FIN-E07", question: "How would you prepare a reliable 12-month cash flow forecast?", thinkingWindowSeconds: 60 },
      { id: "FIN-E08", question: "How would you investigate duplicate vendor payments and missing invoices?", thinkingWindowSeconds: 60 },
      { id: "FIN-E09", question: "Would you use ₹1 crore for business expansion or debt reduction? Defend your decision.", thinkingWindowSeconds: 90 },
      { id: "FIN-E10", question: "Would you approve doubling the sales team at a SaaS company with 300% ARR growth, negative operating cash flow and only eight months of cash runway?", thinkingWindowSeconds: 90 }
    ]
  }
};

// ============================================================
// QUESTION BANK HELPERS
// ============================================================

function getQuestionBank() {
  return Object.entries(QUESTION_BANK).map(([domain, data]) => ({
    domain,
    curator: data.curator,
    fresher: data.fresher,
    experienced: data.experienced,
    totalQuestions: data.fresher.length + data.experienced.length
  }));
}

// ============================================================
// API CONFIGURATION
// ============================================================

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '25mb',
    },
  },
};

// ============================================================
// MAIN HANDLER
// ============================================================

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { action, payload } = req.body || {};

  try {
    switch (action) {
      case 'questionBank':
        return res.status(200).json({
          success: true,
          questionBank: getQuestionBank()
        });

      case 'transcribe':
        return await handleTranscribe(req, res, payload);

      case 'followup':
        return await handleSocraticFollowUp(req, res, payload);

      case 'report':
        return await handleExecutiveReport(req, res, payload);

      default:
        return res.status(400).json({
          error: `Unknown action: ${action}`
        });
    }
  } catch (err) {
    console.error('Serverless Error:', err);
    return res.status(500).json({
      error: err.message || 'Internal Server Error'
    });
  }
}

// ============================================================
// ACTION: TRANSCRIBE
// Groq Whisper — whisper-large-v3-turbo
// ============================================================

async function handleTranscribe(req, res, payload) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'GROQ_API_KEY is not configured in Vercel environment variables.'
    });
  }

  const { audioBase64, mimeType = 'audio/webm' } = payload || {};

  if (!audioBase64) {
    return res.status(400).json({
      error: 'audioBase64 payload is required'
    });
  }

  const audioBuffer = Buffer.from(audioBase64, 'base64');
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

  const domainPrompt =
    'CAC, LTV, CapEx, OpEx, EBITDA, Working Capital, KPIs, ROI, Attribution, DSO, DIO, DPO, Burn Multiple, Runway, Payback Period, Factoring';

  const fileHeader = [
    `--${boundary}`,
    `Content-Disposition: form-data; name="file"; filename="audio.webm"`,
    `Content-Type: ${mimeType}`,
    '', ''
  ].join('\r\n');

  const modelField = [
    `\r\n--${boundary}`,
    `Content-Disposition: form-data; name="model"`,
    '',
    'whisper-large-v3-turbo'
  ].join('\r\n');

  const promptField = [
    `\r\n--${boundary}`,
    `Content-Disposition: form-data; name="prompt"`,
    '',
    domainPrompt
  ].join('\r\n');

  const responseFormat = [
    `\r\n--${boundary}`,
    `Content-Disposition: form-data; name="response_format"`,
    '',
    'json'
  ].join('\r\n');

  const closing = `\r\n--${boundary}--\r\n`;

  const payloadBuffer = Buffer.concat([
    Buffer.from(fileHeader, 'utf-8'),
    audioBuffer,
    Buffer.from(modelField + promptField + responseFormat + closing, 'utf-8')
  ]);

  const groqRes = await fetch(
    'https://api.groq.com/openai/v1/audio/transcriptions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': `multipart/form-data; boundary=${boundary}`
      },
      body: payloadBuffer
    }
  );

  if (!groqRes.ok) {
    throw new Error(await groqRes.text());
  }

  const groqData = await groqRes.json();

  return res.status(200).json({
    text: groqData.text || ''
  });
}

// ============================================================
// ACTION: FOLLOW-UP
// Gemini Socratic Evaluation
// ============================================================

async function handleSocraticFollowUp(req, res, payload) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured in Vercel environment variables.'
    });
  }

  const {
    question,
    headEvaluationKey,
    candidateAnswer,
    domain,
    tier,
    locality
  } = payload || {};

  const systemInstruction = `You are an elite, no-nonsense Executive Placement Board Evaluator assessing a candidate for ${domain} (${tier}) in the ${locality || 'General'} placement circuit.

Analyze the candidate's spoken transcript against the HEAD'S EVALUATION KEY.

EVALUATION CRITERIA:
1. STRUCTURE MATCH: Did the candidate break down the problem cleanly as expected by the head?
2. MANDATORY METRICS: Check if the candidate mentioned the specific metrics specified by the head.
3. DISQUALIFIER CHECK: Check if the candidate fell into any instant disqualifiers or traps.

RULES:
1. ZERO FAKE PRAISE: Never use "Great answer!", "Excellent point!", or "Thank you for sharing!".
2. NATURAL OPERATOR PREAMBLE: Open naturally with phrases like "Understood.", "Fair enough, but let's push on that.", or "You touched on the surface, but missed the core financial lever."
3. SOCRATIC PROBE: Conclude with exactly ONE sharp follow-up probe (strictly 15 to 20 words).
4. Output format must be strictly JSON with:
   - "preamble": string
   - "critique": string (1 concise sentence)
   - "followUpProbe": string (15-20 words)
   - "substanceScore": number (1 to 10)
   - "metricsHit": string[]`;

  const userPrompt = `
QUESTION: "${question}"
HEAD EVALUATION KEY: ${JSON.stringify(headEvaluationKey || {})}
CANDIDATE SPOKEN TRANSCRIPT: "${candidateAnswer}"

Evaluate against the head's rubric and deliver the response in JSON.`;

  const geminiEndpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const geminiRes = await fetch(geminiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        { parts: [{ text: userPrompt }] }
      ],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    })
  });

  if (!geminiRes.ok) {
    throw new Error(await geminiRes.text());
  }

  const data = await geminiRes.json();

  const parsed = JSON.parse(
    data.candidates?.[0]?.content?.parts?.[0]?.text || '{}'
  );

  return res.status(200).json(parsed);
}

// ============================================================
// ACTION: REPORT
// Executive Diagnostic Dossier
// ============================================================

async function handleExecutiveReport(req, res, payload) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured in Vercel environment variables.'
    });
  }

  const {
    candidateProfile,
    rounds,
    totalFillers,
    avgWpm,
    historicalScores
  } = payload || {};

  const prompt = `You are the Lead Chair of an Executive Campus Placement Board.

Compile a candid Executive Diagnostic Dossier and Longitudinal Improvement Audit for:

Candidate: ${candidateProfile.name} (${candidateProfile.email}) | Target: ${candidateProfile.domain} (${candidateProfile.tier}) in ${candidateProfile.locality}

Current Session:
Average WPM: ${avgWpm}
Verbal Fillers: ${totalFillers}

Historical Scores Across Prior Sessions:
${JSON.stringify(historicalScores || [])}

Current Rounds Telemetry:
${JSON.stringify(rounds, null, 2)}

Provide JSON matching:

{
  "readinessTier": "Tier 1: High Conviction Hire" | "Tier 2: Conditional Hire" | "Tier 3: Unprepared for Final Board",
  "executiveSummary": "2 candid paragraphs synthesizing operational maturity, framework structure, and whether they sound like an operator or an academic student.",
  "strengths": ["string", "string"],
  "vulnerabilities": ["string", "string"],
  "longitudinalProgress": "A 2-3 sentence analysis of their improvement trajectory comparing past sessions to today."
}`;

  const geminiEndpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const geminiRes = await fetch(geminiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        { parts: [{ text: prompt }] }
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    })
  });

  if (!geminiRes.ok) {
    throw new Error(await geminiRes.text());
  }

  const data = await geminiRes.json();

  return res.status(200).json(
    JSON.parse(data.candidates?.[0]?.content?.parts?.[0]?.text || '{}')
  );
}
