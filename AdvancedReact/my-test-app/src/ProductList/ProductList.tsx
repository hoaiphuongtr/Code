import React, {
    startTransition,
    useDeferredValue,
    useEffect,
    useState,
    useTransition
} from 'react';

const ProductCards = ({ name }: { name: string }) => {
    const [products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        console.log(name);
        const size = 9999;
        const result = [];
        for (let i = 0; i < size; i++) {
            result.push(name);
        }
        setProducts(result);
    }, [name]);
    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>{product}</div>
            ))}
        </div>
    );
};

export default function ProductList() {
    const [name, setName] = useState<string>('');
    // const deferredName = useDeferredValue(name);
    const [deferredName, setDeferredName] = useState<string>('');
    const [pending, startTransition] = useTransition();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
        startTransition(() => {
            setDeferredName(value);
        });
        console.log('pending: ', pending);
    };
    return (
        <div>
            <h1>Product List</h1>
            <input
                type='text'
                value={name}
                placeholder='type to render'
                onChange={handleChange}
                autoFocus
            />
            {pending && <div>Loading...</div>}
            {!pending && <ProductCards name={deferredName} />}
        </div>
    );
}
