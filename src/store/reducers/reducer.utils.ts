export interface ReducerActionInterface {
    type: string;
    payload?: any | null;
}

export default function createAction({ type, payload } : ReducerActionInterface) {
    return  {
        type,
        payload
    }
};