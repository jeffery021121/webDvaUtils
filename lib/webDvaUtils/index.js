// @ts-ignore
import cwebDvaUtils from 'webdvautils/lib/webDvaUtils'
// declare namespace webDvaUtils {
//   type asyncComponent = () => () => void;
// }
// const Aaa = dddd.asyncComponent(Lol)(() => import(/* webpackChunkName: "aaa" */ '@/pages/Aaa'), {
// 	app,
// 	modelsFunc: () => [import(/* webpackChunkName: "aaaModel" */ '@/pages/Aaa/models')],
// })

interface ImondelConfig {
  app: any
  modelsFunc: () => Array<any>
}
interface IwebDvaUtils {
  asyncComponent: (
    Cmp: JSX.Element | Function,
  ) => (importFunc: () => any, mondelConfig: ImondelConfig) => React.ComponentClass<any, any> | React.FunctionComponent<any>
}
const webDvaUtils: IwebDvaUtils = cwebDvaUtils
export default webDvaUtils
