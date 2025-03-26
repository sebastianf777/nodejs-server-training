import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { Username } = req.query;
    console.log(`Received username: ${Username}`);
    res.status(200).json({ check: true, username: Username });
}