import Forms from "../components/form";
import HelloImg from "../resource/hi.png";
import Image from "next/image";
import React from "react";
import type { NextPage } from "next";

// interfaces
import { formData } from "../components/interface";

const RegistrationPage: NextPage = () => {
  const handleSubmit = (e: React.FormEvent, formData: formData): void => {
    e.preventDefault();
    console.log("Got Data ", formData);
  };

  return (
    <div className='mt-4 flex justify-center'>
      <div className='w-screen'>
        <h3 className='form-title'>Join HackerPlay</h3>
        <div className='form-content'>
          <div className='flex flex-col'>
            <p>Hello Huslers!</p>
            <Forms handleSubmit={handleSubmit} />
          </div>
          <div className='flex justify-center items-center flex-col'>
            <Image src={HelloImg} width={120} height={100} />
            <p>
              Hackerplay is a upcoming hackathon which is being hosted and managed by ReactPlay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
