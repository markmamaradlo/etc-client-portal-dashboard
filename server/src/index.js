import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
import express from 'express';
import cors from 'cors';

const { Pool } = pg;
const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const seedData = {
  overview: [
    { key: 'totalHoursWorked', label: 'Total Hours Worked', value: 4360, delta: 2.3, deltaDirection: 'up', comparison: 'vs. last month', icon: 'clock', accent: 'cyan' },
    { key: 'indirectHours', label: 'Indirect Hours %', value: 0.0, delta: 0, deltaDirection: 'neutral', comparison: 'vs. last month', icon: 'percent', accent: 'teal' },
    { key: 'closedCases', label: 'Closed Cases', value: 20734, delta: 1.8, deltaDirection: 'up', comparison: 'vs. last month', icon: 'folder', accent: 'green' },
    { key: 'successfulCompleted', label: 'Successfully Completed', value: 14351, delta: 2.6, deltaDirection: 'up', comparison: 'vs. last month', icon: 'check', accent: 'purple' },
    { key: 'successfulCases', label: 'Successful Cases / Agent / Day', value: 27.7, delta: 4.2, deltaDirection: 'up', comparison: 'vs. last month', icon: 'users', accent: 'purple' }
  ],
  attendance: {
    header: 'Attendance Tracker',
    summary: 'Work hours, OT solicited and indirect hours % for the selected day',
    metrics: [
      { label: 'Expected Work Hours', value: 512, delta: 1.2, deltaDirection: 'up', comparison: 'vs. yesterday', icon: 'clock', accent: 'cyan' },
      { label: 'OT Hours Solicited', value: '48 hrs', delta: 0, deltaDirection: 'neutral', comparison: '', icon: 'ot', accent: 'teal' },
      { label: 'Indirect Hours %', value: '0.0%', delta: 0, deltaDirection: 'neutral', comparison: '', icon: 'percent', accent: 'cyan' }
    ]
  },
  daily: {
    header: 'Running numbers for the day',
    subtitle: 'Key operational metrics for the selected day (Sep 11, 2025)',
    metrics: [
      { key: 'dayHoursWorked', label: 'Total Hours Worked', value: 512, delta: 1.2, deltaDirection: 'up', comparison: 'vs. yesterday', icon: 'clock', accent: 'cyan' },
      { key: 'dayIndirect', label: 'Indirect Hours %', value: '0.8%', delta: 0, deltaDirection: 'neutral', comparison: 'vs. yesterday', icon: 'percent', accent: 'teal' },
      { key: 'dayClosedCases', label: 'Closed Cases', value: 892, delta: 2.4, deltaDirection: 'up', comparison: 'vs. yesterday', icon: 'folder', accent: 'green' },
      { key: 'daySuccessful', label: 'Successfully Completed', value: 623, delta: 1.9, deltaDirection: 'up', comparison: 'vs. yesterday', icon: 'check', accent: 'purple' },
      { key: 'daySuccessCases', label: 'Successful Cases / Agent / Day', value: 28.3, delta: 3.1, deltaDirection: 'up', comparison: 'vs. yesterday', icon: 'users', accent: 'purple' }
    ]
  },
  trends: {
    header: 'Performance Trends',
    subtitle: 'View historical performance for key metrics',
    series: [
      {
        key: 'totalHoursWorked',
        label: 'Total Hours Worked',
        color: '#5a9ef8',
        data: [850, 920, 780, 960, 1040, 860, 900, 920, 860, 1100, 910]
      },
      {
        key: 'indirectHours',
        label: 'Indirect Hours %',
        color: '#30b7a7',
        data: [8, 9, 7, 11, 10, 6, 8, 9, 7, 6, 8]
      },
      {
        key: 'closedCases',
        label: 'Closed Cases',
        color: '#a58be8',
        data: [450, 500, 420, 560, 620, 710, 590, 630, 670, 610, 680]
      },
      {
        key: 'successfulCompleted',
        label: 'Successfully Completed',
        color: '#67d0b5',
        data: [270, 310, 330, 290, 360, 400, 340, 410, 390, 420, 430]
      },
      {
        key: 'successfulCases',
        label: 'Successful Cases / Agent / Day',
        color: '#d9c1ff',
        data: [22, 25, 23, 26, 28, 29, 30, 31, 28, 29, 31]
      }
    ]
  }
};

async function ensureDatabase() {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS dashboard_summary (
        id SERIAL PRIMARY KEY,
        payload JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    const result = await client.query('SELECT COUNT(*)::int AS count FROM dashboard_summary;');
    if (result.rows[0].count === 0) {
      await client.query('INSERT INTO dashboard_summary (payload) VALUES ($1);', [JSON.stringify(seedData)]);
    }
  } finally {
    client.release();
  }
}

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1;');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/api/metrics', async (_req, res) => {
  try {
    const result = await pool.query('SELECT payload FROM dashboard_summary ORDER BY id DESC LIMIT 1;');
    if (result.rows.length === 0) {
      return res.json(seedData);
    }

    return res.json(result.rows[0].payload);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

async function startServer() {
  try {
    await ensureDatabase();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
