import SidebarTeacher from '../../components/sidebars/teachersSide';
import TeacherNavbar from '../../components/navs/Teachernav';
import { SearchProvider } from '../../context/SearchContext';
import { NotificationProvider } from '../../context/NotificationContext';

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
            <TeacherNavbar />
            <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
              {children}
            </div>
          </NotificationProvider>
        </section>
      </SearchProvider>
    </>
  );
}
