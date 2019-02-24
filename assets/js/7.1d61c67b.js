(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{181:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"jenkins-android-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-android-task","aria-hidden":"true"}},[e._v("#")]),e._v(" Jenkins Android Task")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("h3",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment","aria-hidden":"true"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),a("p",[e._v("Should create "),a("code",[e._v("gradle_cache")]),e._v(" directory in reliable_home for gradle tool.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$HOME")]),e._v("/reliable_home/gradle_cache\n")])])]),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("Just like reliable-web, we recommend to build Android with Docker.")]),e._v(" "),a("h2",{attrs:{id:"sample-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Sample Project")]),e._v(" "),a("p",[a("a",{attrs:{href:"//github.com/app-bootstrap/android-app-bootstrap"}},[e._v("android-app-bootstrap")])]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),a("h3",{attrs:{id:"step1-create-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step1-create-new","aria-hidden":"true"}},[e._v("#")]),e._v(" Step1 - Create New")]),e._v(" "),a("p",[e._v("Create a new item named "),a("code",[e._v("android-app-bootstrap")]),e._v(", and select the "),a("code",[e._v("Freestyle project")]),e._v(" mode.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2p8qmlazj21kw15ztol.jpg",width:"75%"}})]),e._v(" "),a("h3",{attrs:{id:"step2-scm-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step2-scm-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Step2 - SCM Config")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx2.sinaimg.cn/large/6d308bd9ly1ft2panw2oqj21kw15znaj.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("Please input the "),a("code",[e._v("android-app-bootstrap")]),e._v(" git url, and set the clone depth to "),a("code",[e._v("1")]),e._v(", branch to "),a("code",[e._v("master")]),e._v(" is ok.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://github.com/app-bootstrap/android-app-bootstrap.git\n")])])]),a("h3",{attrs:{id:"step3-build-scripts-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step3-build-scripts-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Step3 - Build Scripts Config")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2peam690j21kw15ztl8.jpg",width:"75%"}})]),e._v(" "),a("p",[a("strong",[e._v("Noted")])]),e._v(" "),a("ul",[a("li",[e._v("please confirm jenkins delete the workspace before build to avoid the old middle-file problem.")])]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2plz2djxj21kw16pk5j.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("We provide the Android build docker like "),a("code",[e._v("macacajs/macaca-android-build-docker")]),e._v(", so you can set the feild content like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop $JOB_NAME || true && docker rm -f $JOB_NAME || true\n\ndocker run --rm \\\n  --name $JOB_NAME \\\n  -e JOB_NAME \\\n  -e BUILD_NUMBER \\\n  -e reliable_SERVER_URL=http://192.168.0.102:9900 \\\n  -v $WORKSPACE:/root/src \\\n  -v $HOME/reliable_home/static:/static \\\n  -v $HOME/reliable_home/gradle_cache:/root/.gradle \\\n  macacajs/macaca-android-build-docker\n")])])]),a("p",[a("strong",[e._v("Noted")])]),e._v(" "),a("ul",[a("li",[e._v("you can also build android out off the docker container, system shell command is ok.")]),e._v(" "),a("li",[e._v("please confirm the "),a("code",[e._v("reliable_SERVER_URL")]),e._v(" has the correct address just like the IPV4 or some domain name which can be visited from the docker container, otherwise you will meet the problem below.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("error: TypeError: Cannot read property 'server' of undefined\n    at _.postToGW (/root/src/node_modules/reliable-cli/lib/helper.js:31:66)\n    at ReportCommand.pushToWebhook (/root/src/node_modules/reliable-cli/lib/report-command.js:130:18)\n    at ReportCommand._run (/root/src/node_modules/reliable-cli/lib/report-command.js:70:35)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! android-app-bootstrap@1.0.8 reliable: `reliable report -c ./reliable.config.js`\nnpm ERR! Exit status 1\n")])])]),a("h3",{attrs:{id:"step4-build-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step4-build-now","aria-hidden":"true"}},[e._v("#")]),e._v(" Step4 - Build Now")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx2.sinaimg.cn/large/6d308bd9ly1ft2pvmld7dj21kw148wn3.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("After the building ready, you can get the final result from reliable-web.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx1.sinaimg.cn/large/6d308bd9ly1ft2pvmlnkij21kw148dph.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("We cat get the "),a("code",[e._v("debug")]),e._v(" and "),a("code",[e._v("relese")]),e._v(" package of the "),a("code",[e._v("android-app-bootstrap")]),e._v(".")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx4.sinaimg.cn/large/6d308bd9ly1ft2pvmmewxj21kw14849j.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("Scan the QRCode, you can download and install it with your device.")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2pvmlz1hj21kw148tl3.jpg",width:"75%"}})]),e._v(" "),a("p",[e._v("You can also get other extra build infomation. If you want more, please tweak the "),a("a",{attrs:{href:"//github.com/macacajs/reliable-cli#configuration"}},[e._v("reliable-cli#configuration")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"step5-test-reporter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step5-test-reporter","aria-hidden":"true"}},[e._v("#")]),e._v(" Step5 - Test Reporter")]),e._v(" "),a("p",[e._v("reliable support the Unit and E2E test reporter, coverage based on Macaca is supported.")]),e._v(" "),a("p",[e._v("coming soon")])])}],!1,null,null,null);t.default=s.exports}}]);