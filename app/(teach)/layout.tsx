'use client';

import React from 'react';
import { CreationProvider } from '../../context/CreationCtx';
import PLainNav from '../../components/navs/plain';

export default function StudentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CreationProvider>
        <PLainNav />
        <section className="w-full relative items-center justify-center content-center">
          {children}
        </section>
      </CreationProvider>
    </>
  );
}
