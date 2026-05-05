# 🪜 Stepper

A React exercise focused on building a multi-step interface with progressive disclosure and real-world content structure.

![Mini blog with closed and open stepper](./public/screenshots/stepper-preview.png)

<div align="center">

![React](https://img.shields.io/badge/React-blue?style=for-the-badge) ![JavaScript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge) ![JSX](https://img.shields.io/badge/jsx-blue?style=for-the-badge) ![HTML](https://img.shields.io/badge/html-orange?style=for-the-badge) ![CSS3](https://img.shields.io/badge/css-rebeccapurple?style=for-the-badge) ![GitHub License](https://img.shields.io/github/license/ana-vucic-dev/react-practice-lab?style=for-the-badge)

</div>

---

## 🎯 Goal

Practice building interactive multi-step UI patterns with clear state transitions and accessible behavior.

---

## 📸 Screenshots

<details>

  <summary><strong>View Screenshots</strong></summary>
  
  <br />

### Closed State (Desktop)

![Mini blog with closed stepper on desktop](./public/screenshots/stepper-closed-desktop.png)

### Open State (Desktop)

![Mini blog with open stepper on desktop](./public/screenshots/stepper-open-desktop.png)

### All Steps (Mobile)

![Stepper steps on mobile](./public/screenshots/stepper-steps-mobile.png)

</details>

---

## ✨ Features

- Expandable stepper interface with progressive disclosure
- Multi-step navigation with next/previous controls
- Data-driven rendering of step content
- External links integrated into each step
- Visual step indicators with active state feedback

---

## 🔧 Improvements & Enhancements

Compared to the initial exercise, this version includes:

- Semantic structure (`header`, `article`, `section`, `footer`)
- ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`)
- Reusable `Link` component
- Content structured as a mini blog post with introduction and steps
- Image fallback when the stepper is closed to avoid empty layout
- Responsive, mobile-first design
- Reduced motion support (`prefers-reduced-motion`)

---

## 🧠 Key Learnings

- Managing multi-step UI with controlled state (`step`, `isOpen`)
- Designing components that combine content and interaction
- Structuring UI for progressive disclosure
- Composing reusable UI elements (buttons, links)
- Enhancing basic exercises with real-world context

---

## 🤝 Accessibility

- Semantic HTML structure for meaningful content hierarchy
- Button-based interactions for keyboard accessibility
- `aria-expanded` and `aria-controls` for toggle behavior
- Clear labeling for interactive elements
- Focus-visible styles for improved navigation
- Respect for user motion preferences

---

## 🎨 UI & UX

- Clean, readable layout with a blog-like structure
- Progressive reveal of content to reduce cognitive load
- Visual feedback for the current step
- Integrated imagery to maintain visual balance when collapsed

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- CSS (responsive, mobile-first)

---

## 📒 Notes

This project expands on a basic stepper exercise by introducing real-world structure and content, turning it into a guided mini experience rather than a purely technical demo.

---
