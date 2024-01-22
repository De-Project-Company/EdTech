import { Suspense } from 'react';
import SidebarTeacher from '../../components/sidebars/teachersSide';
import TeacherNavbar from '../../components/navs/Teachernav';
import { SearchProvider } from '../../context/SearchContext';
import { NotificationProvider } from '../../context/NotificationContext';
import SearchResultsPage from '@modules/SearchPage';
import SkeletonNavbar from '@components/skeleton/SkeletonNavbar';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchProvider>
        <SidebarTeacher />
        <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
          <NotificationProvider>
            <Suspense fallback={<SkeletonNavbar />}>
              <TeacherNavbar />
            </Suspense>
            <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0 ">
              <SearchResultsPage />
              {children}
            </div>
          </NotificationProvider>
        </section>
      </SearchProvider>
    </>
  );
}
