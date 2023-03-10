import { createContext, useState } from 'react';

// 비어 있는 저장소
export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
