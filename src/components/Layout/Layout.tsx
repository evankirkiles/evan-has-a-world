/*
 * Layout.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */
import s from './Layout.module.scss';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = function Layout({ children }) {
  return (
    <div className={s.container}>
      <div
        className={s.printing_block_tiny}
        style={{ top: '10px', left: '10px' }}
      />
      <div
        className={s.printing_block_tiny}
        style={{ top: '10px', right: '10px' }}
      />
      <div
        className={s.printing_block_tiny}
        style={{ bottom: '10px', left: '10px' }}
      />
      <div
        className={s.printing_block_tiny}
        style={{ bottom: '10px', right: '10px' }}
      />
      <div className={s.contents}>
        <div className={s.contents_outline}></div>
        <div className={s.printing_block}></div>
        <div className={s.printing_row}>
          <div className={s.inner_printing_block}></div>
          <div></div>
          <div className={s.inner_printing_block}></div>
        </div>
        <div className={s.content_container}>
          {children}
          <div className={s.top_scroll_gradient}></div>
          <div className={s.lower_scroll_gradient}></div>
        </div>
        <div className={s.printing_row}>
          <div>/index.html</div>
          <div>1</div>
          <div>(c) 2022</div>
        </div>
        <div className={s.printing_block}></div>
      </div>
      <div className={s.outline_overlay}></div>
    </div>
  );
};

export default Layout;
