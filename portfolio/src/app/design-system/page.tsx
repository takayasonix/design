'use client';

export default function DesignSystemPage() {
  return (
    <div style={{
      fontFamily: "'Lato', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
      background: '#fafafa',
      color: '#171717',
      lineHeight: 1.6,
      padding: '40px',
      minHeight: '100vh'
    }}>
      <style>{`
        .section {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        h2 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 2px solid #171717;
        }
        h3 {
          font-size: 16px;
          font-weight: 700;
          color: #525252;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .component-group {
          margin-bottom: 32px;
        }
        .component-group:last-child {
          margin-bottom: 0;
        }
        .component-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
        }
        .btn:focus-visible {
          outline: 2px solid #171717;
          outline-offset: 2px;
        }
        .btn-sm { font-size: 12px; padding: 6px 12px; }
        .btn-lg { font-size: 16px; padding: 14px 28px; }
        .btn-primary {
          background: #171717;
          color: #ffffff;
          border-color: #171717;
        }
        .btn-primary:hover { background: #262626; }
        .btn-primary:active { background: #404040; }
        .btn-secondary {
          background: #ffffff;
          color: #171717;
          border-color: #d4d4d4;
        }
        .btn-secondary:hover { background: #f5f5f5; }
        .btn-secondary:active { background: #e5e5e5; }
        .btn-ghost {
          background: transparent;
          color: #171717;
          border-color: transparent;
        }
        .btn-ghost:hover { background: #f5f5f5; }
        .btn-ghost:active { background: #e5e5e5; }
        .btn-outline {
          background: transparent;
          color: #171717;
          border-color: #171717;
        }
        .btn-outline:hover {
          background: #171717;
          color: #ffffff;
        }
        .btn-destructive {
          background: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
        }
        .btn-destructive:hover {
          background: #dc2626;
          border-color: #dc2626;
        }
        .btn:disabled {
          background: #e5e5e5;
          color: #a3a3a3;
          border-color: #e5e5e5;
          cursor: not-allowed;
        }
        .link {
          color: #171717;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.15s ease;
        }
        .link:hover { color: #525252; }
        .link-accent { color: #2563eb; }
        .link-accent:hover { color: #1d4ed8; }
        .link-muted { color: #737373; }
        .link-muted:hover { color: #171717; }
        .form-group { margin-bottom: 20px; }
        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 6px;
          color: #171717;
        }
        .form-input {
          width: 100%;
          max-width: 320px;
          padding: 10px 12px;
          font-family: inherit;
          font-size: 14px;
          color: #171717;
          background: #ffffff;
          border: 1px solid #d4d4d4;
          border-radius: 6px;
          transition: border-color 0.15s ease;
        }
        .form-input::placeholder { color: #a3a3a3; }
        .form-input:hover { border-color: #a3a3a3; }
        .form-input:focus {
          outline: none;
          border-color: #171717;
          box-shadow: 0 0 0 3px rgba(23, 23, 23, 0.1);
        }
        .form-input:disabled {
          background: #f5f5f5;
          color: #a3a3a3;
          cursor: not-allowed;
        }
        .form-input-error { border-color: #ef4444; }
        .form-input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        .form-error {
          font-size: 12px;
          color: #ef4444;
          margin-top: 6px;
        }
        .form-hint {
          font-size: 12px;
          color: #737373;
          margin-top: 6px;
        }
        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }
        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23525252' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 40px;
        }
        .form-check {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .form-check-input {
          width: 18px;
          height: 18px;
          accent-color: #171717;
          cursor: pointer;
        }
        .form-check-label {
          font-size: 14px;
          color: #171717;
        }
        .card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          padding: 20px;
        }
        .card-elevated {
          border: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .card-description {
          color: #525252;
          font-size: 14px;
        }
        .alert {
          padding: 16px;
          border-radius: 8px;
          font-size: 14px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .alert-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
        }
        .alert-success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }
        .alert-warning {
          background: #fefce8;
          color: #854d0e;
          border: 1px solid #fef08a;
        }
        .alert-error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }
        .alert-info {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 9999px;
        }
        .badge-default { background: #f5f5f5; color: #525252; }
        .badge-primary { background: #171717; color: white; }
        .badge-success { background: #f0fdf4; color: #166534; }
        .badge-warning { background: #fefce8; color: #854d0e; }
        .badge-error { background: #fef2f2; color: #991b1b; }
        .tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          background: #f5f5f5;
          border-radius: 6px;
          font-size: 13px;
          color: #525252;
        }
        .tag-outline {
          background: transparent;
          border: 1px solid #d4d4d4;
        }
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          background: #d4d4d4;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        .toggle-active { background: #171717; }
        .toggle-active::after { transform: translateX(20px); }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #525252;
        }
        .avatar-sm { width: 32px; height: 32px; font-size: 12px; }
        .avatar-lg { width: 64px; height: 64px; font-size: 24px; }
        .progress {
          height: 8px;
          background: #e5e5e5;
          border-radius: 9999px;
          overflow: hidden;
        }
        .progress-bar {
          height: 100%;
          background: #171717;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .progress-success .progress-bar { background: #22c55e; }
        .progress-warning .progress-bar { background: #eab308; }
        .progress-error .progress-bar { background: #ef4444; }
        .color-swatch {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e5e5e5;
        }
        .color-swatch-color { height: 64px; }
        .color-swatch-info {
          padding: 12px;
          background: white;
          font-size: 12px;
        }
        .color-swatch-name { font-weight: 700; margin-bottom: 4px; }
        .color-swatch-value { color: #737373; font-family: monospace; }
        .component-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }
        .brand-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          color: white;
          transition: opacity 0.15s ease;
        }
        .brand-link:hover { opacity: 0.9; }
        .brand-twitter { background: #60a5fa; }
        .brand-instagram { background: #ec4899; }
        .brand-note { background: #22c55e; }
        .brand-github { background: #404040; }
      `}</style>

      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Design System Preview</h1>
        <p style={{ color: '#525252', fontSize: 16 }}>takayaso.com - Grayscale-centric, minimal accent colors</p>
      </div>

      {/* Buttons */}
      <section className="section">
        <h2>Buttons</h2>
        <div className="component-group">
          <h3>Variants</h3>
          <div className="component-row">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-destructive">Destructive</button>
            <button className="btn" disabled>Disabled</button>
          </div>
        </div>
        <div className="component-group">
          <h3>Sizes</h3>
          <div className="component-row">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Medium</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
        </div>
        <div className="component-group">
          <h3>With Icons</h3>
          <div className="component-row">
            <button className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              Add Item
            </button>
            <button className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download
            </button>
            <button className="btn btn-destructive">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              Delete
            </button>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="section">
        <h2>Links</h2>
        <div className="component-group">
          <h3>Variants</h3>
          <div className="component-row" style={{ gap: 24 }}>
            <a href="#" className="link">Default Link</a>
            <a href="#" className="link link-accent">Accent Link</a>
            <a href="#" className="link link-muted">Muted Link</a>
          </div>
        </div>
        <div className="component-group">
          <h3>In Context</h3>
          <p style={{ maxWidth: 600, color: '#525252' }}>
            This is a paragraph with an <a href="#" className="link">inline link</a> that demonstrates how links appear within body text. You can also use <a href="#" className="link link-accent">accent links</a> for emphasis.
          </p>
        </div>
      </section>

      {/* Form Elements */}
      <section className="section">
        <h2>Form Elements</h2>
        <div className="component-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div>
            <div className="form-group">
              <label className="form-label">Text Input</label>
              <input type="text" className="form-input" placeholder="Enter text..." />
            </div>
            <div className="form-group">
              <label className="form-label">With Hint</label>
              <input type="email" className="form-input" placeholder="email@example.com" />
              <p className="form-hint">We&apos;ll never share your email.</p>
            </div>
            <div className="form-group">
              <label className="form-label">Error State</label>
              <input type="text" className="form-input form-input-error" defaultValue="Invalid input" />
              <p className="form-error">This field is required.</p>
            </div>
            <div className="form-group">
              <label className="form-label">Disabled</label>
              <input type="text" className="form-input" defaultValue="Disabled input" disabled />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="form-label">Select</label>
              <select className="form-input form-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Textarea</label>
              <textarea className="form-input form-textarea" placeholder="Enter message..."></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Checkboxes</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label">Option A</span>
                </label>
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label">Option B</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Radio Buttons</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label className="form-check">
                  <input type="radio" name="radio" className="form-check-input" defaultChecked />
                  <span className="form-check-label">Choice 1</span>
                </label>
                <label className="form-check">
                  <input type="radio" name="radio" className="form-check-input" />
                  <span className="form-check-label">Choice 2</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section">
        <h2>Cards</h2>
        <div className="component-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="card">
            <h4 className="card-title">Default Card</h4>
            <p className="card-description">A simple card with border styling.</p>
          </div>
          <div className="card card-elevated">
            <h4 className="card-title">Elevated Card</h4>
            <p className="card-description">A card with shadow for emphasis.</p>
          </div>
          <div className="card" style={{ background: '#fafafa' }}>
            <h4 className="card-title">Sunken Card</h4>
            <p className="card-description">A subtle background variant.</p>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section className="section">
        <h2>Alerts / Feedback</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
          <div className="alert alert-success">
            <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <div><strong>Success!</strong> Your changes have been saved successfully.</div>
          </div>
          <div className="alert alert-warning">
            <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><strong>Warning!</strong> Please review your input before proceeding.</div>
          </div>
          <div className="alert alert-error">
            <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            <div><strong>Error!</strong> Something went wrong. Please try again.</div>
          </div>
          <div className="alert alert-info">
            <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div><strong>Info:</strong> Here&apos;s some helpful information for you.</div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="section">
        <h2>Badges</h2>
        <div className="component-row">
          <span className="badge badge-default">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-error">Error</span>
        </div>
      </section>

      {/* Tags */}
      <section className="section">
        <h2>Tags / Chips</h2>
        <div className="component-row">
          <span className="tag">Design</span>
          <span className="tag">Development</span>
          <span className="tag tag-outline">Outline Tag</span>
        </div>
      </section>

      {/* Toggle */}
      <section className="section">
        <h2>Toggle / Switch</h2>
        <div className="component-row">
          <div className="toggle"></div>
          <div className="toggle toggle-active"></div>
        </div>
      </section>

      {/* Avatar */}
      <section className="section">
        <h2>Avatar</h2>
        <div className="component-row">
          <div className="avatar avatar-sm">T</div>
          <div className="avatar">TY</div>
          <div className="avatar avatar-lg">TY</div>
        </div>
      </section>

      {/* Progress */}
      <section className="section">
        <h2>Progress Bar</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <div>
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4 }}>Default (60%)</div>
            <div className="progress"><div className="progress-bar" style={{ width: '60%' }}></div></div>
          </div>
          <div className="progress-success">
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4 }}>Success (100%)</div>
            <div className="progress"><div className="progress-bar" style={{ width: '100%' }}></div></div>
          </div>
          <div className="progress-warning">
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4 }}>Warning (40%)</div>
            <div className="progress"><div className="progress-bar" style={{ width: '40%' }}></div></div>
          </div>
          <div className="progress-error">
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4 }}>Error (20%)</div>
            <div className="progress"><div className="progress-bar" style={{ width: '20%' }}></div></div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section">
        <h2>Typography</h2>
        <div className="component-group">
          <h3>Text Colors</h3>
          <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4, fontFamily: 'monospace' }}>text-primary (#171717)</div>
            <p style={{ color: '#171717', fontSize: 16 }}>Primary text for main content and headings.</p>
          </div>
          <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4, fontFamily: 'monospace' }}>text-secondary (#525252)</div>
            <p style={{ color: '#525252', fontSize: 16 }}>Secondary text for supporting information.</p>
          </div>
          <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #e5e5e5' }}>
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4, fontFamily: 'monospace' }}>text-muted (#737373)</div>
            <p style={{ color: '#737373', fontSize: 16 }}>Muted text for less important content.</p>
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#737373', marginBottom: 4, fontFamily: 'monospace' }}>text-disabled (#a3a3a3)</div>
            <p style={{ color: '#a3a3a3', fontSize: 16 }}>Disabled text for inactive elements.</p>
          </div>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="section">
        <h2>Brand / SNS Colors</h2>
        <div className="component-row">
          <a href="#" className="brand-link brand-twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Twitter
          </a>
          <a href="#" className="brand-link brand-instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram
          </a>
          <a href="#" className="brand-link brand-note">note</a>
          <a href="#" className="brand-link brand-github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </section>

      {/* Color Palette */}
      <section className="section">
        <h2>Color Palette</h2>
        <div className="component-group">
          <h3>Gray Scale</h3>
          <div className="component-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              { name: 'gray-50', value: '#fafafa' },
              { name: 'gray-100', value: '#f5f5f5' },
              { name: 'gray-200', value: '#e5e5e5' },
              { name: 'gray-300', value: '#d4d4d4' },
              { name: 'gray-400', value: '#a3a3a3' },
              { name: 'gray-500', value: '#737373' },
              { name: 'gray-600', value: '#525252' },
              { name: 'gray-700', value: '#404040' },
              { name: 'gray-800', value: '#262626' },
              { name: 'gray-900', value: '#171717' },
            ].map(color => (
              <div key={color.name} className="color-swatch">
                <div className="color-swatch-color" style={{ background: color.value }}></div>
                <div className="color-swatch-info">
                  <div className="color-swatch-name">{color.name}</div>
                  <div className="color-swatch-value">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="component-group">
          <h3>Semantic Colors</h3>
          <div className="component-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { name: 'success', value: '#22c55e' },
              { name: 'warning', value: '#eab308' },
              { name: 'error', value: '#ef4444' },
              { name: 'info', value: '#3b82f6' },
            ].map(color => (
              <div key={color.name} className="color-swatch">
                <div className="color-swatch-color" style={{ background: color.value }}></div>
                <div className="color-swatch-info">
                  <div className="color-swatch-name">{color.name}</div>
                  <div className="color-swatch-value">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#737373', fontSize: 14 }}>
        Design System Preview - takayaso.com
      </footer>
    </div>
  );
}
