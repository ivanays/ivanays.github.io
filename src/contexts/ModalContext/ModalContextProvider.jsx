import React, { useState, useEffect } from 'react';
import { useScrollbarWidth } from '../../hooks/hook_scrollbar_width';
// import { useScrollbarWidth } from 'react-use';

import { ModalContext } from './ModalContext';

import { Modal } from '../../components/modals';

export const ModalProvider = ({ children }) => {

    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [autoPlaySliderProcCert, setAutoPlaySliderProcCert] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isToggled, setIsToggled] = useState(false);
    

    const scrollbarWidthBody = useScrollbarWidth();

    const openModal = (modalConfig) => {
        // const { href, children } = modalConfig;
        setModalContent(modalConfig);
        setModalOpened(true);
        document.body.style.paddingRight = `${scrollbarWidthBody}px`;
    };
    
    const closeModal = () => {
        setModalOpened(false);
        document.body.style.paddingRight = `0px`;
    };

    const playSliderProcCert = () => {
        setAutoPlaySliderProcCert(true);
    };

    const stopSliderProcCert = () => {
        setAutoPlaySliderProcCert(false);
    };

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    const valueModelProvider = {
        openModal,
        closeModal,
        playSliderProcCert,
        stopSliderProcCert,
        handleToggle,
        autoPlaySliderProcCert,
        scrollbarWidthBody,
        modalOpened,
        isToggled
    }

    return (
        <ModalContext.Provider value={valueModelProvider}>
            {modalOpened && <Modal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}