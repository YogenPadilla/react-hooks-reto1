import { useState } from "react";
import Crud from "./Crud";


const Layout = () => {



  return (
    <main className="max-w-[1440px] min-h-screen m-auto px-[128px] py-[32px] bg-gray-800 ">
      <div className="w-full flex flex-col items-center justify-start gap-[32px] ">
        <div  >
            <Crud />
        </div>
      </div>
    </main>
  );
};

export default Layout;
