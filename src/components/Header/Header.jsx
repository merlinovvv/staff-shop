import React from 'react';
import style from './style.module.css';

function Header({toggleForm}) {
  return (
    <header className={style.header}>
      <img className={style.logo} src="img/logo.svg" alt="STAFF" />
      <div onClick={() => toggleForm(true)} href="/" className={style.profile}>
        <div className={style.profile_avatar}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7_243)">
              <path
                d="M19.7442 11.5431C21.1373 10.9525 22.0762 9.73969 21.9951 8.16478C21.9726 7.72745 21.8757 7.29473 21.7144 6.88882C21.5655 6.51407 21.3255 6.2004 21.1547 5.84015C20.8033 5.09889 20.642 4.27644 20.3506 3.51123C19.097 0.219406 14.9864 -0.778997 12.0159 0.605558C10.6829 1.22686 9.65382 2.33875 8.99602 3.65831C10.0152 3.30194 11.1691 3.50945 12.007 4.19749C11.9741 4.2433 11.942 4.2894 11.9114 4.3361C10.5129 3.29304 8.47167 3.77883 7.66109 5.33161C6.87756 6.83257 7.56272 8.75502 9.10595 9.40542C10.0409 9.79944 11.1363 9.65791 11.9437 9.0381C11.9785 9.08098 12.0146 9.12294 12.0515 9.16392C11.1114 9.96465 9.75737 10.1395 8.65156 9.59691C9.05221 10.2483 9.61378 10.7838 10.2541 11.1875C9.78001 12.0602 9.45835 13.0433 9.43558 14.0461C9.41489 14.9576 9.46336 15.9421 9.78802 16.8019C8.96393 16.7816 8.01951 16.6235 7.44037 15.9672C6.89334 15.3472 6.78833 14.4403 6.78957 13.6416C6.79109 12.6568 7.00546 11.7138 7.13547 10.7445C7.26492 9.77941 7.18129 8.76908 6.77536 7.87796C5.95864 6.08505 3.75865 5.03144 1.92657 5.87499C0.135595 6.69961 -0.730752 9.16665 0.762156 10.7066C1.3699 11.3335 2.29497 11.6654 3.14216 11.4078C3.93597 11.1664 4.56928 10.4385 4.64995 9.59051C4.73048 8.74403 4.15839 7.85679 3.31647 7.68277C2.88968 7.59456 2.47833 7.92054 2.50771 8.3764C2.52052 8.57515 2.6244 8.76259 2.78542 8.8768C2.96415 9.00357 3.1914 8.99564 3.29969 9.21743C3.5066 9.64116 3.04089 10.0936 2.65937 10.1548C2.19975 10.2286 1.72978 9.89726 1.49859 9.51444C0.962069 8.62605 1.58532 7.51953 2.42374 7.11016C3.22895 6.71701 4.19643 6.94971 4.86996 7.50684C5.45313 7.98924 5.77205 8.71103 5.85628 9.46018C5.96171 10.3979 5.68082 11.3232 5.56926 12.2478C5.45785 13.1711 5.41425 14.1262 5.60353 15.0424C5.77848 15.8892 6.17727 16.678 6.84816 17.2268C7.51824 17.7749 8.36572 18.0221 9.21044 18.1044C9.74006 18.156 10.2743 18.1459 10.804 18.1017C11.0502 18.2562 11.3383 18.3751 11.6737 18.4567C11.7937 18.8519 12.1543 19.1275 12.5683 19.1275H20.9678C22.0058 19.1275 22.0125 17.8497 21.8832 17.1003C21.7491 16.3222 21.355 15.6025 20.7009 15.1578C20.696 13.7726 20.3062 12.6419 19.7442 11.5431ZM11.3702 7.83812C11.1243 8.09853 10.7794 8.26159 10.3971 8.26159C9.65276 8.26159 9.04721 7.64614 9.04721 6.8896C9.04721 6.13305 9.65276 5.5176 10.3971 5.5176C10.7655 5.5176 11.0995 5.66866 11.3433 5.91262C11.3006 6.2166 11.2795 6.55365 11.2795 6.93556C11.2795 7.2728 11.3111 7.57096 11.3702 7.83812ZM14.4726 7.93182C14.6063 7.23509 15.084 6.62831 15.3823 5.99556C15.6436 5.4413 15.8104 4.8322 16.1585 4.32471C16.7888 3.40557 17.8609 2.85509 18.9635 2.90485C19.5147 3.67288 19.7096 4.60299 20.0118 5.48612C20.1447 5.87423 20.2889 6.25896 20.5067 6.6068C20.7639 7.01746 20.9586 7.44708 21.0306 7.93257L20.8017 7.85798C20.4608 7.71828 20.2429 8.25084 20.4674 8.479L20.9082 8.92702C20.9327 8.95194 20.9603 8.9714 20.9889 8.98834C20.6015 10.5303 18.7975 10.9809 17.4436 11.1182C15.87 11.0148 14.1315 9.70972 14.4726 7.93182ZM18.9793 18.0326H12.6918H12.6909H12.6892C12.6677 17.8128 12.6411 17.6113 12.7776 17.4277C12.9283 17.2248 13.1799 17.0926 13.4 16.9856C14.0721 16.6589 14.8256 16.4845 15.5569 16.3619C16.3084 16.2358 17.1762 16.104 17.9163 16.3481C18.6215 16.5806 19.0928 17.2647 18.9793 18.0326ZM19.2671 17.7357C19.1982 16.7025 18.4421 16.0695 17.4627 15.9607C18.0952 15.9133 18.7898 15.9132 19.3105 16.3378C19.7855 16.725 19.9986 17.4293 19.9138 18.0326H19.2622C19.2738 17.9337 19.2738 17.8349 19.2671 17.7357ZM20.0897 17.0209C19.8871 16.3787 19.3882 15.9243 18.7519 15.7501C19.3726 15.7329 20.0098 15.8576 20.4246 16.3677C20.7815 16.8066 20.9246 17.4726 20.8493 18.0326H20.1966C20.2356 17.6981 20.1907 17.3407 20.0897 17.0209ZM19.96 15.0415C19.96 15.2425 19.9436 15.4463 19.9061 15.6439C19.5454 15.4943 19.156 15.4519 18.7693 15.465C18.4627 14.3678 18.623 13.1432 19.2352 12.1832C19.6426 13.0669 19.96 14.0562 19.96 15.0415ZM17.9079 6.84753C17.8896 6.24313 18.2172 5.74245 18.6397 5.72921C19.0621 5.71598 19.4195 6.19521 19.4378 6.79961C19.4561 7.40401 19.1285 7.9047 18.706 7.91794C18.2836 7.93117 17.9262 7.45193 17.9079 6.84753Z"
                fill="#753F8C"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_243">
                <rect width="22" height="19.1304" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className={style.profile_name}>Yana Tamkovich</p>
      </div>
      <div className={style.search}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.8416 12.0758L9.60783 8.84204C10.4886 7.76481 10.9216 6.39027 10.8173 5.00273C10.7131 3.61519 10.0795 2.3208 9.04763 1.3873C8.01577 0.453803 6.66459 -0.0473866 5.27357 -0.0126007C3.88255 0.0221852 2.55811 0.590285 1.57421 1.57419C0.5903 2.5581 0.0222005 3.88254 -0.0125854 5.27356C-0.0473713 6.66458 0.453818 8.01576 1.38732 9.04761C2.32081 10.0795 3.6152 10.7131 5.00274 10.8173C6.39029 10.9216 7.76483 10.4886 8.84205 9.60782L12.0758 12.8416C12.1791 12.9339 12.3139 12.9832 12.4524 12.9793C12.5909 12.9754 12.7227 12.9186 12.8207 12.8207C12.9187 12.7227 12.9754 12.5909 12.9793 12.4524C12.9832 12.3139 12.9339 12.1791 12.8416 12.0758ZM5.41737 9.75001C4.55987 9.75041 3.72153 9.49647 3.00838 9.02033C2.29523 8.54418 1.73933 7.86721 1.411 7.07507C1.08266 6.28293 0.996649 5.4112 1.16384 4.57016C1.33103 3.72913 1.74391 2.95657 2.35025 2.35023C2.95659 1.74389 3.72914 1.33101 4.57018 1.16382C5.41121 0.996633 6.28294 1.08265 7.07509 1.41098C7.86723 1.73931 8.5442 2.29522 9.02034 3.00836C9.49649 3.72151 9.75042 4.55986 9.75002 5.41735C9.74841 6.56595 9.29142 7.66704 8.47924 8.47922C7.66705 9.2914 6.56596 9.74839 5.41737 9.75001Z"
            fill="#576067"
          />
        </svg>
        <input
          className={style.search_input}
          type="text"
          name=""
          id=""
          placeholder="Search for anything..."
        />
      </div>
      <div className={style.header_btns}>
        <a href="/" className={style.btn_link}>
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
              stroke="#B8B8B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={style.count}>3</span>
        </a>
        <a href="/" className={style.btn_link}>
          <svg
            className={style.cart_img}
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.94 17.06L17.26 7.31C17.1453 6.47997 16.7404 5.71734 16.1172 5.15725C15.4939 4.59716 14.6926 4.27576 13.855 4.25H13.75C13.75 3.25544 13.3549 2.30161 12.6517 1.59835C11.9484 0.895088 10.9946 0.5 10 0.5C9.00546 0.5 8.05163 0.895088 7.34837 1.59835C6.64511 2.30161 6.25002 3.25544 6.25002 4.25H6.14502C5.30749 4.27576 4.50611 4.59716 3.88287 5.15725C3.25963 5.71734 2.85477 6.47997 2.74002 7.31L1.06002 17.06C0.956834 17.6256 0.979262 18.2071 1.12572 18.7631C1.27217 19.3191 1.53907 19.8361 1.90752 20.2775C2.21796 20.6565 2.60803 20.9625 3.05003 21.1738C3.49204 21.385 3.97513 21.4964 4.46502 21.5H15.535C16.0249 21.4964 16.508 21.385 16.95 21.1738C17.392 20.9625 17.7821 20.6565 18.0925 20.2775C18.461 19.8361 18.7279 19.3191 18.8743 18.7631C19.0208 18.2071 19.0432 17.6256 18.94 17.06ZM10 2C10.5968 2 11.1691 2.23705 11.591 2.65901C12.013 3.08097 12.25 3.65326 12.25 4.25H7.75002C7.75002 3.65326 7.98707 3.08097 8.40903 2.65901C8.83099 2.23705 9.40328 2 10 2ZM16.945 19.31C16.7755 19.522 16.5612 19.6938 16.3174 19.8131C16.0736 19.9325 15.8064 19.9963 15.535 20H4.46502C4.19362 19.9963 3.92643 19.9325 3.68263 19.8131C3.43883 19.6938 3.2245 19.522 3.05502 19.31C2.82646 19.0365 2.66149 18.7157 2.57199 18.3707C2.4825 18.0257 2.47073 17.6651 2.53752 17.315L4.21752 7.565C4.27335 7.08382 4.49737 6.63782 4.85004 6.30574C5.20271 5.97365 5.66135 5.77683 6.14502 5.75H13.855C14.3387 5.77683 14.7973 5.97365 15.15 6.30574C15.5027 6.63782 15.7267 7.08382 15.7825 7.565L17.4625 17.315C17.5293 17.6651 17.5175 18.0257 17.428 18.3707C17.3386 18.7157 17.1736 19.0365 16.945 19.31Z"
              fill="#B8B8B8"
            />
          </svg>
          <span className={style.count}>1</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
