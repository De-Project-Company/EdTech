'use client';
import { Suspense } from 'react';
import SidebarStudent from '../../components/sidebars/student/sidebar';
import StuedntNavbar from '../../components/navs/StudentNav';
import SkeletonNavbar from '@components/skeleton/SkeletonNavbar';

export default function StudentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarStudent />
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
        <Suspense fallback={<SkeletonNavbar />}>
          <StuedntNavbar />
        </Suspense>
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          {children}
        </div>
      </section>
    </>
  );
}
