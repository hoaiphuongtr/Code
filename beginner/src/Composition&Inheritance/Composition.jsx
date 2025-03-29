import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { className = ' ', children } = this.props;
        return <button className={className}>{children} Button</button>;
    }
}
class Layout extends Component {
    render() {
        const { left, right } = this.props;
        return (
            <div className='layout'>
                <div className='left'>{left}</div>
                <div className='right'>{right}</div>
            </div>
        );
    }
}
export class Composition extends Component {
    render() {
        return (
            <>
                Composition
                <Button className='btn-yellow'>Yellow</Button>
                <Button className='btn'> </Button>
                <Layout left={<Button className='left'>Left</Button>} />
                <Layout right={<Button className='right'>Right</Button>} />
            </>
        );
    }
}

export default Composition;
