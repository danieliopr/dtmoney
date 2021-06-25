import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal'
Modal.setAppElement('#root');

export function App() {
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransationModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransationModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </>
  );
}