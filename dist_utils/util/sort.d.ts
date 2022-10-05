import type { Object } from '../internal/type';
declare function sort(target: Array<any>, callback?: ((a: any, b: any, atype: string, btype: string) => number) | undefined, orderConfig?: Object): any[];
export default sort;
