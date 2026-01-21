# takayaso.com Design System

## Structure

```
design/
├── src/              # Token定義 (TypeScript)
├── dist/             # ビルド出力
│   ├── index.js      # JSトークン
│   ├── tokens.css    # CSS変数
│   └── preset.js     # Tailwindプリセット
├── packages/ui/      # React コンポーネント
└── docs/             # プレビューサイト (コピペ元)
```

## Installation

### 他プロジェクトから使う

```bash
# npm link (ローカル開発)
cd /path/to/design && npm link
cd /path/to/your-project && npm link @takayaso/tokens

# UI も使う場合
cd /path/to/design/packages/ui && npm link
cd /path/to/your-project && npm link @takayaso/ui
```

## Usage

### 1. CSS Variables

```css
/* styles.css */
@import '@takayaso/tokens/css';

/* プロジェクトごとに上書き */
:root {
  --color-background-light: #fef3c7;
}
```

### 2. Tailwind Preset

```js
// tailwind.config.js
import takayasoPreset from '@takayaso/tokens/preset'

export default {
  presets: [takayasoPreset],
}
```

### 3. JavaScript/TypeScript

```ts
import { colors, spacing, typography } from '@takayaso/tokens'

console.log(colors.gray[900]) // '#171717'
```

### 4. React Components

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

### 5. Preview Site (Copy-paste reference)

```bash
cd docs && npm run dev
```

http://localhost:5173 でコンポーネントを確認、Tailwindクラスをコピペ。

## React Components

| Component | Description |
|-----------|-------------|
| Modal, ModalHeader, ModalBody, ModalFooter | Dialog with backdrop |
| Dropdown, DropdownItem, DropdownDivider | Click-triggered menu |
| Accordion, AccordionItem | Expandable sections |
| Toast, useToast | Notification popups |
| MobileMenu, HamburgerButton, MobileMenuItem | Mobile navigation |

## Color Override Examples

```css
/* Project A - Warm theme */
:root {
  --color-background-light: #fef3c7;
  --color-gray-100: #fef3c7;
  --color-gray-200: #fde68a;
}

/* Project B - Cool theme */
:root {
  --color-background-light: #e0f2fe;
  --color-gray-100: #e0f2fe;
  --color-gray-200: #bae6fd;
}
```

## Build

```bash
npm run build        # tokens のみ
npm run build:ui     # UI のみ
npm run build:all    # 両方
```
