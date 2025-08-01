import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import resumeRoutes from './routes/resume.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/resume', resumeRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});


