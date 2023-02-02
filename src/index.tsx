import { createRoot } from 'react-dom/client';

import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import { routes } from './routes';

const Router = createHashRouter(routes);
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <RouterProvider router={Router} />,
);
