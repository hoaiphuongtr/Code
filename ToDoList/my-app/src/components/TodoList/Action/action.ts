export type ActionType =
    | AddToDo
    | EditToDo
    | DeleteToDo
    | FinishEditToDo
    | CheckToDo;
type AddToDo = { type: 'AddToDo'; payload: string };
type EditToDo = { type: 'EditToDo'; payload: string };
type DeleteToDo = { type: 'DeleteToDo'; payload: string };
type FinishEditToDo = { type: 'FinishEditToDo' };
type CheckToDo = { type: 'CheckToDo'; payload: { id: string; done: boolean } };
