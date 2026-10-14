import useDialog from './hooks/useDialog.js';
import usePackingList from './hooks/usePackingList.js';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import PackingList from './components/PackingList.jsx';
import ConfirmationDialog from './components/ConfirmationDialog.jsx';
import Stats from './components/Stats.jsx';
import Footer from './components/Footer.jsx';
import './styles/index.css';

export default function App() {
  const { dialogConfig, closeDialog } = useDialog();
  const { items, addItem, removeItem, togglePacked, clearList } =
    usePackingList();

  return (
    <div
      className='app'
      aria-labelledby='app-name'>
      <Header />

      <main>
        <Form addItem={addItem} />

        <PackingList
          items={items}
          removeItem={removeItem}
          togglePacked={togglePacked}
          clearList={clearList}
        />

        {dialogConfig && (
          <ConfirmationDialog
            config={dialogConfig}
            closeDialog={closeDialog}
          />
        )}

        <Stats items={items} />
      </main>

      <Footer />
    </div>
  );
}
