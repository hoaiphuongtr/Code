import React, { Component } from 'react';
import styles from './style.module.css';
export class ProductRow extends Component {
    render() {
        const { name, price } = this.props.product;
        return (
            <tr>
                <td className={styles.td}>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}

export default ProductRow;
