:root {
  --bg: #edf3f7;
  --panel: #f4f7fb;
  --card: #f9fafc;
  --card-strong: #ffffff;
  --line: #dfe6ed;
  --text: #21324a;
  --muted: #75879a;
  --nav: #0e3a65;
  --nav-2: #0d2f57;
  --cyan: #67d4e0;
  --teal: #78d7c4;
  --green: #62d4ab;
  --purple: #c4a9ec;
  --blue: #5a9df8;
  --shadow: rgba(11, 26, 44, 0.08);
}

* {
  box-sizing: border-box;
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
  background: var(--bg);
}

.sidebar {
  width: 225px;
  background: linear-gradient(180deg, var(--nav) 0%, var(--nav-2) 100%);
  color: white;
  padding: 16px 14px 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 6px 18px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 2.1rem;
  letter-spacing: -0.1em;
  color: white;
}

.brand-copy {
  line-height: 1.16;
  font-weight: 700;
  font-size: 1.08rem;
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.nav-item {
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-icon {
  display: inline-flex;
  justify-content: center;
  min-width: 18px;
  font-size: 1.05rem;
}

.content {
  flex: 1;
  padding: 0 18px 18px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  background: linear-gradient(180deg, var(--nav) 0%, #0d3b67 100%);
  border-radius: 0 0 18px 18px;
  padding: 12px 18px;
  margin-bottom: 20px;
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
  min-height: 42px;
  padding: 0 12px 0 10px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.72);
}

.filter-label {
  font-size: 0.74rem;
  font-weight: 500;
  white-space: nowrap;
}

.filter-value {
  color: white;
  font-size: 0.98rem;
  font-weight: 600;
  white-space: nowrap;
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
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  font-size: 0.8rem;
}

.date-chip strong {
  color: white;
}

.mini-icon {
  font-size: 0.9rem;
}

.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  font-weight: 700;
}

.section-block {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 18px 14px;
  margin-bottom: 18px;
  box-shadow: 0 4px 14px var(--shadow);
}

.section-heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-heading-row h2,
.section-heading-row h3 {
  margin: 0;
  color: var(--text);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section-heading-row h2 {
  font-size: 1.05rem;
}

.section-heading-row h3 {
  font-size: 1.02rem;
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
  grid-template-columns: repeat(5, minmax(170px, 1fr));
}

.metric-grid-3 {
  grid-template-columns: repeat(3, minmax(180px, 1fr));
}

.kpi-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  min-height: 136px;
  padding: 14px 14px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.kpi-card.compact {
  min-height: 118px;
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
  border: 1px solid rgba(13, 58, 101, 0.08);
  font-weight: 700;
  font-size: 0.98rem;
}

.kpi-icon.cyan { background: #dff8fb; color: #0b8aa5; }
.kpi-icon.teal { background: #e0f8f3; color: #0a8d7a; }
.kpi-icon.green { background: #e3f9ef; color: #0e8d63; }
.kpi-icon.purple { background: #f2ebff; color: #5f59a7; }
.kpi-icon.small {
  width: 24px;
  height: 24px;
  font-size: 0.78rem;
}

.kpi-label {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.25;
}

.kpi-value {
  margin-top: 6px;
  font-size: clamp(1.9rem, 2vw, 2.35rem);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.06em;
  color: var(--text);
}

.kpi-value.large {
  font-size: clamp(1.7rem, 1.8vw, 2.1rem);
}

.trend {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #2ea271;
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
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  color: var(--muted);
  font-size: 0.8rem;
  padding: 8px 12px;
}

.attendance-summary {
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.84rem;
}

.trends-box {
  padding-top: 12px;
}

.trend-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.trend-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 12px 16px;
}

.trend-select {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.mini-chart {
  height: 136px;
  display: flex;
  align-items: end;
  gap: 5px;
  padding-top: 8px;
}

.bar {
  flex: 1;
  border-radius: 5px 5px 0 0;
  min-height: 12px;
  opacity: 0.9;
}

.chart-legend {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.78rem;
}

.legend-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.loader {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--nav);
}

@media (max-width: 1180px) {
  .metric-grid-5,
  .metric-grid-3,
  .trend-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
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

@media (prefers-reduced-motion: no-preference) {
  .bar {
    transition: height 180ms ease;
  }
}
