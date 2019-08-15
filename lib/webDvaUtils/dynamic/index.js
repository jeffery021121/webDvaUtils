import React, { lazy, Suspense } from 'react'
import { Loading } from './Loading.js'

import { HocAsyncRegestModel } from './dynamic/HocAsyncRegestModel.js/index.js'

const createCom = (LazyCom) => (props) => {
	const { deadLine, LoadingCom, ...otherProp } = props
	return (
		<Suspense fallback={<Loading deadLine={deadLine} LoadingCom={LoadingCom} />}>
			<LazyCom {...otherProp} />
		</Suspense>
	)
}

export default (LoadingCom) => (dynamicComponentFunc, asyncProp) => {
	// asyncProp = { app, modelsFunc }
	const LazyCom = lazy(dynamicComponentFunc)
	const Com = createCom(LazyCom, LoadingCom)
	if (!asyncProp) return Com
	return HocAsyncRegestModel(asyncProp)(Com, LoadingCom)
}
// const TsTest = asyncComponent(Loading)(() => import(/* webpackChunkName: "TsTest" */ '@/pages/TsTest'), {
// 	app,
// 		modelsFunc: () => [import(/* webpackChunkName: "TsTestModel1" */ '@/pages/TsTest/models')],
// 	})