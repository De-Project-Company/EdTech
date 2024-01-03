import React from 'react';
import Greetings from '../../../components/teacher/dashboard/greeting';
import TopCard from '../../../components/teacher/dashboard/TopCard';

const Dashboard = () => {
  const userName = 'Phoenix';
  return (
    <>
      <section className="xl:pl-[70px] xl:pt-[41px] xl:pr-[30px]">
        <TopCard />
        {/* <Greetings name={userName} /> */}
      </section>
    </>
  );
};

export default Dashboard;
