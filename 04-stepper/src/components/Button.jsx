export default function Button({ onClick, bgColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={onClick}>
      {children}
    </button>
  );
}
