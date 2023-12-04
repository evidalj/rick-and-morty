import character from "./character";

export type info = {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
}
type response = {
    info: info;
    results: Array<any | character>
}

export default response;