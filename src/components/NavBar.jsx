// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logoForMarboLuxe.jpeg";
// import "../app.css";

// const NavBar = () => {
//   return (
//     <div className="h-[96px] flex flex-col">
//       {/* Top info section */}
//       <div className="info hidden md:flex flex-1 items-center px-2 justify-end mr-3 gap-2">
//         {/* Search */}
//         <button
//           id="dropdownDefaultButton"
//           data-dropdown-toggle="dropdownSearch"
//           className="hover:text-white transition ease-linear duration-200 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           type="button"
//         >
//           Search
//           <svg
//             className="w-2.5 h-2.5 ml-2.5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </button>
//         <div
//           id="dropdownSearch"
//           className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//         >
//           <input
//             type="text"
//             className="py-2 text-sm text-gray-700 dark:text-gray-200 rounded-md bg-slate-100 "
//           />
//         </div>

//         {/* Dil Seçenekleri */}
//         <button
//           id="dropdownDefaultButton"
//           data-dropdown-toggle="dropdown"
//           className="hover:text-white transition ease-linear duration-200 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           type="button"
//         >
//           Dil Seçenekleri
//           <svg
//             className="w-2.5 h-2.5 ml-2.5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </button>
//         <div
//           id="dropdown"
//           className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//         >
//           <ul
//             className="py-2 text-sm text-gray-700 dark:text-gray-200"
//             aria-labelledby="dropdownDefaultButton"
//           >
//             <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer dark:hover:text-white">
//               Türkçe
//             </li>
//             <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer dark:hover:text-white">
//               English
//             </li>
//           </ul>
//         </div>

//         {/* Kurumsal */}
//         <button
//           id="dropdownDefaultButton"
//           data-dropdown-toggle="dropdownKurumsal"
//           className="hover:text-white transition ease-linear duration-200 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           type="button"
//         >
//           Kurumsal
//           <svg
//             className="w-2.5 h-2.5 ml-2.5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </button>
//         <div
//           id="dropdownKurumsal"
//           className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//         >
//           <ul
//             className="py-2 text-sm text-gray-700 dark:text-gray-200"
//             aria-labelledby="dropdownDefaultButton"
//           >
//             <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer dark:hover:text-white">
//               Hakkımızda
//             </li>
//             <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer dark:hover:text-white">
//               İletişim
//             </li>
//             <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer dark:hover:text-white">
//               Ocaklar
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Navbar Section */}
//       <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//         <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link to="/" className="flex flex-col md:flex-row items-center">
//             <img src={logo} className="h-8 mr-3 sm:block" alt="Marboluxe" />
//             <span className="self-center sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Marboluxe
//             </span>
//           </Link>
//           <button
//             data-collapse-toggle="navbar-dropdown"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-dropdown"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             className="hidden w-full lg:w-auto lg:flex lg:flex-wrap  z-10"
//             id="navbar-dropdown"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <Link
//                   to="/dogal-taslar"
//                   className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500 md:hover:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent"
//                   aria-current="page"
//                 >
//                   Özel Koleksiyon
//                 </Link>
//               </li>

//               {/* Doğal Taşlar */}
//               <li>
//                 <button
//                   id="dropdownNavbarLink"
//                   data-dropdown-toggle="dropdownNavbar"
//                   className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 >
//                   Doğal Taşlar
//                   <svg
//                     className="w-2.5 h-2.5 ml-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   id="dropdownNavbar"
//                   className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <ul
//                     className="py-2 text-sm text-gray-700 dark:text-gray-400"
//                     aria-labelledby="dropdownLargeButton"
//                   >
//                     <li>
//                       <Link
//                         to="/dogal-taslar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Doğal Taşlar
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/kataloglar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ocaklar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bej Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Traverten
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Kuvars
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Porselen
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Granit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Oniks
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Limestone
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dolomit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Andezit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bazalt
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dış Mekan
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               {/* Plakalar */}
//               <li>
//                 <button
//                   id="dropdownNavbarLink"
//                   data-dropdown-toggle="dropdownNavbar"
//                   className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 >
//                   Plakalar
//                   <svg
//                     className="w-2.5 h-2.5 ml-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   id="dropdownNavbar"
//                   className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <ul
//                     className="py-2 text-sm text-gray-700 dark:text-gray-400"
//                     aria-labelledby="dropdownLargeButton"
//                   >
//                     <li>
//                       <Link
//                         to="/kataloglar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ocaklar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bej Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Traverten
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Kuvars
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Porselen
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Granit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Oniks
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Limestone
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dolomit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Andezit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bazalt
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dış Mekan
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               {/* Tezgahlar */}
//               <li>
//                 <button
//                   id="dropdownNavbarLink"
//                   data-dropdown-toggle="dropdownNavbar"
//                   className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 >
//                   Tezgahlar
//                   <svg
//                     className="w-2.5 h-2.5 ml-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   id="dropdownNavbar"
//                   className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <ul
//                     className="py-2 text-sm text-gray-700 dark:text-gray-400"
//                     aria-labelledby="dropdownLargeButton"
//                   >
//                     <li>
//                       <Link
//                         to="/kataloglar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ocaklar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bej Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Traverten
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Kuvars
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Porselen
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Granit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Oniks
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Limestone
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dolomit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Andezit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bazalt
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dış Mekan
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               {/* Ocaklar */}
//               <li>
//                 <button
//                   id="dropdownNavbarLink"
//                   data-dropdown-toggle="dropdownNavbar"
//                   className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 >
//                   Ocaklar
//                   <svg
//                     className="w-2.5 h-2.5 ml-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   id="dropdownNavbar"
//                   className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <ul
//                     className="py-2 text-sm text-gray-700 dark:text-gray-400"
//                     aria-labelledby="dropdownLargeButton"
//                   >
//                     <li>
//                       <Link
//                         to="/kataloglar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ocaklar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bej Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Traverten
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Kuvars
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Porselen
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Granit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Oniks
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Limestone
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dolomit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Andezit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bazalt
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dış Mekan
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               {/* Ürünler */}
//               <li>
//                 <button
//                   id="dropdownNavbarLink"
//                   data-dropdown-toggle="dropdownNavbar"
//                   className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 >
//                   Ürünler
//                   <svg
//                     className="w-2.5 h-2.5 ml-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   id="dropdownNavbar"
//                   className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <ul
//                     className="py-2 text-sm text-gray-700 dark:text-gray-400"
//                     aria-labelledby="dropdownLargeButton"
//                   >
//                     <li>
//                       <Link
//                         to="/kataloglar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ocaklar"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bej Mermer
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Traverten
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Kuvars
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Porselen
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Granit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Oniks
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Limestone
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dolomit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Andezit
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Bazalt
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/ozel-koleksiyon"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dış Mekan
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li>
//                 <Link
//                   to="/projeler"
//                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Projeler
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/tezgahlar"
//                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Kataloglar
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       ;
//     </div>
//   );
// };

