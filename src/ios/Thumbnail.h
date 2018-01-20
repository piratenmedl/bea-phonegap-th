//
//  Thumbnail.h
//  ThumbnailTest
//
//  Created by Jacking Liu on 14-9-14.
//  Copyright (c) 2014年 中科软应用系统一部. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface FileUtil : NSObject

+ (NSURL *) applicationDataDirectory;

@end

@interface Thumbnail : NSObject

+ (UIImage *) thumbnailToUIImage:(NSString *) imageURL size:(CGSize)size;
+ (void) thumbnail:(NSString *)imageURL size:(CGSize)size toURL:(NSString *) toURL;

@end

@interface ThumbnailCordovaPlugin : CDVPlugin

- (void)thumbnail: (CDVInvokedUrlCommand*)command;
- (void)config: (CDVInvokedUrlCommand*)command;

@end