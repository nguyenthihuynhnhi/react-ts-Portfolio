import React, { useState } from 'react';
import mobileReactLogo from "@/assets/img/logo/mobile_logo.png";

interface IMenuItem {
  id: string,
  label: string;
}

const menuItemMobile: IMenuItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];


const MobileMenu = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    overflow: "hidden",
    display: isOpen ? "block" : "none",
    transition: "2s"
  };

  const handleOnClick = (idMenuItem: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setActiveItem(idMenuItem);
    const section = document.querySelector(`#${idMenuItem}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        window.location.hash = idMenuItem;
      }, 1000);
    }
  };

  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo" >
            <a href="#"><img src={mobileReactLogo} alt="mobileReactLogo" /></a>
          </div>
          <div className="arlo_tm_trigger">
            <div className={isOpen ? "hamburger hamburger--collapse-r is-active" : "hamburger hamburger--collapse-r"}>
              <div className="hamburger-box">
                <div className="hamburger-inner" onClick={() => setIsOpen(prev => !prev)} ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
            <ul className="anchor_nav">
              {menuItemMobile.map((item) => {
                return (
                  <li key={item.id} >
                    <a
                      href={`#${item.id}`}
                      className={activeItem === item.id ? "active" : ""}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { handleOnClick(item.id, e); }}
                    //nơi chạy hàm định nghĩa thêm tham số e
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;