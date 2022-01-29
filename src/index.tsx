import * as React from 'react'
import {StrictMode} from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createBrowserHistory} from 'history'
import {ConnectedRouter} from "connected-react-router";
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import 'typeface-ibm-plex-sans';
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider, StyledEngineProvider, createTheme} from '@mui/material/styles';
import Routes from "./routes";

const history = createBrowserHistory()
// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE
export const store = configureStore(history, initialState)

const theme = createTheme();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Routes/>
          </ConnectedRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
