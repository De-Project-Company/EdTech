import ChatnSidebar from '@components/sidebars/ChatSidebar';

export default function SettingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-row  w-full h-full ">
        <ChatnSidebar />
        <div className="pl-[90px]">{children}</div>
      </section>
    </>
  );
}
