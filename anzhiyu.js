    const anzhiyu=this;
    // 音乐节目切换背景
    function changeMusicBg (isChangeBg = true) {
    //   if (window.location.pathname != "/music/") {
    //     return;
    //   }
      console.log("changeMusicBg函数被调用")
      const anMusicBg = document.getElementById("an_music_bg");
    //   console.log(anMusicBg)
      if (isChangeBg) {
        // player listswitch 会进入此处
        // console.log(anMusicBg)
        const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
        anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
      } else {
        // 第一次进入，绑定事件，改背景
        let timer = setInterval(() => {
          const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
          // 确保player加载完成
        //   console.info(anMusicBg);
          if (musiccover) {
            clearInterval(timer);
            anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
            // 绑定事件
            anzhiyu.addEventListenerChangeMusicBg();
  
            // // 暂停nav的音乐
            // if (
            //   document.querySelector("#nav-music meting-js").aplayer &&
            //   !document.querySelector("#nav-music meting-js").aplayer.audio.paused
            // ) {
            //   anzhiyu.musicToggle();
            // }
          }
        }, 100);
      }
    }

    function addEventListenerChangeMusicBg() {
      console.log("绑定事件")
      const anMusicPage = document.getElementById("anMusic-page");
      const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");
  
      anMusicPage.querySelector("meting-js").aplayer.on("loadeddata", function () {
        anzhiyu.changeMusicBg();
        console.info("player loadeddata");
      });
  
      aplayerIconMenu.addEventListener("click", function () {
        document.getElementById("menu-mask").style.display = "block";
        document.getElementById("menu-mask").style.animation = "0.5s ease 0s 1 normal none running to_show";
      });
  
      document.getElementById("menu-mask").addEventListener("click", function () {
        // if (window.location.pathname != "/music/") return;
        document.getElementById("menu-mask").style.display = "none";
        console.log("触发")
        anMusicPage.querySelector(".aplayer-list").classList.remove("aplayer-list-hide");
      });
    }