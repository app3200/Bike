import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "./Dropdown";
import "./navbar.css";
import { ProfileDropdown } from "./ProfileDropdown";
import { ResourceDropdown } from "./ResourceDropdown";
import { Triangle } from "./Triangle";
export const Navbar = () => {
  const [showProductsDropdown, setshowProductsDropdown] = useState(false);
  const [showResourcesDropdown, setshowResourcesDropdown] = useState(false);
  const [showLoginDropDown, setshowLoginDropdown] = useState(false);

  const phone = useSelector((e) => e.phone);
  // console.log(phone);
  const [isLoggedin, setLogin] = useState(phone != "" ? true : false);
  function changelogout(){
    setLogin(false) 
    localStorage.removeItem("store")
    window.location.reload()

    // console.log(isLoggedin)
  }
  
  return (
    <header>
      <nav>
        <div className='header-div'>
          <div className='nav-container'>
            <div className='left-nav'>
              <a href='/'>
                <svg
                  width='82'
                  height='26'
                  viewBox='0 0 82 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <mask
                    id='mask0'
                    masktype='alpha'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='82'
                    height='26'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.375 0H81.625V26H0.375L0.375 0Z'
                      fill='white'
                    ></path>
                  </mask>
                  <g mask='url(#mask0)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M68.6268 0H13.3733C6.1943 0 0.375 5.8542 0.375 13.0758C0.375 20.2974 6.04319 26.0004 13.2221 26.0004H68.4757C75.6543 26.0004 81.6251 20.2974 81.6251 13.0758C81.6251 5.8542 75.8058 0 68.6268 0Z'
                      fill='white'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M68.1168 22.7872C62.7751 22.7872 58.4297 18.4157 58.4297 13.042C58.4297 7.66838 62.7751 3.29688 68.1168 3.29688C73.458 3.29688 77.8038 7.66838 77.8038 13.042C77.8038 18.4157 73.458 22.7872 68.1168 22.7872Z'
                      fill='#7C47E1'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M68.1188 19.6879C64.4696 19.6879 61.5117 16.7118 61.5117 13.0412C61.5117 9.3702 64.4696 6.39453 68.1188 6.39453C71.7675 6.39453 74.7258 9.3702 74.7258 13.0412C74.7258 16.7118 71.7675 19.6879 68.1188 19.6879Z'
                      fill='#44CB86'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.8705 19.6491C10.248 19.6491 7.30148 16.6845 7.30148 13.0407C7.30148 9.39657 10.248 6.43195 13.8705 6.43195C17.4925 6.43195 20.4395 9.39657 20.4395 13.0407C20.4395 16.6845 17.4925 19.6491 13.8705 19.6491ZM23.5459 13.0404C23.5459 7.67224 19.2048 3.30469 13.8687 3.30469C8.53253 3.30469 4.19141 7.67224 4.19141 13.0404C4.19141 18.4081 8.53253 22.7757 13.8687 22.7757C16.4023 22.7757 18.7106 21.7909 20.4377 20.1822V21.2124C20.4377 22.0756 21.1336 22.7757 21.992 22.7757C22.85 22.7757 23.5459 22.0756 23.5459 21.2124V13.3527C23.5459 13.3219 23.5447 13.2927 23.5432 13.265C23.5447 13.1904 23.5459 13.1154 23.5459 13.0404Z'
                      fill='#7C47E1'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M35.319 22.7861C29.946 22.7861 25.5742 18.3881 25.5742 12.9829C25.5742 7.57686 29.946 3.17969 35.319 3.17969C37.7286 3.17969 40.042 4.07128 41.8323 5.69061C42.4744 6.27145 42.527 7.26571 41.95 7.9117C41.3726 8.55808 40.3839 8.6106 39.7422 8.02976C38.5262 6.93047 36.9554 6.32515 35.319 6.32515C31.6699 6.32515 28.7009 9.31148 28.7009 12.9829C28.7009 16.6539 31.6699 19.6406 35.319 19.6406C36.9565 19.6406 38.5281 19.0345 39.7441 17.9337C40.3859 17.3524 41.3746 17.4049 41.952 18.0505C42.5297 18.6961 42.4775 19.6904 41.8362 20.2716C40.0448 21.8929 37.7306 22.7861 35.319 22.7861Z'
                      fill='#7C47E1'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M58.5652 19.9322L50.1789 12.8544L58.5652 5.92298C59.2262 5.37215 59.3177 4.38658 58.7697 3.72163C58.2218 3.05708 57.2417 2.96508 56.5811 3.5163L47.495 11.096V4.71984C47.495 3.85628 46.7991 3.15659 45.9407 3.15659C45.0826 3.15659 44.3867 3.85628 44.3867 4.71984V21.1354C44.3867 21.9989 45.0826 22.699 45.9407 22.699C46.7991 22.699 47.495 21.9989 47.495 21.1354V14.7592L56.5811 22.3389C56.8716 22.581 57.2229 22.699 57.5726 22.699C58.0189 22.699 58.4624 22.5063 58.7697 22.1336C59.3177 21.469 59.2262 20.4835 58.5652 19.9322Z'
                      fill='#7C47E1'
                    ></path>
                  </g>
                </svg>
              </a>
              <div className='menu-items'>
                <div className='products-link'>
                  <a
                    className='links product-link'
                    onClick={() => {
                      setshowResourcesDropdown(false);
                      setshowLoginDropdown(false);
                      setshowProductsDropdown((prev) => !prev);
                    }}
                    href='#'
                  >
                    Products
                  </a>
                </div>
                <a
                  className='links'
                  href='#'
                  onClick={() => {
                    setshowProductsDropdown(false);
                    setshowLoginDropdown(false);
                    setshowResourcesDropdown((prev) => !prev);
                  }}
                >
                  Resources
                </a>
              </div>
            </div>
            <div className='right-nav'>
              <div className='right-left-nav'>
                <div className='svg-nav-1'>
                  <svg
                    width='13'
                    height='18'
                    viewBox='0 0 13 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.281 18.2345H3.59689C2.76756 18.2345 2.09692 17.5607 2.09692 16.7275V6.30727C2.09692 5.47406 2.76756 4.80029 3.59689 4.80029H11.281C12.1103 4.80029 12.781 5.47406 12.781 6.30727V16.7275C12.781 17.5607 12.1103 18.2345 11.281 18.2345Z'
                      fill='#16C2F8'
                    ></path>
                    <path
                      d='M9.65309 16.3985H1.96896C1.13963 16.3985 0.468994 15.7248 0.468994 14.8916V4.47133C0.468994 3.63812 1.13963 2.96436 1.96896 2.96436H9.65309C10.4824 2.96436 11.1531 3.63812 11.1531 4.47133V14.8967C11.1582 15.7248 10.4824 16.3985 9.65309 16.3985Z'
                      fill='#70D4F9'
                    ></path>
                    <path
                      d='M7.95865 13.9401L7.08324 14.1407C7.05253 14.1458 7.02181 14.1201 7.02693 14.0841L7.22658 13.2046C7.22658 13.1943 7.2317 13.1892 7.23682 13.184L8.93644 11.4765C9.04907 11.3633 9.22824 11.3633 9.33575 11.4765L9.67363 11.8159C9.78625 11.9291 9.78625 12.1091 9.67363 12.2171L7.97401 13.9247C7.97401 13.9349 7.96889 13.9401 7.95865 13.9401Z'
                      fill='#C9EEFD'
                    ></path>
                    <path
                      d='M9.38177 12.5168L8.64331 11.7749L8.48404 11.9349L9.22249 12.6768L9.38177 12.5168Z'
                      fill='#70D4F9'
                    ></path>
                    <path
                      d='M5.81365 9.66092C7.10857 9.66092 8.15831 8.60628 8.15831 7.30532C8.15831 6.00435 7.10857 4.94971 5.81365 4.94971C4.51873 4.94971 3.46899 6.00435 3.46899 7.30532C3.46899 8.60628 4.51873 9.66092 5.81365 9.66092Z'
                      fill='#C9EEFD'
                    ></path>
                    <path
                      d='M5.57285 8.22582L4.65137 7.29489L4.95853 6.9863L5.57285 7.60863L6.71958 6.45654L7.02674 6.77028L5.57285 8.22582Z'
                      fill='#70D4F9'
                    ></path>
                    <path
                      d='M6.43812 11.8417H2.53206C2.29145 11.8417 2.0918 11.6462 2.0918 11.3994C2.0918 11.1576 2.28633 10.957 2.53206 10.957H6.43812C6.67873 10.957 6.87838 11.1525 6.87838 11.3994C6.87326 11.6411 6.67873 11.8417 6.43812 11.8417Z'
                      fill='#C9EEFD'
                    ></path>
                    <path
                      d='M5.6139 14.017H2.53206C2.29145 14.017 2.0918 13.8215 2.0918 13.5746C2.0918 13.3329 2.28633 13.1323 2.53206 13.1323H5.6139C5.85451 13.1323 6.05417 13.3278 6.05417 13.5746C6.04905 13.8215 5.85451 14.017 5.6139 14.017Z'
                      fill='#C9EEFD'
                    ></path>
                    <path
                      d='M9.1975 5.89592C8.64461 5.89592 8.19411 5.44332 8.19411 4.88784V2.09506H8.90058V4.8827C8.90058 5.04728 9.03368 5.18101 9.1975 5.18101C9.36132 5.18101 9.49442 5.04728 9.49442 4.8827V2.03848C9.49442 1.51387 9.06952 1.08698 8.54735 1.08698C8.02517 1.08698 7.60027 1.51387 7.60027 2.03848V2.9797H6.8938V2.03848C6.8938 1.11784 7.6361 0.37207 8.55246 0.37207C9.46883 0.37207 10.2111 1.11784 10.2111 2.03848V4.88784C10.2009 5.44332 9.75039 5.89592 9.1975 5.89592Z'
                      fill='#F75276'
                    ></path>
                  </svg>
                </div>
                <p className='nav-p'>Claim, edit, renew &amp; more</p>
                <a href={isLoggedin ? "#" : "/login"} className='btn-policies'>
                  {isLoggedin ? (
                    "My policies"
                  ) : (
                    <>
                      Login
                      <img
                        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNjI0OTkgNi40NzQ2N0w5LjA5OTk5IDMuOTk5NjdMOS44MDY5OSA0LjcwNjY3TDYuNjI0OTkgNy44ODg2N0wzLjQ0Mjk5IDQuNzA2NjdMNC4xNDk5OSAzLjk5OTY3TDYuNjI0OTkgNi40NzQ2N1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='
                        alt='v'
                        className='sc-hXRMBi bprwOV'
                      />
                    </>
                  )}
                </a>
              </div>
              <a className='link-help'>Help</a>
              {isLoggedin ? (
                <div className='profile-div'>
                  <div
                    className='profile-svg-div'
                    onClick={() => {
                      setshowProductsDropdown(false);
                      setshowResourcesDropdown(false);
                      setshowLoginDropdown(!showLoginDropDown);
                    }}
                  >
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16.625 30.6668C24.7252 30.6668 31.2917 24.1003 31.2917 16.0002C31.2917 7.89999 24.7252 1.3335 16.625 1.3335C8.52486 1.3335 1.95837 7.89999 1.95837 16.0002C1.95837 24.1003 8.52486 30.6668 16.625 30.6668Z'
                        fill='#F6F7FB'
                      ></path>
                      <path
                        d='M20.6461 11.7554C20.6461 13.9894 18.859 16.1116 16.6251 16.1116C14.3911 16.1116 12.604 13.9894 12.604 11.7554C12.604 9.52152 14.3911 7.73438 16.6251 7.73438C18.859 7.73438 20.6461 9.52152 20.6461 11.7554Z'
                        fill='#9364ED'
                      ></path>
                      <path
                        d='M23.2046 22.5781C23.3163 23.1365 22.9812 23.695 22.311 23.9184C21.194 24.2535 18.9601 24.7003 16.6145 24.7003C14.2689 24.7003 12.0349 24.1418 10.918 23.8067C10.3595 23.695 10.0244 23.1365 10.0244 22.4664C10.4712 19.3389 12.5173 17.6064 16.6145 17.6064C20.6094 17.6064 22.7578 19.4506 23.2046 22.5781Z'
                        fill='#9364ED'
                      ></path>
                    </svg>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {showResourcesDropdown ? <ResourceDropdown /> : ""}
          </div>
          {showProductsDropdown ? <Triangle /> : ""}
        </div>
        {showProductsDropdown ? <Dropdown /> : ""}
        {showLoginDropDown ? <ProfileDropdown  logout={changelogout} phone={phone} /> : ""}
      </nav>
    </header>
  );
};
