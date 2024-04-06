import React, { createContext, useCallback, useState, useMemo, useContext, useRef, memo } from 'react';
import { RenderCounter } from './helpers/RenderCounter';
import { redStyle, activeModalStyle } from './helpers/styles'

const GlobalModalContextDefault = {
  activeModal: 'none',
  setModal: () => {}
};
const ModalContext = createContext(GlobalModalContextDefault);

export default function App() {
  const [activeModal, setActiveModal] = useState('none');
  const show = useCallback((activeModal) => setActiveModal(activeModal), []);
  const hide = useCallback((activeModal) => setActiveModal('none'), []);

  const modalProviderValue = useMemo(
    () => ({ activeModal, show, hide }),
    [activeModal, show, hide]
  );

  return (
    <ModalContext.Provider value={modalProviderValue}>
      <div className='App' style={{ flexGrow: 1 }}>
            <h1>Unoptimized Providers</h1>
        <GlobalModal />
        <Cmp1 />
        <Cmp2 />
        <Cmp3 />
      </div>
    </ModalContext.Provider>
  );
}

const GlobalModal = memo(() => {
  const { activeModal, hide } = useContext(ModalContext);
  return (
    <div style={redStyle}>
      <h3>Selected Global Modal: <span style={activeModalStyle}>{activeModal}</span></h3>
      <button onClick={() => hide('Login')}>hide modal</button>
      <RenderCounter />
    </div>
  )
})

const Cmp1 = memo(() => {
  const { show } = useContext(ModalContext);
  return (
    <div style={redStyle}>
      <h3>Cmp1</h3>
      <button onClick={() => show('Login')}>show: Login</button>
      <RenderCounter />
    </div>
  )
})

const Cmp2 = memo(() => {
  const { show } = useContext(ModalContext);
  return (
    <div style={redStyle}>
      <h3>Cmp2</h3>
      <button onClick={() => show('Pricing')}>show: Pricing</button>
      <RenderCounter />
    </div>
  )
})

const Cmp3 = memo(() => {
  const { show } = useContext(ModalContext);
  return (
    <div style={redStyle}>
      <h3>Cmp3</h3>
      <button onClick={() => show('Logout')}>show: Pricing</button>
      <RenderCounter />
    </div>
  )
})