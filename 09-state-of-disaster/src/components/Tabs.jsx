import { useRef, useState } from 'react';
import { TAB_DATA } from '../data/tab-data.js';
import Tab from './Tab.jsx';
import TabPanel from './TabPanel.jsx';
import StateDestroyer from './StateDestroyer.jsx';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  function handleKeyDown(e) {
    let nextIndex;

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = (activeTab + 1) % TAB_DATA.length;
        break;

      case 'ArrowLeft':
        nextIndex = (activeTab - 1 + TAB_DATA.length) % TAB_DATA.length;
        break;

      case 'Home':
        nextIndex = 0;
        break;

      case 'End':
        nextIndex = TAB_DATA.length - 1;
        break;

      default:
        return;
    }

    e.preventDefault();
    setActiveTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <main className='tabs'>
      <div
        role='tablist'
        aria-label='State in React'
        onKeyDown={handleKeyDown}
        className='tab-container'>
        {TAB_DATA.map((item, index) => (
          <Tab
            key={item.id}
            index={index}
            item={item}
            ref={element => (tabRefs.current[index] = element)}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </div>

      {activeTab < TAB_DATA.length - 1 ? (
        <TabPanel item={TAB_DATA.at(activeTab)} />
      ) : (
        <StateDestroyer item={TAB_DATA.at(-1)} />
      )}
    </main>
  );
}
