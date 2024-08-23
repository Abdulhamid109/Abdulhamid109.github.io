'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f2a31c08ccc911a3c6c7542fb0ce1063",
"assets/AssetManifest.bin.json": "9e9ef924c7f47e6372ac5035b54a5eeb",
"assets/AssetManifest.json": "c1e163d80ab32bd891554cdf98102fba",
"assets/dataimages/digitalRationSpash.jpg": "b16fcc6d4d4358e7426a98b972af673d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ecb496cbeb1514d9458c2fc10d85ed83",
"assets/images/calender.png": "ba2059a61141a06902a6e4f83607d94f",
"assets/images/complaint.jpg": "16cc5c14883eea3db864a03b487d9a2e",
"assets/images/feedback.png": "1aec5b329da0b71d9206752c49d43fdc",
"assets/images/im1.jpeg": "c1b7a746d75346c7ec98400309065393",
"assets/images/im3.png": "455766649a1eeab9988728da4ad67130",
"assets/images/loginSignupdesign.jpg": "c59ba26aea114a18fca860d3cf334ce2",
"assets/images/management.png": "49cd43089247baa69acf80cb7b8c1743",
"assets/images/pradhan-mantri-garib-kalyan-yojana.jpg": "8c1fbb0fe11ad2c7ba8644100fadbc04",
"assets/images/pradhanmantri-gareeb-kalyan-yojana.jpg": "7060974e80300109659d199efdd4882c",
"assets/images/splashPic.jpg": "45ff07325f2aac878627d930a3443dc5",
"assets/images/user.jpg": "15127880e27baa9a4b958c752e922641",
"assets/NOTICES": "96da4c2fd5c59c461dee870742279746",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8521152765ac463fb43cc71bb7a89163",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_emoji_feedback/assets/classic_awesome.svg": "6ef07562f29101a70bf3fc100660bfe2",
"assets/packages/flutter_emoji_feedback/assets/classic_bad.svg": "780bcf1cf594a6b492967d91307ed064",
"assets/packages/flutter_emoji_feedback/assets/classic_good.svg": "f2ac6543155e1370d7abea00d8b63ff2",
"assets/packages/flutter_emoji_feedback/assets/classic_terrible.svg": "47b9d9eaa785b73e674f97061bdbfa16",
"assets/packages/flutter_emoji_feedback/assets/classic_very_good.svg": "6c6ffb3a6a4c1dcd5adb56be222b7474",
"assets/packages/flutter_emoji_feedback/assets/flat_awesome.svg": "87b615239f89e9ac6a7f524bb7049a0c",
"assets/packages/flutter_emoji_feedback/assets/flat_bad.svg": "3dbdced0f53be2c8595d63a469a7fe04",
"assets/packages/flutter_emoji_feedback/assets/flat_good.svg": "af2e7cbeb973e46aff6b6f7b3616f942",
"assets/packages/flutter_emoji_feedback/assets/flat_terrible.svg": "c0d7a6b77e083c8636c17950349ce401",
"assets/packages/flutter_emoji_feedback/assets/flat_very_good.svg": "d67ffdb07208539701ef35b272c9b9ab",
"assets/packages/flutter_emoji_feedback/assets/hd_awesome.svg": "c8187fcd29f7dc9fc13e9f3be469a5e9",
"assets/packages/flutter_emoji_feedback/assets/hd_bad.svg": "293ea8eee3358a1911aad97a397b8565",
"assets/packages/flutter_emoji_feedback/assets/hd_good.svg": "31ba501e13250396d7704ca551203bef",
"assets/packages/flutter_emoji_feedback/assets/hd_terrible.svg": "1a0819da178e3c410a7b364d6f816e81",
"assets/packages/flutter_emoji_feedback/assets/hd_very_good.svg": "e4834557f40e22d92ae80caabace6045",
"assets/packages/flutter_emoji_feedback/assets/three_d_awesome.svg": "3a0b77d364b79cf0fe5ef5ca85586fed",
"assets/packages/flutter_emoji_feedback/assets/three_d_bad.svg": "8186407716be2096c16077d00d9abce0",
"assets/packages/flutter_emoji_feedback/assets/three_d_good.svg": "9aaf87f5f209510833c59629e7fd05bc",
"assets/packages/flutter_emoji_feedback/assets/three_d_terrible.svg": "a7ed9fbba9b0df8d27851e312bd90f77",
"assets/packages/flutter_emoji_feedback/assets/three_d_very_good.svg": "bca787a0f30160f5342b3b214b7504cc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8b55a598cebb27ce9b146af6120271b7",
"/": "8b55a598cebb27ce9b146af6120271b7",
"main.dart.js": "7bc47fdd21472aeaea096091eb24fba3",
"manifest.json": "e9b25fea34d1201bc4007d3f94e81a0f",
"version.json": "68efc36ea57d96b8e5367b5c77f78f3d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
