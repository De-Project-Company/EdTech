'use client';
import { Suspense } from 'react';
import ChatnSidebar from '@components/sidebars/ChatSidebar';
import SkeletonNavbar from '@components/skeleton/SkeletonNavbar';
export default function SettingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex">
        <Suspense fallback={<SkeletonNavbar />}>
          <ChatnSidebar />
        </Suspense>
        <div className="pl-[90px] flex flex-col">{children}</div>
      </section>
    </>
  );
}
