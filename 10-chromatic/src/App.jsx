import { useState } from 'react';
import Header from './components/Header.jsx';
import ColorPicker from './components/ColorPicker.jsx';
import SelectedColor from './components/SelectedColor.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [color, setColor] = useState('#0e1c26');

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div
      className='app'
      aria-labelledby='app-name'
      style={{ backgroundColor: color }}>
      <Header />

      <main>
        <ColorPicker
          color={color}
          onChange={handleColorChange}
        />

        <SelectedColor color={color} />
      </main>

      <Footer />
    </div>
  );
}
