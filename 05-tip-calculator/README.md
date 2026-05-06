# 💰 Tip Calculator

A React exercise focused on derived state, controlled inputs, and dynamic component rendering.

![Tip Calculator preview](./public/screenshots/tip-calculator-preview.png)

<div align="center">

![React](https://img.shields.io/badge/React-blue?style=for-the-badge) ![JavaScript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge) ![JSX](https://img.shields.io/badge/jsx-blue?style=for-the-badge) ![HTML](https://img.shields.io/badge/html-orange?style=for-the-badge) ![CSS3](https://img.shields.io/badge/css-rebeccapurple?style=for-the-badge) ![GitHub License](https://img.shields.io/github/license/ana-vucic-dev/react-practice-lab?style=for-the-badge)

</div>

---

## 🎯 Goal

Practice handling multiple inputs and calculating derived values based on user interaction.

---

## 📸 Screenshots

<details>
  <summary><strong>View Screenshots</strong></summary>

  <br />

### Desktop View

![Tip Calculator on desktop](./public/screenshots/tip-calculator-desktop.png)

### Tablet View

<img src="./public/screenshots/tip-calculator-tablet.png" alt="Tip Calculator on tablet" width="600" />

### Mobile View

<img src="./public/screenshots/tip-calculator-mobile.png" alt="Tip Calculator on mobile" width="300" />

</details>

---

## ✨ Features

- Bill input with validation and locale-friendly parsing
- Dynamic number of people (with a configurable limit)
- Individual tip selection per person
- Automatic calculation of total tip using the average tip percentage
- Reset functionality

---

## 🔧 Improvements & Enhancements

Compared to the initial exercise, this version includes:

- Semantic HTML elements (`header`, `form`, `section`, `footer`)
- Input validation and locale awareness
- Configuration for a dynamic number of people
- Currency formatting
- `useMemo` hook for memoizing the currency formatter
- Reusable components
- Screen-reader announcements for total updates
- Responsive design

---

## 🧠 Key Learnings

- Handling multiple controlled inputs with validation
- Managing dynamic collections of data (per-person tips)
- Calculating derived state from multiple sources
- Structuring components for clarity and scalability

---

## 🤝 Accessibility

- Semantic form structure (`fieldset`, `legend`, `label`)
- Clear input labeling and grouping
- Live region (`aria-live="polite"`) for announcing total updates
- Keyboard-friendly form controls with custom focus styling
- Respect for reduced-motion user preferences

---

## 🎨 UI & UX

- Responsive, mobile-first layout
- Clear grouping of inputs and calculated results
- Real-time calculation feedback
- Consistent focus styles for better usability

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- CSS (responsive, mobile-first)

---

## 📒 Notes

An early exercise focused on combining controlled inputs, dynamic rendering, and derived state into a cohesive user interface.

---
