import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    // En Vercel los parámetros se obtienen de req.query
    const { myUsername } = req.query;
    console.log(`Received username: ${myUsername}`);
    res.status(200).json({ check: true });
}