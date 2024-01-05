import React from 'react';
import TopCard from '../../../components/teacher/dashboard/TopCard';
import Chart from '../../../components/teacher/dashboard/chart';
import Calendar from '../../../components/calendar';

const Dashboard = () => {
  return (
    <>
      <section className="xl:pl-[70px] xl:pt-[41px] xl:pr-[30px]">
        <TopCard />
        <Chart />
        <Calendar />
      </section>
    </>
  );
};

export default Dashboard;
