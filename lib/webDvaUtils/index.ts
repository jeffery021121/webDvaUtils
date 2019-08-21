// @ts-ignore
import asyncComponent from "./dynamic";
// declare namespace webDvaUtils {
//   type asyncComponent = () => () => void;
// }
// const Aaa = dddd.asyncComponent(Lol)(() => import(/* webpackChunkName: "aaa" */ '@/pages/Aaa'), {
// 	app,
// 	modelsFunc: () => [import(/* webpackChunkName: "aaaModel" */ '@/pages/Aaa/models')],
// })

interface ImondelConfig {
  app: any;
  modelsFunc: () => Array<any>;
}
interface IwebDvaUtils {
  asyncComponent: (
    Cmp: JSX.Element | Function,
  ) => (
    importFunc: () => any,
    mondelConfig: ImondelConfig,
  ) => React.ComponentClass<any, any> | React.FunctionComponent<any>;
}
const webDvaUtils: IwebDvaUtils = { asyncComponent };
export default webDvaUtils;
