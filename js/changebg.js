function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let a=JSON.parse(localStorage.getItem(e));if(a){let e=Date.now()-a.time;if(e<60*t*1e3&&e>-1)return a.data}return 0}try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,t){let a=document.getElementById("web_bg");"#"==e.charAt(0)?(a.style.backgroundColor=e,a.style.backgroundImage="none"):a.style.backgroundImage=e,t||saveData("blogbg",e)}