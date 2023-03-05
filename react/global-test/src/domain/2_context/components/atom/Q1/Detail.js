import { useContext } from 'react';
import { ModalContext } from '../../../../../store/2_context';
import ContextQ1Detail2 from './Detail2';
import ContextQ1Modal from './Modal';

const ContextQ1Detail = () => {
    const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

    return (
        <>
            {isModalOpen && <ContextQ1Modal />}
            <h2>ContextQ1Detail</h2>
            <button onClick={() => setIsModalOpen((prev) => !prev)}>
                {isModalOpen ? '숨기기' : '보이기'}
            </button>
            <ContextQ1Detail2 />
        </>
    );
};

export default ContextQ1Detail;
