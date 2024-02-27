import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center p-4 h-auto bg-bkg text-content gap-4">
      <div className="flex justify-around w-full ">
        <div className="flex flex-col gap-[10px]">
          <p>tel 755500055</p>
          <p>email email@email.com</p>
          <p className="underline">kontaktní formulář</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>adresa Praha 14</p>
          <p>IČO: 8495233</p>
          <p>DIČ: 4521555</p>
        </div>
      </div>
      <div>
        <p>@Matěj Bittner 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
