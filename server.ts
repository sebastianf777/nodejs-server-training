import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/checkusername/:myUsername', (req: Request, res: Response) => {
    const { myUsername } = req.params;
    console.log(`Received username: ${myUsername}`);
    res.json({ check: true });
});

app.post('/api/checkAuth', (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(`Authenticating user: ${username}`);
    const dummyToken = "abc123";
    res.json({ token: dummyToken });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
