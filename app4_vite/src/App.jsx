import { Provider } from "react-redux"
import CokeContainer from "./components/CokeContainer"
import FantaContainer from "./components/FantaContainer"
import store from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <>
        <CokeContainer />
        <FantaContainer />
      </>
    </Provider>
  )
}

export default App
