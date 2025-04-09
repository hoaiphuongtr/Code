# Redux Toolkit

## Reducer and Action

### createAction()

- Definition: A helper function for defining a Redux action type and creator.

```tsx
function createAction(type, prepareAction?);
```

- Usage:
  The usual way to define an action in Redux is to separately declare an action type constant and an action creator function for constructing actions of that type.

```tsx
const INCREMENT = 'counter/increment';
const increment = (amount: number) => {
    return {
        type: INCREMENT,
        payload: amount
    };
};
console.log(increment(3));
// { type: 'counter/increment', payload: 3 }
```

The `createAction` helper combines these two declarations into one. It takes `an action type` and returns `an action creator` for that type. The action creator can be called either without arguments or with a payload to be attached to the action.

```tsx
import { createAction } from '@reduxjs/toolkit';
const increment = createAction<number | undefined>('counter/increment');
console.log(increment()); //{type: 'counter/increment'}
console.log(increment.type);
console.log(increment(5)); //{type : 'counter/increment', payload: 5}
```
