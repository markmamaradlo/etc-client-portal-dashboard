* {
  box-sizing: border-box;
}

:root {
  --bg: #eef3f7;
  --panel: #f6f8fb;
  --card: #ffffff;
  --nav-bg: #0d3e6e;
  --nav-active: rgba(255, 255, 255, 0.12);
  --border: #dfe6ee;
  --text: #1d2d3d;
  --muted: #75879a;
  --cyan: #5cc7d6;
  --teal: #7ed0c0;
  --green: #4ec89e;
  --purple: #b39ce8;
  --purple-soft: #d9cdf5;
  --cyan-soft: #d6f1f9;
  --green-soft: #d9f4ea;
  --warning: #f5b344;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

button {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
  background: #edf3f6;
}

.sidebar {
  width: 220px;
  background: linear-gradient(180deg, #0d3b68 0%, #0d2d5a 100%);
  color: #edf6ff;
  padding: 16px 14px 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px 18px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.09);
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.08em;
  color: white;
}

.brand-copy {
  font-weight: 700;
  line-height: 1.1;
  font-size: 1.1rem;
}

.nav {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  font-weight: 600;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.nav-icon {
  width: 18px;
  display: inline-flex;
  justify-content: center;
}

.content {
  flex: 1;
  padding: 0 18px 18px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 10px;
  background: linear-gradient(180deg, #0c3560 0%, #0d3d6d 100%);
  border-radius: 0 0 18px 18px;
  padding-inline: 18px;
  min-height: 82px;
  margin-bottom: 18px;
}

.topbar-filter {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.82);
  min-width: 178px;
  height: 42px;
  padding: 0 14px 0 10px;
  border-radius: 10px;
  background: rgba(255,255,255,0.08);
}

.filter-label {
  font-size: 0.76rem;
  color: rgba(255,255,255,0.72);
  display: inline-flex;
}

.filter-value {
  font-weight: 600;
  color: #fff;
  display: inline-flex;
}

.topbar-meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.date-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 9px 12px;
  color: rgba(255,255,255,0.85);
}

.date-chip strong {
  color: #fff;
  font-weight: 600;
}

.mini-icon {
  display: inline-block;
  font-size: 0.9rem;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.14);
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
}

.section-block {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 18px 14px;
  margin-bottom: 18px;
  box-shadow: 0 4px 14px rgba(19, 41, 85, 0.03);
}

.section-heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-heading-row h2,
.section-heading-row h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1b2d3f;
}

.section-subtitle {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.85rem;
}

.section-subtitle.inline {
  margin-top: 0;
}

.kpi-grid {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}

.metric-grid-5 {
  grid-template-columns: repeat(5, minmax(180px, 1fr));
}

.metric-grid-3 {
  grid-template-columns: repeat(3, minmax(190px, 1fr));
}

.kpi-card {
  background: #f7f9fb;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px 14px 12px;
  min-height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.kpi-card.compact {
  min-height: 110px;
}

.kpi-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.kpi-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid rgba(19, 41, 85, 0.08);
}

.kpi-icon.cyan { background: var(--cyan-soft); color: #0d7f9b; }
.kpi-icon.teal { background: #ddf6f5; color: #0e8b7e; }
.kpi-icon.green { background: var(--green-soft); color: #0a8a67; }
.kpi-icon.purple { background: var(--purple-soft); color: #5b54a8; }
.kpi-icon.small { width: 24px; height: 24px; font-size: 0.8rem; }

.kpi-label {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 600;
  line-height: 1.2;
}

.kpi-value {
  margin-top: 8px;
  font-size: clamp(2rem, 2vw, 2.2rem);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: #20344d;
}

.kpi-value.large {
  font-size: clamp(1.8rem, 1.8vw, 2.3rem);
}

.trend {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #419f74;
}

.trend.neutral {
  color: var(--muted);
}

.trend span {
  color: var(--muted);
  font-weight: 500;
}

.attendance-box {
  padding-top: 12px;
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.slim {
  margin-bottom: 0;
}

.date-picker {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.55);
  color: var(--muted);
  font-size: 0.8rem;
}

.attendance-summary {
  margin-top: 12px;
  color: var(--muted);
  font-size: 0.85rem;
}

.trends-box {
  padding-top: 12px;
}

.trend-grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
}

.trend-card {
  background: #f7f9fb;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 12px 16px;
}

.trend-select {
  color: var(--muted);
  font-weight: 500;
  margin-bottom: 8px;
}

.mini-chart {
  height: 150px;
  display: flex;
  align-items: end;
  gap: 6px;
  padding-top: 8px;
}

.bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  min-height: 12px;
}

.chart-legend {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--muted);
  white-space: nowrap;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.loader {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2a4c70;
}

@media (max-width: 1180px) {
  .metric-grid-5,
  .metric-grid-3,
  .trend-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 860px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .metric-grid-5,
  .metric-grid-3,
  .trend-grid {
    grid-template-columns: 1fr;
  }
}
