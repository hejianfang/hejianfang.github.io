**简述cookie、localstorage、seesionstorage**

|名称|大小	|网络请求	|生命周期<br/>|
|:--:|:--:|:--:|:--:|
|cookie|4kb左右|每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题	|默认是关闭浏览器后失效, 但是也可以设置过期时间<br/>|
|localstorage|5M|仅在浏览器中保存，不参与和服务器的通信	|除非手动被清除，否则永久保存<br/>|
|SessionStorage|5M|仅在浏览器中保存，不参与和服务器的通信	|仅在当前会话(窗口)下有效，关闭窗口或浏览器后被清除, 不能设置过期时间<br/>|