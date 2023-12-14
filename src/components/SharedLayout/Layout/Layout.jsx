import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className={css.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
