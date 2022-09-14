import { responsive } from '../constant/responsive';

export const Avatar = () => {
  const imgStyle = `rounded-full shadow-lg shadow-blue-500/50 m-auto border-b-[4px] border-b-blue-400 ${responsive.imgOrigin}`;
  return (
    <div className="grid">
      <img src={require('../assets/image/avatar.jpg')} alt="avatar" className={imgStyle} />
    </div>
  );
};
