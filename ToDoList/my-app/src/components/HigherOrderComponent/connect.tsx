import { debug, log } from './constants'
import Comment from './../../../../../beginner/src/Comment'
export interface InjectedProps {
  user: any
}
export interface ExtraInfoProps {
  debug: boolean
  log: (value: any) => void
}
// export default function connect<T extends ExtraInfoProps>(
//     Component: React.ComponentType<T> // Component is a React component that takes props of type T and extends ExtraInfoProps
// ) {
//     return function (props: Omit<T, keyof ExtraInfoProps>) {
//         // Omit<T, keyof ExtraInfoProps> is used to remove the ExtraInfoProps from the props of the component
//         return <Component {...(props as T)} debug={debug} log={log} />;
//     };
// }
export default function connect<P>(injectedProps: P) {
  return function <T extends P>(Component: React.ComponentType<T>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...injectedProps} />
    }
  }
}
