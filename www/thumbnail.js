'use strict';

var Thumbnails = {},
	emptyFn = function() {};

function optionsToThumbnailArgs(options) {
	if (!options.targetPath) {
		return [options.srcPath, options.width, options.height];
	} else {
		return [options.srcPath, options.targetPath, options.width, options.height];
	}
}

Thumbnails.PERSISTENCE = 1;
Thumbnails.TEMPERATE = 0;

/**
 * 配置缩略图存放位置的根路径。
 *
 * 关于图片的路径，请参考[Cordova Plugin File](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md)
 * 
 * @param  {Number} persistenceOrTemp 1表示采用PERSISTENCE，0表示采用TEMPERATE。
 * @return {[type]}                   [description]
 */
Thumbnails.config = function(persistenceOrTemp) {
	cordova.exec(emptyFn, emptyFn, "Thumbnails", "config", [persistenceOrTemp]);
};

/**
 * 生成缩略图。
 *
 * 关于图片的路径，请参考[Cordova Plugin File](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md)
 * 
 * @param  {String} srcPath   图片路径。
 * @param  {Number} width     缩略图宽度。
 * @param  {Number} height    缩略图高度。
 * @param  {Object} options   缩略图其他配置。
 * @param  {Function} successFn 成功时的回调函数。
 * @param  {Function} failFn    失败时的回调函数。
 * 
 * @return {Promise} 返回promise。
 */
Thumbnails.thumbnail = function(srcPath, width, height, options, successFn, failFn) {
	if (typeof options === 'function') {
		failFn = successFn;
		successFn = options;
		options = {};
	}
	options = options || {};
	successFn = successFn || emptyFn;
	failFn = failFn || emptyFn;

	options.width = width;
	options.height = height;
	options.srcPath = srcPath;

	cordova.exec(successFn, failFn, "Thumbnails", "thumbnail", optionsToThumbnailArgs(options));
};

window.Thumbnails = Thumbnails;

module.exports = Thumbnails;