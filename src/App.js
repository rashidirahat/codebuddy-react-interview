import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <div>
      <Router />
    </div>
  </Provider>
);

export default App;
