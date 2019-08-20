# utils for webdva

> asyncComponent

- usage

```js
const Aaa = dddd.asyncComponent(Lol)(
  () => import(/* webpackChunkName: "aaa" */ "@/pages/Aaa"),
  {
    app,
    modelsFunc: () => [
      import(/* webpackChunkName: "aaaModel" */ "@/pages/Aaa/models"),
    ],
  },
);
```
