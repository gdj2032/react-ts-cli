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
#### pages `存放所有的用户页面`

+ 多页面组结构如下 `比如列表，详情，编辑等都在一个组里面, 根目录下不要有index.tsx`
  > + 页面组目录/ 
  >   + components/ `该页面组下公共组件目录`
  >   + 子页面目录
  >     + index.tsx `子页面代码`  
  >     + style/ | index.scss ` 如果有多个样式表样式表需要放到style目录下，否则使用index.scss, 切忌把一堆scss和tsx写到同一个目录！`
  >     + 其他页面.tsx `某一个页面自己单独的组件无需创建component目录` 

+ 单页面组下面无需再细分子页面目录，直接使用 `多页面组中子页面目录结构即可`
  > + 页面目录/
  >   + index.tsx `子页面代码`  
  >   + style/ | index.scss ` 如果有多个样式表样式表需要放到style目录下，否则使用index.scss, 切忌把一堆scss和tsx写到同一个目录！`
  >   + 其他页面.tsx `某一个页面自己单独的组件无需创建component目录` 

+ 新增的页面需要修改 /pages/index.tsx中导出代码 （以后考虑自动生成导出代码）
  + 导入页面组件
  + `pagesPathes` 中定义页面路径变量，此变量可以通过 `import { PathConfig} from '@/constants'`来获取
  + `pagesRoutes` 设置页面路由

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