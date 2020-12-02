import React from 'react';
import childrenPropType from '../../../propTypes/ChildrenProptype';
import Header from './Header';

function MainLayout(props) {
  const { children } = props;
  return (
    <main className="MainLayout">
      <Header title="G@mer's hub" />
      <article>{children}</article>
    </main>
  );
}

MainLayout.propTypes = childrenPropType;

export default MainLayout;
