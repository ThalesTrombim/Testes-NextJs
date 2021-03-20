import React from 'react';
import { Container } from 'next/app';

import Header from '../Header';
import Footer from '../Footer';

export const Layout = props => {
    const { children = [], footer, header } = props
  
    return (
      <Container>
         <Header data={header} />
         <main id="content" className={'main-section'}>{children}</main>
         <Footer data={footer} />
      </Container>
    )
  }