"use client"
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Admin() {

  const { push } = useRouter();

  useEffect(() => {
     push("https://karlijnlaurent.prismic.io/documents/working?l=en-us");
  }, []);
   
  

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-nextPage">
      <p>Redirecting To Admin Panel</p>
      <Image src="/Loading_icon.gif" alt="" width={441} height={291} />
    </div>
  );
}

export default Admin;
