// 자바스크립트로 생성된 html components
function header () {
    return `
    <div class="box2"></div>
    <header id="main-header" class="container">
        <h1>
            <a href="index.html"><img src="./images/header_logo.svg" alt="로고"></a>
        </h1>
        <div class="toggle-menu">
            <button class="toggle-meun-btn mobile-only">
                <img src="./images/toggle-btn.svg" alt="토글메뉴버튼">
            </button>
        </div>
        <div class="box1"></div>
        <nav id="pc-gnb">
            <ul>
                <li><a href="./index.html">홈</a></li>
                <li><a href="./company-info.html">회사소개</a>
                    <ul class="depth2">
                        <li><a href="./company-info.html">회사소개</a></li>
                        <li><a href="./company-history.html">연혁</a></li>
                        <li><a href="./company-ci.html">CI</a></li>
                        <li><a href="./company-recruit.html">인재채용</a></li>
                    </ul>
                </li>
                <li><a href="PRO-SPECS.html">제품소개</a>
                        <ul class="depth2">
                            <li><a href="./PRO-SPECS.html">PRO-SPECS</a></li>
                            <li><a href="./LANCETTI.html">LANCETTI</a></li>
                            <li><a href="./OEM.html">OEM</a></li>
                        </ul>
                </li>
                <li><a href="./news.html">고객센터</a>
                        <ul class="depth2">
                            <li><a href="./news.html">News</a></li>
                            <li><a href="./FAQ.html">FAQ</a></li>
                        </ul>
                </li>
                <li><a href="map.html">오시는길</a>
                        <ul class="depth2">
                            <li><a href="map.html">본사 및 물류센터</a></li>
                        </ul>
                </li>
            </ul>
        </nav>
        
        <nav id="mobile-gnb">
            <button class="toggle-close-btn mobile-only">
                <img src="./images/toggle-close-btn.svg" alt="토글메뉴버튼">
            </button>
            <ul>
                <li><a href="./index.html">홈</a></li>
                <li><a href="./company-info.html">회사소개</a>
                </li>
                <li><a href="./PRO-SPECS.html">제품소개</a>
                </li>
                <li><a href="./news.html">고객센터</a>
                </li>
                <li><a href="./map.html">오시는길</a>
                </li>
                <li><a href="https://www.lsnmall.com" target="_blank">쇼핑몰 바로가기</a>
                </li>
            </ul>
        </nav>
        <div class="right-menu pc-only">
            <img src="./images/icon_language.svg" alt="언어">
            <p><a href="#">KOR</a></p><span>|</span>
            <p><a href="#">ENG</a></p>
            <div class="nav-mall"><a href="https://www.lsnmall.com" target="_blank">쇼핑몰 바로가기</a></div>
            <button class="sitemap-btn pc-only">
                <img src="./images/site-map-btn.svg" alt="사이트맵">
            </button>
        </div>
    </header>
    
    <div class="sitemap-modal pc-only">
        <ul>
            <li><a href="./company-info.html">회사소개</a>
                <ul>
                    <li><a href="./company-info.html">회사소개</a></li>
                    <li><a href="./company-history.html">연혁</a></li>
                    <li><a href="./company-ci.html">CI</a></li>
                    <li><a href="./company-recruit.html">인재채용</a></li>
                </ul>
            </li>
            <div class="line-var"></div>
            <li><a href="./PRO-SPECS.html">제품소개</a>
                <ul>
                    <li><a href="./PRO-SPECS.html">PRO-SPECS</a></li>
                    <li><a href="./LANCETTI.html">LANCETTI</a></li>
                    <li><a href="./OEM.html">OEM</a></li>
                </ul>
            </li>
            <div class="line-var"></div>
            <li><a href="./news.html">고객센터</a>
                <ul>
                    <li><a href="./news.html">News</a></li>
                    <li><a href="./FAQ.html">FAQ</a></li>
                </ul>
            </li>
            <div class="line-var"></div>
            <li><a href="./map.html">오시는길</a>
                <ul>
                    <li><a href="map.html">본사 및 물류센터</a></li>              
                </ul>
            </li>
            <div class="line-var"></div>
            <li><a href="https://www.lsnmall.com" target="_blank">쇼핑몰 바로가기</a>
            </li>
        </ul>
        <button id="sitemap-modal-close">
            <img src="./images/close-btn.svg" alt="사이트맵 닫기">
        </button>
    </div>
    `
 }
  
  // 문서에 html 생성
  const headerName = '.header-component'; // class 요소명
  document.querySelector(headerName).innerHTML = header();