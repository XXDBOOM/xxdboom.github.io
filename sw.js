/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/02/Copy 'xxx' to effectively final temp variable 问题解决/index.html","3eefbb4d1066d2c101b87e6b315d3ced"],["/2022/11/14/221114cloud/index.html","0ed42ad558a191d2cd2533343f4cdf3c"],["/2022/11/21/221121spring/index.html","61e7a4ceddaba18b24cfb560c3a71d5f"],["/2023/02/03/20230203-lost-requst-in-asyn/index.html","4c5269a9b83ef7474b678b2ae7eab299"],["/2025/12/25/maxDepth/index.html","808ad08018211d0ce79f7e27553fc1ac"],["/2025/12/26/Automatic memory management/index.html","940534dde83767dd13c8c079479e6665"],["/2026/01/13/docker compose 项目部署流程/index.html","d09d43eab345ce549fea50735f0044f1"],["/2026/01/14/完整Docker部署全流程教程（Windows本地 → Ubuntu服务器）/index.html","e39b4cbad6eb52c860930e34b8f304bc"],["/2026/02/04/Spring-的事务管理机制输出的警告日志/index.html","a8b3f30fb6ad8531ce8e18ffe9f53ac7"],["/2026/02/04/数据库字段命名规范及核心原因/index.html","c6edae50935889725887be6fda761b4c"],["/2026/02/05/Java-并发编程核心知识点笔记/index.html","25ce8d2ef5a22ad0fa8a60c15da15493"],["/2026/02/06/数据库索引/index.html","3e11a4e2b9c27064bf8c5812e0fb1598"],["/2026/02/28/事务、悲观锁、乐观锁、Redis-锁/index.html","fe88b7edbbec0cc5dc08511abcc227e7"],["/2026/03/13/docker安装轻量的向量模型/index.html","051af5a3adf3ff31bea12f3026d42b00"],["/2026/03/20/异步批量导入中请求上下文传递/index.html","b90e553f558a9cff4a9d6bc265a5d8a9"],["/2026/03/20/支付中心-支付方式go重构/index.html","ed65e984a0a784297f43bd877b5a8eb7"],["/archives/2022/11/index.html","086f39805aaf535b1d40dcf5de5ab41c"],["/archives/2022/index.html","eb25c3da851e00e4e2c032e9d7079e9a"],["/archives/2023/02/index.html","490705cba4932fd398becddacacbfe2b"],["/archives/2023/index.html","88041adbb249026907ec4032d6198100"],["/archives/2025/12/index.html","35e32ce25b01d2761e7d7537cd01258c"],["/archives/2025/index.html","4346c2c862910a5878c22557aa3c62d2"],["/archives/2026/01/index.html","d67268910c7caed8c930198ade476949"],["/archives/2026/02/index.html","ddd2ceea208f908bc90c526db1861b57"],["/archives/2026/03/index.html","160969bff6d0c0888efd0ce0a54eac3f"],["/archives/2026/index.html","b6b767b46829e2940cbbc2c82cb333d5"],["/archives/index.html","00d83ac47a63a820b2c2db8cb17aa30c"],["/archives/page/2/index.html","9b99a23f0a6740c09d5ea27b5e093be3"],["/css/index.css","54b8792dc1a1bfb0cb2f37b04e51d5b5"],["/css/iocfont.css","eaaa959e09086df8d8d066db3690f623"],["/css/mycss.css","a7a42b950e3d61cce2e3cd46c1d7ac62"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/bbb.jpg","43f0e000543d8709f36a94951873344c"],["/img/bored.jpg","5b8d9e2b47d5cbe0690671c674d82d8d"],["/img/darksoul-head.jpg","0895c0843a02fdaebce07cf784faec34"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/thunder.jpg","0c78a0816762ee057c2f077eea93a5ac"],["/index.html","a8cb007f214cf751b745060190f5e6b8"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/page/2/index.html","08ff8010d2b7e7f2be9fce871761cc05"],["/sw-register.js","115a290def93775aeb55aa3cfc29b356"],["/tags/ai/index.html","98c26b888f2b564557b2af66be9ffd84"],["/tags/algorithm/index.html","12c344090870fca8a034215d3d7ff419"],["/tags/db/index.html","3dfe254d63e07d3230d36f68349ef5f7"],["/tags/docker/index.html","d6f914eaf42605a9185ece6b1c9ff9f9"],["/tags/go/index.html","635ab41bc08c05f65af0e73dccba4488"],["/tags/index.html","da5c307ffc44378a1bd2c1e68a226544"],["/tags/java/index.html","a6e94c94865b55a00885635d912c3b6e"],["/tags/openfeign/index.html","76030635f365040ff938094e08d9ceab"],["/tags/redis/index.html","3d0ae3b7f995e0c92bca92a63a1d5825"],["/tags/spring/index.html","6dd63604876c9a49d4d86cbe9f64a504"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
