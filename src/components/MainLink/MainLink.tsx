/*
 * MainLink.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */
import s from './MainLink.module.scss';

type MainLink̦Props = {
  title: string;
  href: string;
  pageNum: number;
  description: string;
};

const MainLink: React.FC<MainLink̦Props> = function MainLink({
  title,
  href,
  pageNum,
  description,
}) {
  return (
    <a
      href={href}
      className={s.container}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={s.favicon} src={`${href}/favicon.ico`} alt="favicon" />
      <div className={s.title}>{title}</div>
      <div className={s.dots}></div>
      <div>{pageNum}</div>
      <div className={s.description}>{description}</div>
    </a>
  );
};

export default MainLink;
