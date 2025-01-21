import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import ThemeProvider from './providers/themeContext';
import { store } from './redux/store';
import { router } from './routing/router';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
