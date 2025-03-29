import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import styles from './style.module.css';
export class ProductTable extends Component {
    render() {
        const { list, searchText, isInStock } = this.props;
        // Lọc và nhóm các sản phẩm theo category
        const groupedProducts = {};
        list.forEach((productItem) => {
            if (isInStock && !productItem.stocked) {
                return;
            }
            if (
                !productItem.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            ) {
                return;
            }

            if (!groupedProducts[productItem.category]) {
                groupedProducts[productItem.category] = [];
            }
            groupedProducts[productItem.category].push(productItem);
        });

        // Tạo danh sách các hàng để render
        const rows = [];
        Object.keys(groupedProducts).forEach((category) => {
            rows.push(
                <ProductCategoryRow category={category} key={category} />
            );

            groupedProducts[category].forEach((productItem) => {
                rows.push(
                    <ProductRow product={productItem} key={productItem.name} />
                );
            });
        });

        return (
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;
