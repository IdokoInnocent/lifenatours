if(!self.define){let e,r={};const s=(s,a)=>(s=new URL(s+".js",a).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(r[u])return;let f={};const o=e=>s(e,u),d={module:{uri:u},exports:f,require:o};r[u]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(i(...e),f)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"natour-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.5fea6470.css",revision:null},{url:"/images/favicon.png",revision:"8a648696975466870ee52e4489ead126"},{url:"/images/icons.svg",revision:"b30b73c73bd63752c5fa1be9c22b5df9"},{url:"/images/logo-green-round.png",revision:"32b0331ad8eef6cef2d4b731ea0d7304"},{url:"/images/logo-green-small.png",revision:"5357353a4101348b0c046bd8465a0501"},{url:"/images/logo-green.png",revision:"888043d544c9ed77285afbc360ffd27e"},{url:"/images/logo-white.png",revision:"40d4ef82deebd0521e91006d961ead40"},{url:"/images/pin.png",revision:"4ca5b5fd5ca7f9eb75526345434e0f39"},{url:"/images/tours/tour-1-1.jpg",revision:"68a0c33227d6e6d199cfab7b81e07423"},{url:"/images/tours/tour-1-2.jpg",revision:"d542a1bdfa4c3c3754fdd90f54e7d355"},{url:"/images/tours/tour-1-3.jpg",revision:"ff499d4f07ca0aef42539f493d488d2f"},{url:"/images/tours/tour-1-cover.jpg",revision:"1ef6d764fc819e080d40aa72dfe03aa6"},{url:"/images/tours/tour-2-1.jpg",revision:"6dd8df4c65ac4ba8a9370972c01cefae"},{url:"/images/tours/tour-2-2.jpg",revision:"1a53ae4bd75a4cdefb17556aa8095053"},{url:"/images/tours/tour-2-3.jpg",revision:"69a69c0feccdfdd8ad1a6f2789bf3ca7"},{url:"/images/tours/tour-2-cover.jpg",revision:"22c14179fe962e7d8dff1c438cafdcf1"},{url:"/images/tours/tour-3-1.jpg",revision:"1114e6ac4a2f0e6e0002e1c0451e1ba4"},{url:"/images/tours/tour-3-2.jpg",revision:"ec585533a00bd598c11eb95ff2e8be7d"},{url:"/images/tours/tour-3-3.jpg",revision:"677b7d58d61f7e73e2e6f63803c32d24"},{url:"/images/tours/tour-3-cover.jpg",revision:"dfac95f1e0c07cda16a3048bdb6ca52b"},{url:"/images/tours/tour-4-1.jpg",revision:"362149c4eba4e3f952cdb4144a9f8f1a"},{url:"/images/tours/tour-4-2.jpg",revision:"2131f581c2a2b851046a15a28f4bbf95"},{url:"/images/tours/tour-4-3.jpg",revision:"702eb92ab4ad01b35b1492e5b6c2f8d2"},{url:"/images/tours/tour-4-cover.jpg",revision:"fad783999dcd16a64d54f95428b2bd15"},{url:"/images/tours/tour-5-1.jpg",revision:"d09991fbbc704153cd017e4390a602be"},{url:"/images/tours/tour-5-2.jpg",revision:"783bf4ca7e2187484a834054d8311b66"},{url:"/images/tours/tour-5-3.jpg",revision:"bb4ffcf0bb26d3d0d5fbec07e06afcd7"},{url:"/images/tours/tour-5-cover.jpg",revision:"465711f822fe90a0cbc22e7755ffc754"},{url:"/images/tours/tour-6-1.jpg",revision:"a81c2689b94479fa4b8872eba08bfc0d"},{url:"/images/tours/tour-6-2.jpg",revision:"229028650dd06a18ace9d6c9b00b7b36"},{url:"/images/tours/tour-6-3.jpg",revision:"43b896ac3656b66504d62666f44b8b00"},{url:"/images/tours/tour-6-cover.jpg",revision:"f3630dc7211fd62e3b93737085567407"},{url:"/images/tours/tour-62bf08d795728e39504304aa-1659325561924-cover.jpeg",revision:"021cd5ca0963a41d693ce90f0c4b67fb"},{url:"/images/tours/tour-62bf08d795728e39504304aa-1659325581623-cover.jpeg",revision:"021cd5ca0963a41d693ce90f0c4b67fb"},{url:"/images/tours/tour-62bf08d795728e39504304aa-1659325631662-cover.jpeg",revision:"021cd5ca0963a41d693ce90f0c4b67fb"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659325643895-cover.jpeg",revision:"021cd5ca0963a41d693ce90f0c4b67fb"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326749560-cover.jpeg",revision:"021cd5ca0963a41d693ce90f0c4b67fb"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326749850-1.jpeg",revision:"d1badb5d70dbd71845f44e26611c8818"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326749852-2.jpeg",revision:"a4d3c223ae300da3d52939e1bd99c9ff"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326749860-3.jpeg",revision:"61b22748b65831fd12a57e51753c335c"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326787786-cover.jpeg",revision:"021cd5ca0963a41d693ce90f0c4b67fb"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326788256-1.jpeg",revision:"d1badb5d70dbd71845f44e26611c8818"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326788260-2.jpeg",revision:"a4d3c223ae300da3d52939e1bd99c9ff"},{url:"/images/tours/tour-62e74af4096ee51442a1de26-1659326788261-3.jpeg",revision:"61b22748b65831fd12a57e51753c335c"},{url:"/images/tours/tour-7-1.jpg",revision:"a1945b3e57abcc64ac1c821684986544"},{url:"/images/tours/tour-7-2.jpg",revision:"29eefcbc3ac2d59d757f396df6a2417c"},{url:"/images/tours/tour-7-3.jpg",revision:"3e2411286035e60abbd751369cec32f0"},{url:"/images/tours/tour-7-cover.jpg",revision:"d6eee229d8758e29b3a945117f45b866"},{url:"/images/tours/tour-8-1.jpg",revision:"ffc4f6de1da00c0dcdcd142e3b2bf84d"},{url:"/images/tours/tour-8-2.jpg",revision:"01349739974db07e1597365c6eac0e59"},{url:"/images/tours/tour-8-3.jpg",revision:"1e53e35df55cecbcec8dafdea45917f7"},{url:"/images/tours/tour-8-cover.jpg",revision:"a79060a02d590ca58a4431df415ae425"},{url:"/images/tours/tour-9-1.jpg",revision:"002d751f9a9abb8afce9f059ef99250b"},{url:"/images/tours/tour-9-2.jpg",revision:"caf2c60e5e1dacf7b234f29a6327fda0"},{url:"/images/tours/tour-9-3.jpg",revision:"56f69b4ccbde285c3add43917e074d58"},{url:"/images/tours/tour-9-cover.jpg",revision:"566e831f5ff0d7c03ec2ff6e18166e1e"},{url:"/images/users/default.jpg",revision:"5881650b8ae558b7aee30f0c288bfbbc"},{url:"/images/users/user-1.jpg",revision:"69c25e4e7533f8bd724cf5c03a802b79"},{url:"/images/users/user-10.jpg",revision:"4aa8fa6a1fa3ffdb8c11e77fa816d872"},{url:"/images/users/user-11.jpg",revision:"13343b64a747241018142fac05da2be8"},{url:"/images/users/user-12.jpg",revision:"dde498ac6bf3ea98a0abb938137d7f9c"},{url:"/images/users/user-13.jpg",revision:"e5f79647eedf83b6022ef950499028a1"},{url:"/images/users/user-14.jpg",revision:"f92e4af6db1f449d6bd84e915fdeb5b2"},{url:"/images/users/user-15.jpg",revision:"9782033850f1da3b1494f9206f2fa5d2"},{url:"/images/users/user-16.jpg",revision:"eb0a29a29991c4927b31e165d6828284"},{url:"/images/users/user-17.jpg",revision:"b2f692e61e616209252a0b7acac4b6e2"},{url:"/images/users/user-18.jpg",revision:"6b1d1d25bf7f5cb456e8007aa2d08fa1"},{url:"/images/users/user-19.jpg",revision:"940ccb8cd07a97dfd380754ed3bc77ff"},{url:"/images/users/user-2.jpg",revision:"1cd234b0a6a69f950edfd3556694548f"},{url:"/images/users/user-20.jpg",revision:"62ad4d6c83c909582b3983ed7cfe11da"},{url:"/images/users/user-3.jpg",revision:"aee77c0f3d11599c51dd468a1a800a2e"},{url:"/images/users/user-4.jpg",revision:"ad2af143a8065e946d21003a5d92b3a8"},{url:"/images/users/user-5.jpg",revision:"e2e48b051b2e129ca34efcdd72a93627"},{url:"/images/users/user-5c8a21f22f8fb814b56fa18a-1659248354200.jpeg",revision:"8662c66bf8db285d8d6b5cd5559bf78b"},{url:"/images/users/user-5c8a21f22f8fb814b56fa18a-1659249473554.jpeg",revision:"1950a91dcf61d81d253cde52f409a693"},{url:"/images/users/user-5c8a21f22f8fb814b56fa18a-1659249576663.jpeg",revision:"ef3f3f90aa90a7169e5252cd11ac9506"},{url:"/images/users/user-5c8a21f22f8fb814b56fa18a-1659361114160.jpeg",revision:"8dbb371c30c5da0d677db45bebf01a12"},{url:"/images/users/user-5c8a23c82f8fb814b56fa18d-1659244234311.jpeg",revision:"469f456b68c0dae53304e85b26f65d23"},{url:"/images/users/user-5c8a23c82f8fb814b56fa18d-1659244996568.jpeg",revision:"69c25e4e7533f8bd724cf5c03a802b79"},{url:"/images/users/user-5c8a23c82f8fb814b56fa18d-1659245138166.jpeg",revision:"469f456b68c0dae53304e85b26f65d23"},{url:"/images/users/user-5c8a23c82f8fb814b56fa18d-1659245171318.jpeg",revision:"469f456b68c0dae53304e85b26f65d23"},{url:"/images/users/user-5c8a23c82f8fb814b56fa18d-1659245262357.jpeg",revision:"469f456b68c0dae53304e85b26f65d23"},{url:"/images/users/user-6.jpg",revision:"6d51bbbbb8c765eedffc396552ee5e9c"},{url:"/images/users/user-7.jpg",revision:"2283ff0b828ea1105b99a354add9634a"},{url:"/images/users/user-8.jpg",revision:"eb5f60e74b889abe72737a8185ecd0c5"},{url:"/images/users/user-9.jpg",revision:"8769d25b83452bd17e3840ff5478295e"},{url:"/index.html",revision:"3ce8d93e27eee6f8618b8c5a83462c3b"},{url:"/js/app.b7dad278.js",revision:null},{url:"/js/chunk-vendors.75195428.js",revision:null},{url:"/manifest.json",revision:"4194e8f62a249d7acd97cddf23804b71"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
