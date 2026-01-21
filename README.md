# takayaso.com Design System

## Structure

```
design/
├── tokens/           # CSS変数 + Tailwindプリセット
├── packages/ui/      # React コンポーネント (動き系のみ)
└── docs/             # プレビューサイト (コピペ元)
```

## Usage

### 1. Tokens (CSS Variables + Tailwind Preset)

```bash
# Install (npm link or copy)
npm link ./tokens
```

```css
/* styles.css */
@import '@takayaso/tokens/variables.css';

/* Override per project */
:root {
  --color-bg-base: #fef3c7;
}
```

```js
// tailwind.config.js
import takayasoPreset from '@takayaso/tokens/preset'

export default {
  presets: [takayasoPreset],
}
```

### 2. React Components

```bash
npm link ./packages/ui
```

```tsx
import { Modal, ModalHeader, ModalBody, Toast, useToast } from '@takayaso/ui'

function App() {
  const toast = useToast()

  return (
    <>
      <button onClick={() => toast.success('Saved!')}>Save</button>
      <Toast {...toast} onClose={toast.hide}>{toast.message}</Toast>
    </>
  )
}
```

### 3. Preview Site (Copy-paste reference)

```bash
cd docs && npm run dev
```

Open http://localhost:5173 and copy Tailwind classes from components.

## Components

| Component | Type | Description |
|-----------|------|-------------|
| Modal | React | Dialog with backdrop |
| Dropdown | React | Click-triggered dropdown menu |
| Accordion | React | Expandable sections |
| Toast | React | Notification popups |
| MobileMenu | React | Slide-in mobile navigation |

## Color Override Example

```css
/* Project A - Warm theme */
:root {
  --color-bg-base: #fef3c7;
  --color-bg-gradient-from: #fef3c7;
  --color-bg-gradient-via: #fde68a;
  --color-bg-gradient-to: #fcd34d;
}

/* Project B - Cool theme */
:root {
  --color-bg-base: #e0f2fe;
  --color-bg-gradient-from: #e0f2fe;
  --color-bg-gradient-via: #bae6fd;
  --color-bg-gradient-to: #7dd3fc;
}
```
