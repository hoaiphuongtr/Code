import { useCallback, useState } from 'react';
import Ads from './Ads';
import './App.css';
import Input from './Input';
import MainLayout from './MainLayout';
import Manager from './Manager';
import MouseTracker from './MouseTracker';

import ProductList from './ProductList/ProductList';
import Welcome from './Welcome';
import { PositionType } from './MouseTracker/MouseTracker';
import User from './User';

function App() {
    // const [, render] = useState({});
    // const renderAds = useCallback(
    //     (value: PositionType) => <Ads {...value} visible />,
    //     []
    // );
    const [visible, setVisible] = useState(true);
    const handleVisibleComponent = () => {
        setVisible(!visible);
    };
    return (
        <div>
            {/* <Welcome /> */}
            {/* <Input /> */}
            {/* <ProductList /> */}
            {/* <MainLayout>
                <Manager />
            </MainLayout> */}
            {/* <div>
                <button
                    onClick={() => {
                        render({});
                    }}
                >
                    Force Rerender
                </button>
            </div>
            <MouseTracker render={renderAds} /> */}
            {/* <Ads visible /> */}
            <button
                onClick={handleVisibleComponent}
                style={{
                    padding: '20px 20px 20px',
                    fontSize: '20px',
                    margin: '0 auto',
                    display: 'block'
                }}
            >
                Hide Users
            </button>
            {visible && <User />}
        </div>
    );
}

export default App;
