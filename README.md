# com.sinosoft.cordova.thumbnail

这个插件实现了生成图片缩略图的功能。支持Android和iOS。

添加插件的方式：

```
cordova plugin add http://182.92.131.143/mobileoa/cordova-thumbnail-plugin.git
```

使用方式：

```
window.Thumbnails.thumbnail(srcPath, width, height, function success(path) {
	console.log("生成的缩略图存放在：" + path);
}, function fail(error) {
	console.error(error);
});
```

`window.Thumbnails.thumbnail(srcPath, width, height, [options,] successFn, failFn)`的参数讲解：

* `srcPath` 图片路径
	
	支持的路径格式：`file:///path/to/spot`。

	在使用[Cordova File plugin](https://github.com/apache/cordova-plugin-file/)项目中，可以使用`FileEntry.toURL()`获取到`file://`开头的文件路径。

* `width` 缩略图的宽度
* `height` 缩略图的高度
* `options` 其他的配置参数对象

	* `toPath` 缩略图存储路径，如果不指定，则会随机创建一个文件存储生成的缩略图。
	* `srcPath` 图片路径
	* `width` 缩略图宽度
	* `height` 缩略图高度
	* `successFn` 生成缩略图成功的回调函数
	* `failFn` 缩略图生成失败的回调函数

* `successFn` 缩略图生成成功的回调函数
* `failFn` 缩略图生成失败的回调函数

## 在Android上使用插件要注意的事情

要想在Android上不指定缩略图存放的路径，需要在`config.xml`文件中添加上以下配置：

```
<preference name="AndroidPersistentFileLocation" value="Internal" />
```

原因请参考[Cordova File plugin](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md#android-persistent-storage-location)中的说明。