'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8ce5c36596da8d240027267128b1a1b2",
"assets/AssetManifest.bin.json": "24250670dde861dbe4d3fdd9f697202d",
"assets/AssetManifest.json": "92e9aee8d23b5cefc33a64208ba2ec43",
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
"assets/assets/images/logo.png": "1c42055abf1408173992c563ee401be4",
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
"assets/fonts/MaterialIcons-Regular.otf": "105d456ed694e533e3be32f59f2eaebf",
"assets/NOTICES": "a9bf46f907e998ac47d016b178207bdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/zego_express_engine/assets/ZegoExpressWebFlutterWrapper.js": "df737e8a57404e7709cdc264803850d2",
"assets/packages/zego_uikit/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_reject.png": "f967ba275f67032b14a0383d8eff0779",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_video.png": "7246561fa86cc404de866e76d9737110",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_voice.png": "24970c6bf9acf13244d9b749e3ea8b4f",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_normal.png": "0a0decead6773a2ae1b1fc726cb2dba7",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_off.png": "fab9cc0caa1ed63244039a2ac50af5a4",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_normal.png": "e2788b3c2302b8b561e29c064e9a99ff",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_off.png": "4eda86a0a0a6ae75cf8521f63834a54d",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_speaking.png": "16b678656c45cd19cd11baec8c8ac751",
"assets/packages/zego_uikit/assets/icons/2.0x/message_fail.png": "d0fb57427a0074f574aef0d474f213d8",
"assets/packages/zego_uikit/assets/icons/2.0x/message_loading.png": "dc31511440f51dbf93422c6288644247",
"assets/packages/zego_uikit/assets/icons/2.0x/nav_close.png": "faf29b14204b46842cc095efc4131686",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_normal.png": "f9749113cfcdcf507dba5962aa71efec",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_off.png": "c0901dd816919eb4e6ffffd5f7239184",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_end.png": "cb7886e14a43a4d7c6315025032a0272",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_flip_camera.png": "a5e90392059a2957af9e255023ab7c73",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_normal.png": "bb82e53aa5e2da3ee06e82f1d788c992",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_off.png": "0e0d07c9e48304166ba2963ce85c1cba",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_checked.png": "86a57573701177bf50526ddf8919257d",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_normal.png": "e8cf0cb5b4ae57f3634325200b340aef",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_bluetooth.png": "d24d7aeca55782323f36427f9f68889f",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_normal.png": "f280aecd1664df5ddb9b41a3265fbc96",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_off.png": "3d36462e98a3dd959cdede0b81c3d311",
"assets/packages/zego_uikit/assets/icons/2.0x/send.png": "ade012f5e004a41459da5d44bfd2957f",
"assets/packages/zego_uikit/assets/icons/2.0x/send_disable.png": "8e810767d851b09a84eb05580e7e83d4",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_start.png": "dab73df5268a057e660fcab1861a11ca",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_stop.png": "28751ac6943d6195c81351dd954c9d7e",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_off.png": "a5c8ecf7492e0f8a1487513a4c0ceef9",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_on.png": "ceb2dfe462b738ad547939b553ff314d",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_close.png": "e5d96585b746432238b0c6eec6857526",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_open.png": "655a9f372024d96fca06c6a39d7e80d7",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_off.png": "ab6fdc4bef804d7470fa95ab724a3493",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_on.png": "85b79b0c60b1781019350176881d2006",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_speaking.png": "017fb1acbfeafeab17d3119af65dc61b",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_wifi.png": "d201ad7f9e9401f7fe60f79cd69e807c",
"assets/packages/zego_uikit/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_reject.png": "50fe4208eaf232329d725b6be760ad05",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_video.png": "b3fd4d33ffcc9e0c05ac8353657faf0f",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_voice.png": "f191776d49da7ce3d3f06a557aee74ea",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_normal.png": "e0eecc41b8db3333d6e0b73c71af64fb",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_off.png": "0527fda34af9d6369549d7ae54ec467a",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_normal.png": "8a0ab49718e61d010bf1830f697511ec",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_off.png": "a7489c5b6deafcb4eb10a02226bc3d9b",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_speaking.png": "e1cea5ddeba80a0a16e608f75dcceac5",
"assets/packages/zego_uikit/assets/icons/3.0x/message_fail.png": "1904f578c97fc26b7ab85980495bb439",
"assets/packages/zego_uikit/assets/icons/3.0x/message_loading.png": "567cf9465ee6f9b501bb6438207ae3aa",
"assets/packages/zego_uikit/assets/icons/3.0x/nav_close.png": "6dd30082ee4dd26b634f2d107a320cda",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_normal.png": "be38e8cacecd08727f98b23a2cc1b297",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_off.png": "a1676a233c3fdf883b1b9525c52272c6",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_end.png": "c0dc110bb095effd61589390546351d3",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_flip_camera.png": "06b289a7d6de55c6f7a5b43d7244afce",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_normal.png": "93436ec1f8389307c037521ce840f0a2",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_off.png": "d7b3619803222f891f8d1487e2dd95af",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_checked.png": "c3162cc37bc41fb13957b70b06476c3e",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_normal.png": "45f7fe05bac7f3c1106d63c1078d7a7f",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_bluetooth.png": "d15c31d947ce16f9f08ed2066542c629",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_normal.png": "2037c7dec37882bf30049d75dd3740c4",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_off.png": "4f9bd995c5123400a3f13b4e4f1ed90c",
"assets/packages/zego_uikit/assets/icons/3.0x/send.png": "024f9c9faa2127335926a4037e23a684",
"assets/packages/zego_uikit/assets/icons/3.0x/send_disable.png": "61577087db110346c44498944d1f491c",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_start.png": "be1c3f30eef1e9777618df830e8c406f",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_stop.png": "210873b802db239aec4c790855ef6d60",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_off.png": "5275a3c18503c20b5a6238450272d2be",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_on.png": "7369f517f02618f0ba7fe5c1e4fe55fd",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_close.png": "8dafedc394aa80ab9370073413e89be7",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_open.png": "e4e91ee80390a53294a20c1e12dd783c",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_off.png": "33d5afecd9378cf570271818d4c56667",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_on.png": "2b8b980b6e013bcfdbb0b58f1e5f0640",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_speaking.png": "18354ef4c2606bcf96d4a0b3b9065193",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_wifi.png": "0b78795289c2165bd6646f714cd2159c",
"assets/packages/zego_uikit/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit/assets/icons/invite_reject.png": "aef7ea169c2aa2c1abfaa366fec54da0",
"assets/packages/zego_uikit/assets/icons/invite_video.png": "8278efa5e15b6ea4e3af4b408611fe62",
"assets/packages/zego_uikit/assets/icons/invite_voice.png": "849a299fd3670fc6693da77d392d4e45",
"assets/packages/zego_uikit/assets/icons/member_camera_normal.png": "0c9b7ef19613acc4f7b45b03eaa8c05a",
"assets/packages/zego_uikit/assets/icons/member_camera_off.png": "7e4da8fda7851b9c07bdb16e54532021",
"assets/packages/zego_uikit/assets/icons/member_mic_normal.png": "9c6cc34ee53802ea794e0d9e55b92124",
"assets/packages/zego_uikit/assets/icons/member_mic_off.png": "da54635dfe0e424047509267c747c683",
"assets/packages/zego_uikit/assets/icons/member_mic_speaking.png": "cf6b2e626ec6571f11d8638ae3fb8609",
"assets/packages/zego_uikit/assets/icons/message_fail.png": "c4f7303a3963fa31acd74ca482d4e097",
"assets/packages/zego_uikit/assets/icons/message_loading.png": "41913c24ab8f26819589af76852f6f4c",
"assets/packages/zego_uikit/assets/icons/nav_close.png": "d5a4f6a62cf4761f787d0b2e718e535e",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_normal.png": "101da6ff95cb34d25aaef7a1c058c473",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_off.png": "47c428aed459e061d743f6286c61b0ba",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_end.png": "3db1588b978af3720d74a5a6dbdb4cff",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_flip_camera.png": "6929bd51a1655cf7df3a23a2f3133ec8",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_normal.png": "05b63e5db51f06fcf2fe8d8f2ffe9669",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_off.png": "d522490af830e751a9735927194c2e8b",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_checked.png": "3573c99e2a7720ff2092e4f572b00012",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_normal.png": "96fb3eb790757ec86896cbdd56953e97",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_bluetooth.png": "c803bf03b3df3af7a34d36f895c8d0bb",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_normal.png": "3783636d5601e7cba03cbefbfc9d9e93",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_off.png": "941cd4e186d9feeda35b793a55ab05cf",
"assets/packages/zego_uikit/assets/icons/send.png": "b6f3a4923052cce9db8ef6fc39d2c90b",
"assets/packages/zego_uikit/assets/icons/send_disable.png": "7e80b5c74959ba84cbc7e50beb0e34f1",
"assets/packages/zego_uikit/assets/icons/share_screen_start.png": "0cd5f14df5e1bb573d2aef1de2ed32b6",
"assets/packages/zego_uikit/assets/icons/share_screen_stop.png": "abef995e3768c42d16ac5e1b05120cb5",
"assets/packages/zego_uikit/assets/icons/video_view_camera_off.png": "00241c1e4517457be35ec8235b848633",
"assets/packages/zego_uikit/assets/icons/video_view_camera_on.png": "767c529173c084143074a6a97e32f16f",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_close.png": "347b5c7e154224cbe561f5d7a4a02bab",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_open.png": "c0fdccb5b807c1d25e9de110a2f24e46",
"assets/packages/zego_uikit/assets/icons/video_view_mic_off.png": "ffcd14ed2c2e4d68554bbab32ca83a7e",
"assets/packages/zego_uikit/assets/icons/video_view_mic_on.png": "5f4a10f968013313145e45051cb20bf7",
"assets/packages/zego_uikit/assets/icons/video_view_mic_speaking.png": "f36f281fee197efe2eabc76b1355bc88",
"assets/packages/zego_uikit/assets/icons/video_view_wifi.png": "15ceb63b27034d03ae339e78c63238a6",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/im.png": "5419f695006e601b7bcc4e85e94d177f",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/minimizing.png": "a61f210b1f445bfeecf7a23a54e69703",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/toolbar_beauty.png": "d52d7d2709161d04536c4e79fac7aa21",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/top_camera_overturn.png": "f648e99e1db0435a3641ef0c59bce702",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/top_im.png": "bfae7b2c9d0cc8d79f94310fb3498818",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/2.0x/top_member_normal.png": "21a466088f1aa00d0c77260dbea684cb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/im.png": "a204a9ee814519e5405e5faa4c3c723e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/minimizing.png": "3c3bed57d57bb8bb2ca02fd1427842a8",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/toolbar_beauty.png": "4c322ca9d387f9a37f6fe621b2651681",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/top_camera_overturn.png": "522c321eae222817299840e170496638",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/top_im.png": "7c406701f8f17e2d1fda20fbd37aa660",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/3.0x/top_member_normal.png": "eb5dee3f434a0a9fc2c601458d608841",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/im.png": "e69aca2198610729852a6571f06633cb",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/minimizing.png": "de79eb6c8dd6c9e458136bbe6edef3d2",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/toolbar_beauty.png": "e92042fa28756d017345ec177ae77cc1",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/top_camera_overturn.png": "07d7ce9e0ce2e0d5c3a3e7e3325e036e",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/top_im.png": "eb0fc118673f25f108dae6cf100349bd",
"assets/packages/zego_uikit_prebuilt_call/assets/icons/top_member_normal.png": "4a669238d6446736c1add5e321688145",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/audio/incoming.mp3": "a12f085e3356fc27828901cce14f3db4",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/audio/outgoing.mp3": "8abea83d18c4e3efa01db3819bfad8cd",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_background.png": "4c7c5181f0edc3cb1cabfacc36a1bef5",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_reject.png": "f967ba275f67032b14a0383d8eff0779",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_video.png": "7246561fa86cc404de866e76d9737110",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/invite_voice.png": "24970c6bf9acf13244d9b749e3ea8b4f",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_cancel.png": "dfc5c96309c8761dcf140fce56a5a365",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_decline.png": "036a95b0857b55a62bc14a9dc7c3e905",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_video.png": "53008544346348d557cf27ec4ff324f3",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_bottom_voice.png": "a35a18563c555cb305534c2e2f90744b",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/2.0x/toolbar_top_switch_camera.png": "ffd33a31458339186b13e9b03435e90e",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_background.png": "8271574223a98576ae28b1639f183976",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_reject.png": "50fe4208eaf232329d725b6be760ad05",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_video.png": "b3fd4d33ffcc9e0c05ac8353657faf0f",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/invite_voice.png": "f191776d49da7ce3d3f06a557aee74ea",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_cancel.png": "fe6a4bd60a8a56d3375c9c08fcc9eb47",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_decline.png": "3f7867881527d5258c4e233f3cd02801",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_video.png": "bd1530d449b8761d956a24b337c704c7",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_bottom_voice.png": "33e211177a377dde5abbae46eaa1bb78",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/3.0x/toolbar_top_switch_camera.png": "7923152ef405d84ee36d5ce85fca14c4",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_background.png": "39f2aad363edb5c61d5b55e0f0cf3b63",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_reject.png": "aef7ea169c2aa2c1abfaa366fec54da0",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_video.png": "8278efa5e15b6ea4e3af4b408611fe62",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/invite_voice.png": "849a299fd3670fc6693da77d392d4e45",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_cancel.png": "347b08d9cac06094bdfeca7328c4bcb3",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_decline.png": "b7f71d65ae2450ab7f2713e5e2e57ab2",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_video.png": "43949026115a3ef277c1453d9ba8d744",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_bottom_voice.png": "5e35f466244d20a19dc96cef36aeb43b",
"assets/packages/zego_uikit_prebuilt_call/assets/invitation/icons/toolbar_top_switch_camera.png": "10c4b42139136e814271aa636a64275e",
"assets/packages/zego_zim/assets/index.js": "5d8ad96e8fa434d68207e082662bc59e",
"assets/packages/zego_zpns/assets/zpns.js": "b83a7288dbdd4914da1b0b78576f0ee6",
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
"index.html": "c324b429846bc7441012b701690b8bb4",
"/": "c324b429846bc7441012b701690b8bb4",
"main.dart.js": "c77dc098df9f2dcdd59f13b109c249e0",
"manifest.json": "6027d0c29298b3ba156e5152b13aff06",
"version.json": "b793d0e85471319182ad96b6af60ced2"};
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
