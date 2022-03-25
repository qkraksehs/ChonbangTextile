// footer component
function footer() {
    return `
    <footer id="main-footer">        
        <div class="container">
            <h1>
                <img src="./images/footer_logo.svg" alt="전방텍스타일" class="ft-logo">
            </h1>
            <div class="menu-box pc-only">
                <ul class="footer-menu">
                    <li><a href="#">회사소개</a>
                        <span>|</span>
                    </li>
                    <li><a href="#">이용약관</a>
                        <span>|</span>
                    </li>
                    <li><a href="#"><strong>개인정보처리방침</strong></a>
                        <span>|</span>
                    </li>
                    <li><a href="#">이메일무단수집거부</a></li>
                </ul>
            </div><!-- menu-box -->
            <div class="footer-info pc-only">
                <p>상호:전방텍스타일주식회사&nbsp;&nbsp;&nbsp;    
                    대표이사:이순경&nbsp;&nbsp;&nbsp;
                    전화:02-3663-8484&nbsp;&nbsp;&nbsp;
                    팩스:02-3663-8483
                </p>
                <p>
                    주소 : 서울시 강서구 양천로 77길 13 전방텍스타일빌딩  (07538)
                </p>
                <p class="copy">copyright ⓒ 2022 chonbangtextile.all right reserved.</p>
            </div>
            <div class="footer-info mobile-only">
                <p>상호:전방텍스타일주식회사 대표이사:이순경</p>
                <p>전화 : 02 - 3663 - 8484   팩스 : 02 - 3663 - 8483   </p>
                <p>
                서울시 강서구 양천로 77길 13 전방텍스타일빌딩  (07538)
                </p>
                <p class="copy">copyright ⓒ 2022 chonbangtextile.all right reserved.</p>
            </div>
            <select name="family-link" id="family-link" class="pc-only">
                <option value="">패밀리사이트</option>
                <option value="">pro-specs</option>
                <option value="">lancetti</option>
                <option value="">oem</option>
            </select>
        </div><!-- container -->        
    </footer>
    <div class="top-btn mobile-only">
        <a href="#"><img src="./images/top-btn.svg" alt="위로가기"></a>
    </div>
    `
  }
  
  const footerName = '.footer-component'; // class 요소명
  document.querySelector(footerName).innerHTML = footer();