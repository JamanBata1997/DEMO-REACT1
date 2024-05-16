import logo from './logo.svg'
import './App.scss'
import { Provider } from 'react-redux'
import { MainContainer } from './hoc/main'
import MainRoute from './routes'
import { store } from './store/store'

function App() {
    return (
        <Provider store={store}>
            <MainContainer>
                <MainRoute />
            </MainContainer>
        </Provider>
    )
}

export default App
