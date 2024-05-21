import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from 'routes/Root.tsx'
import Actions from 'routes/actions/Actions.tsx'
import ActionsUseTransition from 'routes/actions/ActionsUseTransition.tsx'
import ActionsUseActionState from 'routes/actions/ActionsUseActionState.tsx'
import ActionsUseFormStatus from 'routes/actions/ActionsUseFormStatus.tsx'
import ActionsUseOptimistic from 'routes/actions/ActionsUseOptimistic.tsx'
import Use from 'routes/use/Use.tsx'
import Other from 'routes/other/Other.tsx'
import ReactCompiler from 'routes/compiler/ReactCompiler.tsx'
import Memo from "routes/compiler/Memo.tsx";
import UseCallbackUseMemo from "routes/compiler/UseCallbackUseMemo.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'actions',
        element: <Actions />,
        children: [
          {
            path: 'use-transition',
            element: <ActionsUseTransition />
          },
          {
            path: 'use-action-state',
            element: <ActionsUseActionState />
          },
          {
            path: 'use-form-status',
            element: <ActionsUseFormStatus />
          },
          {
            path: 'use-optimistic',
            element: <ActionsUseOptimistic />
          }
        ]
      },
      {
        path: 'use',
        element: <Use />
      },
      {
        path: 'other',
        element: <Other />
      },
      {
        path: 'compiler',
        element: <ReactCompiler />,
        children: [
          {
            path: 'memo',
            element: <Memo />
          },
          {
            path: 'use-callback-use-memo',
            element: <UseCallbackUseMemo />
          }
        ]
      }
    ]
  }
])
// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
