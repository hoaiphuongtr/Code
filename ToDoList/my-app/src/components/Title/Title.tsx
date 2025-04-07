import React, { useRef } from 'react';
import styles from './title.module.scss';
type TitleProps = {
    address: {
        street: string;
    };
    handleChangeTitle: (value: any) => void;
};
function Title(props: TitleProps) {
    // console.log(props);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const clickH1 = () => {
        if (h1Ref.current) {
            h1Ref.current.innerText = 'Hello World'; //it effects the real DOM
            h1Ref.current.style.color = 'red';
        }
    };
    return (
        <h1 className={styles.title} onClick={clickH1} ref={h1Ref}>
            To Do List Typescript
        </h1>
    );
}
function equal(prevProps: TitleProps, nextProps: TitleProps) {
    return prevProps.address.street === nextProps.address.street;
}
export default React.memo(Title);
