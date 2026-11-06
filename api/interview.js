// api/interview.js - Executive Placement Backend Engine (Node.js ESM Serverless Function)

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '25mb',
    },
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { action, payload } = req.body || {};

  try {
    switch (action) {
      case 'transcribe':
        return await handleTranscribe(req, res, payload);
      case 'followup':
        return await handleSocraticFollowUp(req, res, payload);
      case 'report':
        return await handleExecutiveReport(req, res, payload);
      default:
        return res.status(400).json({ error: `Unknown action: ${action}` });
    }
  } catch (err) {
    console.error('Serverless Error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}

/**
 * ACTION: 'transcribe'
 * Dispatches audio buffer to Groq Whisper (whisper-large-v3-turbo)
 */
async function handleTranscribe(req, res, payload) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY missing in Vercel environment' });

  const { audioBase64, mimeType = 'audio/webm' } = payload || {};
  if (!audioBase64) return res.status(400).json({ error: 'audioBase64 payload required' });

  const audioBuffer = Buffer.from(audioBase64, 'base64');
  const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
  const domainPrompt = 'CAC, LTV, CapEx, OpEx, EBITDA, Working Capital, KPIs, ROI, Attribution, DSO, DIO, DPO, Burn Multiple, Runway, Payback Period, Factoring';

  const fileHeader = [
    `--${boundary}`,
    `Content-Disposition: form-data; name="file"; filename="audio.webm"`,
    `Content-Type: ${mimeType}`,
    '', '',
  ].join('\r\n');

  const modelField = [`\r\n--${boundary}`, `Content-Disposition: form-data; name="model"`, '', 'whisper-large-v3-turbo'].join('\r\n');
  const promptField = [`\r\n--${boundary}`, `Content-Disposition: form-data; name="prompt"`, '', domainPrompt].join('\r\n');
  const responseFormat = [`\r\n--${boundary}`, `Content-Disposition: form-data; name="response_format"`, '', 'json'].join('\r\n');
  const closing = `\r\n--${boundary}--\r\n`;

  const payloadBuffer = Buffer.concat([
    Buffer.from(fileHeader, 'utf-8'),
    audioBuffer,
    Buffer.from(modelField + promptField + responseFormat + closing, 'utf-8'),
  ]);

  const groqRes = await fetch('[suspicious link removed]', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
    },
    body: payloadBuffer,
  });

  if (!groqRes.ok) throw new Error(await groqRes.text());
  const groqData = await groqRes.json();
  return res.status(200).json({ text: groqData.text || '' });
}

/**
 * ACTION: 'followup'
 * Evaluates semantic depth against head's rubric & generates unscripted Socratic probe
 */
async function handleSocraticFollowUp(req, res, payload) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY missing in Vercel environment' });

  const { question, headEvaluationKey, candidateAnswer, domain, tier, locality } = payload || {};

  const systemInstruction = `You are an elite, no-nonsense Executive Placement Board Evaluator assessing a candidate for ${domain} (${tier}) in ${locality || 'General'}.
Analyze the candidate's spoken transcript against the HEAD'S EVALUATION KEY.

EVALUATION CRITERIA:
1. METRIC DENSITY: Did the candidate cite concrete KPIs, formulas, or financial levers?
2. CURATOR INTENT: Did they address the core hidden objective of the question?
3. RED FLAGS: Did they make dealbreaker assumptions or conceptual errors?

QUALITY STRATEGY:
- Score 7-10 (Strong): Stress-test reasoning, risk mitigation, and trade-offs under pressure.
- Score 4-6 (Vague): Skeptical stance, demand specific numbers, KPIs, and concrete execution steps.
- Score 1-3 (Weak/Contradictory): Identify conflicting statements and demand reconciliation or conceptual pushback.

STRICT MANDATORY RULES:
1. ZERO FAKE PRAISE: NEVER say "Great answer!", "Excellent point!", "Good job!", or "Thank you for sharing!".
2. NATURAL C-SUITE PREAMBLE: Open naturally with phrases like "Understood.", "Fair enough, but let's push on that.", or "You touched on the surface, but missed the core financial lever."
3. EXACTLY ONE SOCRATIC FOLLOW-UP PROBE: Conclude with strictly ONE sentence containing 15 to 20 words.

Return ONLY raw JSON with:
{
  "substanceScore": number (1-10),
  "preamble": "string",
  "critique": "string",
  "followUpProbe": "string (strictly 1 sentence, 15 to 20 words)",
  "metricsHit": ["string"],
  "redFlags": ["string"]
}`;

  const userPrompt = `
QUESTION: "${question}"
HEAD EVALUATION KEY: ${JSON.stringify(headEvaluationKey || {})}
CANDIDATE SPOKEN TRANSCRIPT: "${candidateAnswer}"

Evaluate against the head's rubric and deliver response in JSON.`;

  const geminiEndpoint = `[suspicious link removed]{apiKey}`;

  const geminiRes = await fetch(geminiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: userPrompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
      generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
    }),
  });

  if (!geminiRes.ok) throw new Error(await geminiRes.text());
  const data = await geminiRes.json();
  const parsed = JSON.parse(data.candidates?.[0]?.content?.parts?.[0]?.text || '{}');
  return res.status(200).json(parsed);
}

/**
 * ACTION: 'report'
 * Synthesizes final committee dossier and longitudinal progress
 */
async function handleExecutiveReport(req, res, payload) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY missing in Vercel environment' });

  const { candidateProfile, rounds, totalFillers, avgWpm, historicalScores } = payload || {};

  const prompt = `You are the Lead Chair of an Executive Campus Placement Board.
Compile a candid Executive Diagnostic Dossier and Longitudinal Improvement Audit for:
Candidate: ${candidateProfile.name} (${candidateProfile.email}) | Target: ${candidateProfile.domain} (${candidateProfile.tier}) in ${candidateProfile.locality}
Current Session Telemetry: Average WPM: ${avgWpm}, Verbal Fillers: ${totalFillers}
Historical Session Scores: ${JSON.stringify(historicalScores || [])}
Rounds Data: ${JSON.stringify(rounds, null, 2)}

Calculate overall weighted score across 4 dimensions:
- Commercial & Operational Substance: 50%
- Socratic Agility: 25%
- Communication Clarity: 15%
- Verbal Composure: 10%

Classify into EXACTLY one tier:
- "Tier 1: High-Conviction Placement Candidate" (8.0 to 10.0)
- "Tier 2: Conditional Candidate" (5.0 to 7.9)
- "Tier 3: Unprepared for Final Board" (Below 5.0)

Provide raw JSON matching:
{
  "readinessTier": "string",
  "overallScore": number (1.0 to 10.0),
  "scores": {
    "substance": number (1-100),
    "agility": number (1-100),
    "clarity": number (1-100),
    "composure": number (1-100)
  },
  "executiveSummary": "2 candid paragraphs synthesizing operational maturity, framework structure, and whether they sound like a real operator or an academic student.",
  "strengths": ["string", "string"],
  "vulnerabilities": ["string", "string"],
  "longitudinalProgress": "A 2-3 sentence analysis of their trajectory across sessions."
}`;

  const geminiEndpoint = `[suspicious link removed]{apiKey}`;

  const geminiRes = await fetch(geminiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
    }),
  });

  if (!geminiRes.ok) throw new Error(await geminiRes.text());
  const data = await geminiRes.json();
  return res.status(200).json(JSON.parse(data.candidates?.[0]?.content?.parts?.[0]?.text || '{}'));
}
