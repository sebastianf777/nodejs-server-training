import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // -- 2) Manejar la preflight (OPTIONS). Si no haces esto,
    //    el navegador bloquea la petición POST antes de llegar aquí.
    if (req.method === 'OPTIONS') {
        // Retornamos 200 sin más, para que el navegador "autorice" la petición real.
        return res.status(200).end();
    }

    // -- 3) Asegurarnos de que solo atendemos POST en este endpoint
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, password } = req.body;
    console.log(`Authenticating user: ${username}`);

    if (password === "777Holis") {
        const dummyToken = "abc123";
        res.status(200).json({ token: dummyToken });
    } else {
        console.log(`Invalid credentials`);
        res.status(401).json({ error: 'Invalid credentials' });
    }
}
