function saveData(e,n){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:n}))}function loadData(e,n){let a=JSON.parse(localStorage.getItem(e));if(a){let e=Date.now()-a.time;if(e<60*n*1e3&&e>-1)return a.data}return 0}try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,n){let a=document.getElementById("web_bg");"#"==e.charAt(0)?(a.style.backgroundColor=e,a.style.backgroundImage="none"):a.style.backgroundImage=e,n||saveData("blogbg",e)}var winbox="";function createWinbox(){let e=document.createElement("div");document.body.appendChild(e),winbox=WinBox({id:"changeBgBox",index:999,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"60%",background:"var(--leonus-blue)",onmaximize:()=>{e.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{e.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n    <div id="article-container" style="padding:10px;">\n    \n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)\')"></a>\n    </div>\n    \n    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)" class="imgbox" onclick="changeBg(\'url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)\')"></a>\n    </div>\n    \n    \n    \n    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n    </div>\n    \n    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg(\'#7D9D9C\')"></a> \n    </div>\n'}function winResize(){var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","90%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}