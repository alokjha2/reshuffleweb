'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8e5c3f557b2188e43784cae0cb981c5c",
"assets/AssetManifest.bin.json": "b1d74f10a16275b565b2200d76df4feb",
"assets/AssetManifest.json": "c765b1bca83a341e6afc65c63c0f64b6",
"assets/assets/brain_animation.json": "40f03f68dceff4fc59d227f81bd03441",
"assets/assets/images/angry.jpg": "a05d41d00d6d557f106a669fabc9b6fb",
"assets/assets/images/apj.jpg": "9547f21da738e70b21939a106fe064cd",
"assets/assets/images/apple.jpg": "04c02a26295ec48ace2991fd5b392bd4",
"assets/assets/images/azaad.jpg": "6f0e86856799ee407c7eb3c3f162cb06",
"assets/assets/images/background.jpg": "3971f571deef4fada14d0f564a24ffe7",
"assets/assets/images/berry.jpg": "a335ef800b4ff942dda2ea729caffb60",
"assets/assets/images/bg.jpg": "54c41d100d211a499a9a3cfd178f66a8",
"assets/assets/images/bird2.png": "7941eb7a26a0372abcb32cfe8dc13a26",
"assets/assets/images/blue.png": "b5e6dbf6645ab9fc76e1c9a13dbffbde",
"assets/assets/images/bose.png": "405b026543fa0204c465637570066210",
"assets/assets/images/card.jpg": "98ced816e55e3d315e10835fe866db52",
"assets/assets/images/charlie.jpg": "c610ce2c12edfc9cbfd80695046d14c6",
"assets/assets/images/cherry.jpg": "c44cce332550996960a6f4f951dced28",
"assets/assets/images/front.jpg": "255970ad98e122341b237ad5f45114e7",
"assets/assets/images/gandhi.jpg": "2f2ad0937b92b67abf2ae008834d891b",
"assets/assets/images/gandhi1.png": "a6f053a5b190e7ab87002ea7eddcdc32",
"assets/assets/images/green.png": "61d931eaafd4eb9f42e7bea4b2b6be1d",
"assets/assets/images/greenchilli.jpg": "e1b35072f101359ecd1c072b86e94eef",
"assets/assets/images/guava.jpg": "e929373659261a5453d6ec3cfc8df36f",
"assets/assets/images/hand.jpg": "3ddd7d1e1ca546fd043b4e6af4284475",
"assets/assets/images/hatori.jpg": "64e206a238fe6870f6c9c853156cf548",
"assets/assets/images/image_cover.jpg": "564f661a39c5eaceeb39d63698ea9b9b",
"assets/assets/images/jerry.png": "3dd9173f9c898e1af556ee132e0f0ea5",
"assets/assets/images/kanachi.jpg": "3a207ccfb3011ada76a9a95af1d9ed58",
"assets/assets/images/kishor.jpg": "529843f9741592a9ba20d9510f12ee8b",
"assets/assets/images/licenses.txt": "d3d176a9011ae79b73a6f25d09ff536c",
"assets/assets/images/minion-fotor-bg-remover-2024042384650.png": "89f83f840fc9acb4922129a25d14e3de",
"assets/assets/images/minion.jpg": "5325eff16ee9eaa2e3fa4ac47bc3c771",
"assets/assets/images/mother-fotor-bg-remover-2024042384137.png": "62b02bf73d43ff4b833374c29876a317",
"assets/assets/images/mother.jpg": "f9d7e03d69215364072aa7bec1dd9b40",
"assets/assets/images/mouse.png": "6c233ae6470d036e0ce475b765095f18",
"assets/assets/images/onion.jpg": "3879e6d542aa037c0e36fa5eca7997f9",
"assets/assets/images/parrot.jpg": "3fab0608aaff84a156a4a30c6b93eedc",
"assets/assets/images/perman.jpg": "6e08da2e7777c9bc35b8cadaf18d59ce",
"assets/assets/images/pick.png": "d4c0c473416bb09ffadc94f55859f671",
"assets/assets/images/pineapple.jpg": "d8902a7be0b719330ec4473345f97468",
"assets/assets/images/pooh-fotor-bg-remover-2024042384115.png": "b77391dcef7e51f8907c07eae0d8f038",
"assets/assets/images/pooh.jpg": "e8f1b898e93a2cfa5034c1e6f6387d3f",
"assets/assets/images/purple.png": "f055d0c3e851abae41efb346f11907cb",
"assets/assets/images/question.png": "d68ddab33b600312931544ca1781fcb9",
"assets/assets/images/question2-removebg-preview.png": "6fbcd674c2dd15158261bb56a83b4171",
"assets/assets/images/question2.jpg": "d35f3f139c5f7b561678e24f73a5accd",
"assets/assets/images/rajesh.jpg": "8e03fc91c12e619a396fe6fbdbfa6178",
"assets/assets/images/red.png": "66dd652109f6feaee5a9b708d1041187",
"assets/assets/images/redchilli.jpg": "6f446b723f3eddb16870e3a47ee9baf8",
"assets/assets/images/shinjo.jpg": "b66c7c6212041dcefb1a8c0445a95da0",
"assets/assets/images/tom-fotor-bg-remover-2024042384043.png": "0aff44e5f5511e67ad8af331f1ff9336",
"assets/assets/images/tom.jpg": "58d5051394061e8878be4a73658a65f8",
"assets/assets/images/trump-fotor-bg-remover-2024042384715.png": "e96acf336d2ea27ef8f091cd0208c228",
"assets/assets/images/trump.jpg": "021ae0b72f8cfbd5bd06bf19a94f1fdf",
"assets/assets/images/yellow.png": "dcb91d013b67145a4773a6de28baf2e4",
"assets/assets/sounds/90s-game-ui-6-185099.mp3": "19a355e0f7d0fcb8b68808e7309109d7",
"assets/assets/sounds/90s-game-ui-7-185100.mp3": "be55861867a897083fa85957786abfc7",
"assets/assets/sounds/flip.mp3": "b1194d4fbd2b4686a0899a346d7f16c3",
"assets/assets/sounds/flipcard.mp3": "158b391a0a704c7788a577bc8d5d0e06",
"assets/assets/sounds/game-start-6104.mp3": "3035aeaae7e077554883d1ba7762adf9",
"assets/assets/sounds/out.mp3": "9a6ebd59266412d4c124ef83f578c7cd",
"assets/assets/sounds/robot-compute-beeps-1-171532.mp3": "22de3dae436dc7d22a3b3ee9dde09e22",
"assets/assets/sounds/start.mp3": "341dfc6e8e249e29c400547b6b41a107",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5de629fa44661a4f7ae12133619ba1af",
"assets/NOTICES": "fe8a1165cec0616594f70de2fe090012",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"index.html": "5a51e8b67a0689121e8bb2a348bcfe09",
"/": "5a51e8b67a0689121e8bb2a348bcfe09",
"main.dart.js": "eabb07adae8a341048de2700d5f97204",
"manifest.json": "6027d0c29298b3ba156e5152b13aff06",
"version.json": "db9b455094bb834fa4b58fd29e7fc261"};
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
