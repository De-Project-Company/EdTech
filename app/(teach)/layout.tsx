'use client';

import React, { useState } from 'react';
import { CurriculumCreationProvider } from '../../context/CurriculumCtx';
import PLainNav from '../../components/navs/plain';

export default function StudentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CurriculumCreationProvider>
        <PLainNav />
        <section className="w-full relative items-center justify-center content-center">
          {children}
        </section>
      </CurriculumCreationProvider>
    </>
  );
}
