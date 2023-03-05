import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalContextProvider from '../src/store/2_context.js';

function App() {
    return (
        <ModalContextProvider>
            <RouterProvider router={router} />
        </ModalContextProvider>
    );
}

export default App;
