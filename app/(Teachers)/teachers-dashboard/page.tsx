import React from 'react';
import TopCard from '../../../components/teacher/dashboard/TopCard';
import Chart from '../../../components/teacher/dashboard/chart';
import Calendar from '../../../components/calendar';
import Content from '@modules/teachers/content';

const Dashboard = () => {
  return (
    <>
      <section className="xl:pl-[70px] xl:pt-[41px] xl:pr-[30px]">
        <TopCard />
        <Chart />
        <div className="flex items-center justify-between mt-">
          <Content />
          <Calendar />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
