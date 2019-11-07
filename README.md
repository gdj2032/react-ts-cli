# 页面基础框架 目录结构及存放规则
#### constants
  + appInfo.tsx `网站名, LOGO等信息`
  + api.tsx `API_HOST` 等信息
#### styles `全局Style`
#### images `图片资源`
#### service `所有服务的代码`
  + 服务的代码必须按照服务的业务逻辑进行归类并存放到不同文件中。
  + 文件名规则 {服务类名}.service.tsx， 里面所有类型通过普通导出进行导出， 服务方法 打包成对象进行default导出， 参考user.service.tsx
  + 新增服务之后要到 index.tsx中进行导出.`外部代码都从 service/index.tsx导入服务和类型。`
#### components `全局组件都分目录存放在此目录下， 每个组件目录参考单页面目录结构`
#### pages `存放所有的用户页面`
#### 全局常量访问
+ ###### REDUX
  + redux store: `全局Redux的Store是 reduxes目录的默认导出`
  ```tsx
  import Store from '@/reduxes'
  ```
  + redux 中定义的Type, Action 都已经从 reduxes中按照redux分组导出,只需要导入使用即可
    ```tsx
    import {xxxRedux} from '@/reduxes'
    类型： const varible : xxxRedux.TypeXXX = ...; //类型
    xxxRedux.xxxAction....(); // Action
    ```

+ ###### Service
  + 服务：服务已经按照分类导出
  ```tsx
  import {xxxServices} from '@/service'
  await xxxService.xxxFunc();
  ```
+ ###### 页面路径 `所有页面路径只要按照以上新建页面的步骤，都可以通过constants中导入得到`
  ```tsx
  import {PathConfig} from '@/constants'
  const HomePath = `PathConfig.xxxx`
  ```
+ ###### API_HOST, APPNAME, LOGO都可以从constants中导入得到