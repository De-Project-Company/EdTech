import SidebarTeacher from '../../components/sidebars/teachersSide';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarTeacher />
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
        {/* <AdminNavbar /> */}
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          {children}
        </div>
      </section>
    </>
  );
}
