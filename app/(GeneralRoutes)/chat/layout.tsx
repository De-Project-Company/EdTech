import ChatnSidebar from '@components/sidebars/ChatSidebar';

export default function SettingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex">
        <ChatnSidebar />
        <div className="pl-[90px] flex flex-col">{children}</div>
      </section>
    </>
  );
}
