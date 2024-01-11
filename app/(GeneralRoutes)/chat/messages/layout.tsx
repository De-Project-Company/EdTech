import Messagesidebar from '@components/sidebars/messagesidebar';

export default function SettingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-row  w-full h-full ">
        <Messagesidebar />
        <div className="pl-[90px]">{children}</div>
      </section>
    </>
  );
}
