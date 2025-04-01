import './App.css';
import Clock from './Clock';
import BareInput from './BareInput';
import Layout from './Layout';
import BareButton from './BareButton';
import LoginControl from './LoginControl';
import CorrectlyState from './CorrectlyState';
import ProductList from './Products/ProductList';
import Form from './Form/form';
import UncontrolledComponent from './Form/UncontrolledComponent';
import Calculator from './Calculator/Calculator';
import Composition from './Composition&Inheritance/Composition';
import FilterableProductTable from './ThinkingInReact/FilterableProductTable';
import FunctionalComponent from './Hook/FunctionalComponent.jsx';
import { useState } from 'react';
// import './App.scss';
import AutoBatching from './Batching/AutoBatching';
import RulesofHook from './Batching/RulesofHook.jsx';
import Navigation from './CustomHook/Navigation.jsx';
import Cart from './CustomHook/Cart.jsx';

function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div className='App'>
            {/* <button
                onClick={() => {
                    setVisible(false);
                }}
            >
                Hide Clock component
            </button>
            {visible && <Clock />} */}
            {/* <Layout>
                <h1>Hello Phuong</h1>
            </Layout>
            <BareInput
                value='100'
                autoFocus
                className='input-text'
                onChange={() => {}}
            /> */}
            {/* <BareButton /> */}
            {/* <LoginControl isLoggedIn={true} /> */}
            {/* <CorrectlyState /> */}
            {/* <ProductList /> */}
            {/* <Form /> */}
            {/* <UncontrolledComponent /> */}
            {/* <Calculator /> */}
            {/* <Composition /> */}
            {/* <FilterableProductTable /> */}
            {/* {visible && <FunctionalComponent />} */}
            {/* <button onClick={() => setVisible((prevState) => !prevState)}>
                Change Visible
            </button> */}
            {/* <AutoBatching /> */}
            {/* <RulesofHook /> */}
            <Cart />
            <Navigation />
        </div>
    );
}

export default App;
