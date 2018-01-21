# com.sinosoft.cordova.thumbnail

```
//cordova plugin add http://182.92.131.143/mobileoa/cordova-thumbnail-plugin.git
```

Verwendung：

```
window.Thumbnails.thumbnail(srcPath, width, height, function success(path) {
	console.log("Das generierte Vorschaubild wird in gespeichert：" + path);
}, function fail(error) {
	console.error(error);
});
```

`window.Thumbnails.thumbnail(srcPath, width, height, [options,] successFn, failFn)` Die zu erklärenden Parameter：

* `srcPath` Bilderpfad
	
	Pfadformat ：`file:///path/to/spot`

	In Verwendung [Cordova File plugin](https://github.com/apache/cordova-plugin-file/Projekt, das du benutzen kannst `FileEntry.toURL()`Hol es dir`file://`Anfang des Speicherpfads

* `width` Thumbnail Breite
* `height` Thumbnail Höhe
* `options` Optionen

	* `toPath` Thumbnail-Speicherpfad, falls nicht angegeben, erstellt nach dem Zufallsprinzip eine Dateispeicher erzeugte Thumbnails.
	* `srcPath` Bilderpfad
	* `width` Thumbnail Breite
	* `height` Thumbnail Höhe
	* `successFn` Callback Success
	* `failFn` Callback Error

* `successFn` Funktion Callback Success
* `failFn` Funktion Callback Error

## Android Verwenden Sie Plug-Ins, um auf Dinge zu achten

Willst du da sein? Android Geben Sie den Pfad für die Miniaturansicht nicht an config.xmlFügen Sie die folgende Konfigurationsdatei hinzu：

```
<preference name="AndroidPersistentFileLocation" value="Internal" />
```

Gründe [Cordova File plugin](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md#android-persistent-storage-location) in der Beschreibung