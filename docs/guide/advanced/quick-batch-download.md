# 通过配置一键下载

## 简介  
先说一下，我们一键下载的背景是什么。先想象一下以下场景：    
平时刷视频，`我`把感兴趣的内容分门别类放进收藏夹。  
每隔一段时间，`我`会打开`BilibiliDown`，  

选择收藏夹1、`查找`、`下一页`、`下一页`、菜单批量下载、关闭页面、`下一页`、`下一页`、菜单批量下载...直到弹出提示已下载  

选择收藏夹2、`查找`、`下一页`、`下一页`、菜单批量下载、关闭页面、`下一页`、`下一页`、菜单批量下载...直到弹出提示已下载  

选择收藏夹3、`查找`、`下一页`、`下一页`、菜单批量下载、关闭页面、`下一页`、`下一页`、菜单批量下载...直到弹出提示已下载  
...

在这里，我们的目标就是通过只点一下，模拟实现上述的场景。  

## 操作  
+ 目前`一键下载`在操作菜单里的位置是这样，不排除以后会有更改。  
![](/img/batchDownload.png)

+ 程序会扫描`config`文件夹下`batchDownload`开头、`.config`结尾的文件，你可以在这些配置之间快速切换。  
![](/img/batchDownload-select.png)  

+ 接下来的重点是配置`config/batchDownload.config`


## 配置  
该功能目前还在试验阶段，目前先放出实用性的样本配置。   
配置请以`utf-8`编码方式保存。  

下面是下载`收藏夹1`、`收藏夹2`、`收藏夹3`，   
从第`1`页开始，  
在遇到已经下载过的视频或者页数等于`10`的时候，停止查询，    
在出来的结果里面，会把没有下载过的视频提交到下载队列。
```
[favorite:收藏夹1,收藏夹2,收藏夹3]

start.page = 1
stop.condition = page:10
stop.condition = _:downloaded

# 表示 只下载没有下载过的
download.condition = _!downloaded
# 表示无条件下载，根据情况注释或去掉注释 
#download.condition = _:_
# 表示不包含边界（停止时的那个BV）
stop.bv.bounds = exclude
# 表示在每下完一个收藏夹，就弹出一次提示
stop.alert = true


# 一键下载该URL对应的合集
[url:https://space.bilibili.com/{用户ID}/favlist?fid={收藏夹ID}&ftype=create]
stop.condition = page:10
stop.condition = _:downloaded
download.condition = _!downloaded
# start.page、stop.bv.bounds可以缺省，此时取默认值
# xx.condition 可以为多个，它们之间是`或`的关系
```

## 注意事项
+ `[favorite:收藏夹1,收藏夹2]`跟上`配置A`，相当于   
    `[url:{收藏夹1链接}]`跟上`配置A`  +   
    `[url:{收藏夹2链接}]`跟上`配置A`
+ `[favorite:收藏夹1,收藏夹2,收藏夹3,...]`中分隔符是英文`:`和`,`，不要与中文弄混
+ `[favorite:收藏夹1,收藏夹2,收藏夹3,...]`中收藏夹的名字不能有`,`  
+ `[favorite:收藏夹1,收藏夹2,收藏夹3,...]`中，如果你的收藏夹有多个名字为`收藏夹1`，那么这几个收藏夹都会下载  
+ 为了解决以上问题，你可以将其转化为`[url:{收藏夹链接}]`的格式  
+ `[url:{url链接}]`中的链接只能是支持分页查询的链接