// function BareButton() {
//     //Just arrow function
//     // const handleClick = (event, value) => {
//     //     console.log(event);
//     //     console.log(value);
//     // };

//     //Currying
//     const handleClick = (event, value) => () => {
//         console.log(event);
//         console.log(value);
//     };
//     return (
//         <div className='button'>
//             <button
//                 className='add'
//                 // onClick={(event) => handleClick(event, 'Add')} //For Arrow func
//                 // onClick={(event) => {
//                 //     handleClick(event, 'Add')(); //for currying
//                 // }}
//             >
//                 Add
//             </button>
//             <button
//                 className='edit'
//                 // onClick={(event) => handleClick(event, 'Add')} //for arrow func
//                 onClick={(event) => {
//                     handleClick(event, 'Edit')();
//                 }}
//             >
//                 Edit
//             </button>
//             <button
//                 className='delete'
//                 onClick={(event) => {
//                     handleClick(event, 'Delete')();
//                 }}
//             >
//                 Delete
//             </button>
//         </div>
//     );
// }
// export default BareButton;

import React from 'react'
export default class BareButton extends React.Component {
    render() {
        const handleClick = (event, value) => {
            console.log(event)
            console.log(value)
        }
        return (
            <div className='button'>
                <button className='add' onClick={(event) => handleClick(event, 'Add')}>
                    Add
                </button>
                <button className='add' onClick={(event) => handleClick(event, 'Delete')}>
                    Delete
                </button>
                <button className='add' onClick={(event) => handleClick(event, 'Edit')}>
                    Edit
                </button>
            </div>
        )
    }
}
