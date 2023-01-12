import { Link } from 'react-scroll';
import { responsive } from '../constant/responsive';
const style = {
  wrapperStyle: `justify-center h-auto items-center`,
  viewStyle: `${responsive.paddingX} h-auto flex flex-col-reverse items-center justify-center h-3/4 md:h-1/2 w-full md:w-11/12 md:flex-row mx-auto mt-10`,
  imgStyle: `rounded-2xl shadow-lg shadow-blue-500/50 ${responsive.imgOrigin}`,
  headingTextStyle:
    'text-2xl md:text-4xl sm:text-center text-slate-100 font-bold text-center md:text-right mt-3',
  paragraphStyle: 'text-slate-400 text-justify md:text-md xl:text-xl',
  buttonWrapperStyle: 'flex mt-10',
  buttonStyle:
    'transition duration-500 ease-in-out shadow-md hover:shadow-xl shadow-blue-500/50 hover:shadow-blue-500/50 bg-gradient-to-b from-[#4169E1] to-[#7441E1] mx-auto text-slate-100 p-2 rounded-xl cursor-pointer'
};
export const Avatar = () => {
  return (
    <div className={style.wrapperStyle}>
      <div>
        <div className={style.viewStyle}>
          <div className={'md:mr-10 md:w-3/4 xl:w-1/2'}>
            <h2 className={`${style.headingTextStyle}`}>Hi, I&apos;m Thomas</h2>
            <h2 className={`${style.headingTextStyle} mb-2`}>Frontend Developer</h2>
            <p className={style.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet est
              pellentesque, lobortis lorem eu, maximus velit. Quisque augue orci, finibus sit amet
              tincidunt a, condimentum a tortor. Cras at tempor nulla. Sed volutpat orci lectus, et
              congue ipsum consequat ut. Donec ut maur
            </p>
          </div>
          <img
            src={require('../assets/image/avatar.jpg')}
            alt="avatar"
            className={style.imgStyle}
          />
        </div>
        <div className={style.buttonWrapperStyle}>
          <Link className={style.buttonStyle} to="about" smooth={true} spy={true}>
            Explore More !
          </Link>
        </div>
      </div>
    </div>
  );
};
