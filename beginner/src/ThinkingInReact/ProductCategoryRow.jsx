import React, { Component } from 'react';
import styles from './style.module.css';
export class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <td colSpan={2} className={styles.category}>
                    {category}
                </td>
            </tr>
        );
    }
}

export default ProductCategoryRow;
