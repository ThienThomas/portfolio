import { responsive } from '../constant/responsive';

const style = {
  wrapperStyle: `h-screen ${responsive.paddingX} ${responsive.paddingY}`
};
export const SkillSection = () => {
  return (
    <div id="skill" className={style.wrapperStyle}>
      <h1>About Me</h1>
      <div className="h-3/4 md:h-full mt-12 md:mt-0 bg-black-900 rounded-2xl"></div>
    </div>
  );
};