// export default NavBar;

import {
  Avatar,
  Dropdown,
  // Dropdown,
  Navbar,
} from "flowbite-react";
// import logo from "../assets/logoForMarboLuxe.jpeg";
import logo from "../assets/marboluxe.jpg";
import "../app.css";
import { Link, useNavigate } from "react-router-dom";
import i18n from "../utils/i18n";
import Flag from "react-flagkit";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { MarboContext } from "../context/MarboContext";
import { SlMagnifier } from "react-icons/sl";

export default function NavbarWithDropdown() {
  const { setShow, searchText, setSearchText, dropdown, setDropdown } =
    useContext(MarboContext);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const changeTr = () => {
    i18n.changeLanguage("tr");
    setShow(true);
  };

  const changeEn = () => {
    i18n.changeLanguage("en");
    setShow(false);
  };

  const changeHandler = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setDropdown(false);

    navigate("/search-results");
  };

  const dropdownHandler = () => {
    setDropdown(!dropdown);
    // if (!dropdown) return setSearchText("");
  };

  return (
    <>
      <div className="flex justify-end h-6 items-center bg-slate-900 p-4">
        <div className="flex gap-4">
          <Flag
            country="TR"
            onClick={changeTr}
            className="hover:cursor-pointer"
          />
          <Flag
            country="US"
            onClick={changeEn}
            className="hover:cursor-pointer"
          />
        </div>
        <div className="dropdown">
          {<SlMagnifier onClick={dropdownHandler} />}
          <div
            className={`${dropdown ? "dropdown-content rounded-md" : "hidden"}`}
          >
            <form
              onSubmit={submitHandler}
              className="flex items-center gap-2 searchBox "
            >
              <input
                className="searchInput focus:!outline-0 focus:!outline-none rounded-md focus:border-none"
                type="text"
                value={searchText}
                onChange={changeHandler}
                placeholder="Search"
              />
              <button className="searchButton">
                <SlMagnifier onClick={submitHandler} size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Navbar fluid>
        <div className="flex gap-4">
          <Link to="/" className="flex md:mx-auto lg:mx-0">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Marboluxe
            </span>
          </Link>
        </div>

        {/* eslint-disable-next-line flowtype/require-valid-file-annotation*/}

        <Navbar.Toggle className="toggle-test" />
        <Navbar.Collapse className="md:order-2">
          <div className="test-dropdown flex flex-col md:flex-row">
            <Link
              to="/ozel-koleksiyon"
              className="flex items-center pr-2 hover:text-cyan-700 transition ease-in-out duration-200"
            >
              {t("ozel koleksiyon")}
            </Link>
            <Dropdown label={t("dogal taslar")} arrowIcon={false}>
              <Link
                to="/dogal-taslar"
                className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
              >
                <Dropdown.Item>{t("dogal taslar")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/mermer"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("mermer")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/bej-mermer"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("bej mermer")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/traverten"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("traverten")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/kuvars"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("kuvars")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/granit"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("granit")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/limestone"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("limestone")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/dolomit"
                className="hover:text-cyan-700
                  transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("dolomit")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/oniks"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("oniks")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/andezit"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("andezit")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/bazalt"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("bazalt")}</Dropdown.Item>
              </Link>
              <Link
                to="/dogal-taslar/dis-mekan"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("dis mekan")}</Dropdown.Item>
              </Link>
            </Dropdown>
            <Dropdown label={t("plakalar")} arrowIcon={false}>
              <div className="flex all gap-2 flex-col md:flex-row">
                <div className="plakalar-dropdown">
                  <Link
                    to="/plakalar"
                    className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
                  >
                    <Dropdown.Item>{t("plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/yari-degerli"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("yari degerli")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/mermer"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("mermer plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/bej-mermer"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("bej mermer plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/granit"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("granit plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/oniks"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("oniks plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/limestone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("limestone plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/traverten"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("traverten plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/andezit-bazalt"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>
                      {t("andezit bazalt plakalar")}
                    </Dropdown.Item>
                  </Link>
                </div>
                <div className="porselen-plakalar-dropdown">
                  <Link
                    to="/plakalar/porselen-plakalar"
                    className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
                  >
                    <Dropdown.Item>{t("porselen plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/porselen-plakalar/sintered"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("sintered plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/porselen-plakalar/levantec"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("levantec plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/porselen-plakalar/estestone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("estestone plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/porselen-plakalar/lamar"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("lamar plakalar")}</Dropdown.Item>
                  </Link>
                </div>
                <div className="kuvars-plakalar-dropdown">
                  <Link
                    to="/plakalar/kuvars-plakalar"
                    className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
                  >
                    <Dropdown.Item>{t("kuvars plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/kuvars-plakalar/caesarstone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("caesarstone plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/kuvars-plakalar/calisco"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("calisco plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/kuvars-plakalar/belenco"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("belenco plakalar")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/plakalar/kuvars-plakalar/cimstone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("cimstone plakalar")}</Dropdown.Item>
                  </Link>
                </div>
              </div>
            </Dropdown>
            <Dropdown label={t("tezgahlar")} arrowIcon={false}>
              <div className="tezgahlar-all flex gap-2 flex-col md:flex-row">
                <div className="kuvars-tezgahlar">
                  <Link
                    to="/tezgahlar/kuvars"
                    className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
                  >
                    <Dropdown.Item>{t("kuvars tezgah")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/kuvars/caesarstone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("caesarstone")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/kuvars/calisco"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("calisco")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/kuvars/belenco"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("belenco")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/kuvars/cimstone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("cimstone")}</Dropdown.Item>
                  </Link>
                </div>
                <div className="porselen-tezgahlar">
                  <Link
                    to="/tezgahlar/porselen"
                    className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
                  >
                    <Dropdown.Item>{t("porselen tezgah")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/sintered"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("sintered")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/levantec"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("levantec")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/estestone"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("estestone")}</Dropdown.Item>
                  </Link>
                  <Link
                    to="/tezgahlar/lamar"
                    className="hover:text-cyan-700 transition ease-in-out duration-200"
                  >
                    <Dropdown.Item>{t("lamar")}</Dropdown.Item>
                  </Link>
                </div>
              </div>
            </Dropdown>
            <Link
              to="/ocaklar"
              className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200 px-4"
            >
              {t("ocaklar")}
            </Link>
            <Dropdown label={t("urunler")} arrowIcon={false}>
              <Link
                to="/urunler"
                className="hover:text-cyan-700 transition ease-in-out duration-200 font-bold flex justify-center border-b border-b-orange-400"
              >
                <Dropdown.Item>{t("urunler")}</Dropdown.Item>
              </Link>
              <Link
                to="/urunler/cnc"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("cnc urunler")}</Dropdown.Item>
              </Link>
              <Link
                to="/urunler/waterjet"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("waterjet")}</Dropdown.Item>
              </Link>
              <Link
                to="/urunler/dekoratif"
                className="hover:text-cyan-700 transition ease-in-out duration-200"
              >
                <Dropdown.Item>{t("dekoratif urunler")}</Dropdown.Item>
              </Link>
            </Dropdown>
            <Link
              to="/projeler"
              className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200 px-4"
            >
              {t("projeler")}
            </Link>
            {/* <Link
              to="/kataloglar"
              className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200 px-4"
            >
              {t("kataloglar")}
            </Link> */}
          </div>
          {/* 
          
          <Link
            to="/dogal-taslar"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("dogal taslar")}
          </Link>
          <Link
            to="/plakalar"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("plakalar")}
          </Link>
          <Link
            to="/tezgahlar"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("tezgahlar")}
          </Link>
          <Link
            to="/ocaklar"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("ocaklar")}
          </Link>
          <Link
            to="/urunler"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("urunler")}
          </Link>
          <Link
            to="/projeler"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("projeler")}
          </Link>
          <Link
            to="/kataloglar"
            className="flex items-center hover:text-cyan-700 transition ease-in-out duration-200"
          >
            {t("kataloglar")}
          </Link>
          */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
