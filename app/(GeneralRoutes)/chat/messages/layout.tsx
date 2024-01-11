import Messagesidebar from '@components/sidebars/messagesidebar';

export default function SettingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex">
        <Messagesidebar />
        <div className="pl-[20px] relative">{children}</div>
      </section>
    </>
  );
}
