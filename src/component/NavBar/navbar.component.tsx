import React, { useState } from 'react';
import { VSCIcon } from '../../assets/icons/icons';
import { responsive } from '../../constant/responsive';

const style = {
  viewStyle: `${responsive.paddingX} h-auto flex justify-between py-3`,
  listStyle: `${responsive.hidden} flex flex-row my-auto`,
  listItemStyle: `${responsive.textHeading} text-slate-300 flex mx-5 hover:text-slate-100 hover:cursor-pointer duration-500`,
  iconStyle: 'text-slate-100 text-3xl font-italic',
  contactStyle: 'mt-auto',
  hambugerMenu: 'md:hidden'
};
const ListNavbar = (props: { responsive: boolean }) => {
  const { responsive } = props;
  return (
    <React.Fragment>
      <ul className={!responsive ? style.listStyle : 'items-right'}>
        <li className={style.listItemStyle}>Home</li>
        <li className={style.listItemStyle}>Services</li>
        <li className={style.listItemStyle}>Experience</li>
        <li className={style.listItemStyle}>Education</li>
        <li className={style.listItemStyle}>Cetificates</li>
      </ul>
    </React.Fragment>
  );
};

export const Navbar = () => {
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);
  const renderMenuButton = () => {
    return (
      <button
        type="button"
        className={responsive.hiddenMd}
        onClick={() => {
          setCloseButtonVisible((prevState) => !prevState);
        }}>
        {!closeButtonVisible && <VSCIcon.VscMenu size={30} className={'text-slate-100'} />}
        {closeButtonVisible && <VSCIcon.VscChromeClose size={30} className={'text-slate-100'} />}
      </button>
    );
  };
  return (
    <div className={responsive.sticky}>
      <nav className={style.viewStyle}>
        <p className={style.iconStyle}>Thomas</p>
        <ListNavbar responsive={false} />
        {renderMenuButton()}
      </nav>
      <div
        className={`${responsive.hiddenMd} ${responsive.paddingX} ${
          !closeButtonVisible ? 'hidden' : ''
        } absolute right-0 rounded-lg`}>
        <div className="rounded-lg border border-gray-700 bg-slate-800">
          <ListNavbar responsive={true} />
        </div>
      </div>
    </div>
  );
};
