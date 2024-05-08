import etron from "@/assets/img/logo/react-logo.png";
import { useEffect, useState } from "react";
import { FaBehanceSquare, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { isMobile } from 'react-device-detect';
interface IProp {
  hideLeftPart: boolean,
  setHideLeftPart: (value: boolean) => void;
}

interface IMenuItem {
  id: string,
  label: string;
}

const menuItem: IMenuItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];

const LeftPart = (props: IProp) => {

  const [activeItem, setActiveItem] = useState<string>('home');

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveItem(tab);
      const section = document.querySelector(`${hash}`);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

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
      <div className={props.hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#"><img src={etron} alt="desktop-logo" /></a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              {menuItem.map((item) => {
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
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaSquareInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaBehanceSquare />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithubSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile &&
            <a
              className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.setHideLeftPart(!props.hideLeftPart);
              }}
            >
              <i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"} ></i>
            </a>
          }
        </div>
      </div>
    </>
  );
};

export default LeftPart;