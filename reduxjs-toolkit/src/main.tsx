import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import { Provider } from 'react-redux'
import {store} from "./store/store";

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  // </React.StrictMode>
)
