import { createContext } from 'react';

export const ModalContext = createContext({
    openModal: () => { },
    closeModal: () => { },
    playSliderProcCert: () => { },
    stopSliderProcCert: () => { },
    setHeaderHeight: () => { },
    handleToggle: () => { },
    autoPlaySliderProcCert: true,
    scrollbarWidthBody: null,
    modalOpened: false,
    headerHeight: 120,
    isToggled: false
});