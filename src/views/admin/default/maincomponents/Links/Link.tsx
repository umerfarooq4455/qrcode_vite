// import Accordion from "components/Accordions/Accordion";
// import Createfolder from "components/Toplevelcomponent/folder/Createfolder";
// import Passwordfield from "components/Toplevelcomponent/password/Passwordfield";
// import Scanlimt from "components/Toplevelcomponent/scanlimt/Scanlimt";
// import Schedule from "components/Toplevelcomponent/schedule/Schedule";
// import Urlconfig from "components/Toplevelcomponent/urlconfiguration/Urlconfig";
// import React, { useState } from "react";
// import LinksTemp from "./LinksTemp";
// import LinkDesign from "./LinkDesign";
// import Linkfonts from "./Linkfonts";
// import Linklistinfo from "./Linklistinfo";
// import Linkwelcomsecreen from "./Linkwelcomsecreen";
// import Linkimage from "./Linkimage";
// import LinkAdd from "./LinkAdd";
// // import PdfSelectTemp from "./PdfSelectTemp";
// // import PdfFiles from "./PdfFiles";
// // import Pdfinfo from "./Pdfinfo";
// // import Pdffonts from "./Pdffonts";
// // import Pdfwelcom from "./Pdfwelcom";
// // import Pdfcolors from "./Pdfcolors";

// const Link = () => {
//   const [isToggleButtonActive, setIsToggleButtonActive] = useState(false);
//   const overlayStyle = {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     right: "0",
//     bottom: "0",
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     zIndex: "10",
//     flexdirection: "coluom",
//   };

//   const handleToggleButtonClick = () => {
//     setIsToggleButtonActive(!isToggleButtonActive);
//   };

//   return (
//     <>
//       <div className="dark:text-white ">
//         {/* heading  */}
       
//         {/* heading  */}

//         {/* dynamic qrcodes  */}

//         <div className="flex w-full flex-col justify-between py-2  lg:flex-row ">
//           {/* Types cards  */}
//           <div className="h-auto lg:h-[750px] lg:w-full  lg:overflow-y-scroll xl:w-full">
//             <form>
//               <div className="">
//                 <div className="mb-3 p-[1px]">
//                   <input
//                     type="text"
//                     id="text"
//                     className="  h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]   dark:text-[#fff] dark:placeholder-[#fff] "
//                     placeholder="Name of your QR code..."
//                   />
//                 </div>
//               </div>

//               {/* togglles */}

//                           <label className="relative ml-[4px] inline-flex cursor-pointer items-center">
//                 <input
//                   style={{
//                     backgroundColor: isToggleButtonActive ? "#5D5FEF" : "white",
//                   }}
//                   type="checkbox"
//                   value=""
//                   className="peer sr-only bg-red-600"
//                   checked={isToggleButtonActive}
//                   onChange={handleToggleButtonClick}
//                 />
//                 <div className="peer h-4 w-11 rounded-full bg-[#989898] after:absolute after:-top-0.5 after:start-[-2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1]  after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#5D5FEF]  rtl:peer-checked:after:-translate-x-full"></div>
//                 <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//                   Autocomplete fieldsadafsdfas
//                 </span>
//               </label>

//               <div className="mb-3 mt-2">
//                 <LinksTemp />
//               </div>
//               <div className="mb-3 mt-2">
//                 <LinkDesign />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Linkfonts />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Linklistinfo />
//               </div>
//               <div className="mb-3 mt-2">
//                 <LinkAdd />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Linkimage />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Linkwelcomsecreen />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Createfolder />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Passwordfield />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Urlconfig />
//               </div>
//               <div className="mb-3 mt-2">
//                 <Schedule />
//               </div>
//               <div className="mb-3 mt-2 w-full">
//                 <Scanlimt />
//               </div>
//             </form>
//           </div>

//           {/* mobile view  on deskstop*/}
//           <div className="mx-4 hidden h-1/2  rounded-md bg-white px-4 py-2 dark:bg-[#131D41] dark:text-white lg:block   ">
//             <div className="flex justify-center py-4  text-[18px] font-bold">
//               Preview
//             </div>
//             <div className="view py-4">
//               <div className="relative">
//                 <img
//                   className="bg-transparent h-[500px] md:w-[240px] xl:w-[300px] 2xl:w-[275px]"
//                   src={""}
//                   alt="Mobile Preview"
//                 />

//                 {/* Overlay div */}
//                 {/* {hoveredLink && ( */}
//                 <div
//                   style={overlayStyle}
//                   className="flex-grow-1 inset-0 mx-3 my-3  rounded-3xl opacity-100 dark:bg-[#7d8cc5] "
//                 >
//                   {" "}
//                   <img className="rounded-3xl" src={""} alt={``} />
//                 </div>
//                 {/* )} */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Link;
