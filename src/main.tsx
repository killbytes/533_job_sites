import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from "@mantine/core"
import './index.scss'
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import {router} from "@/router.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </Provider>
    </StrictMode>,
);