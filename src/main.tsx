import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import 'flowbite'
import "react-datepicker/dist/react-datepicker.css";
import './assets/css/global.css'
import "react-toastify/dist/ReactToastify.css";
import RouterConfig from "./config/router.config.tsx";
import {Provider} from "react-redux";
import {reduxStore} from "./redux/store.ts";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={reduxStore}>
            <RouterConfig/>
        </Provider>
    </StrictMode>,
)
