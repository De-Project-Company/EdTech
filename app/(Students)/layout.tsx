'use client';

import React, { useState } from 'react';
// import Sidebar from '../../components/sidebars/student/StudentSide';

function Studentlayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      Student
    </div>
  );
}

export default Studentlayout;
