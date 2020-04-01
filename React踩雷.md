# React踩雷

安装node

安装npm

​	安装淘宝镜像cnpm

前面都忘了截图

![image-20200314130142033](C:\Users\laoduan\AppData\Roaming\Typora\typora-user-images\image-20200314130142033.png)

创建文件项目



## 开始使用React

配置html-webpack-plugin插件，就可以自动打包了

![image-20200327172709856](C:\Users\laoduan\AppData\Roaming\Typora\typora-user-images\image-20200327172709856.png)

![image-20200327172524914](C:\Users\laoduan\AppData\Roaming\Typora\typora-user-images\image-20200327172524914.png)

后面在安装babel的时候按照视频里面的方法一直出错

![image-20200327172424804](C:\Users\laoduan\AppData\Roaming\Typora\typora-user-images\image-20200327172424804.png)



*在网上找了很多帖子，大概明白是因为bebel7的时候很多约束和包名都发生了变化。babel-loader的8.X版本需要配合babel-core7.X的版本来说使用*

这时候需要

1. 先卸载低版本的babel-core，再安装7.X版本的@babel/core
2. 更改.babelrc里面的代码，之前的env变为@babel/preset-env，react变为@babel/preset-react，transform-runtime变为@babel/plugin-transform-runtime

之后再打包就好了




打包图片出错
报错信息为：Error: Cannot find module 'file-loader'
经过排查发现是因为代码里面的“loader: 'url-loader?limit=8192'”
问号后面的出错了，把后面的限制删除以后就可以用了
