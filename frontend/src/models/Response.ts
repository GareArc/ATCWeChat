export interface Response<T>{
    data: T;
    errorDescription: string;
    code: number;
}
