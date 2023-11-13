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

import { Navbar } from "flowbite-react";
import logo from "../assets/logoForMarboLuxe.jpeg";
import "../app.css";
import { Link } from "react-router-dom";

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid>
      <Link to="/" className="flex md:mx-auto lg:mx-0">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Marboluxe
        </span>
      </Link>
      {/* eslint-disable-next-line flowtype/require-valid-file-annotation*/}
      {/* <div className="flex md:order-1">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <div>
        <Dropdown
          label={"Doğal Taşlar"}
          className="dropdownStyle"
          outline={false}
          style={{ background: "none" }}
        >
          <Dropdown.Item>Mermer</Dropdown.Item>
        </Dropdown>
      </div> */}
      <Navbar.Toggle />
      <Navbar.Collapse className="md:order-2">
        <Link
          to="/ozel-koleksiyon"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Özel Koleksiyon
        </Link>
        <Link
          to="/dogal-taslar"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Doğal Taşlar
        </Link>
        <Link
          to="/plakalar"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Plakalar
        </Link>
        <Link
          to="/tezgahlar"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Tezgahlar
        </Link>
        <Link
          to="/ocaklar"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Ocaklar
        </Link>
        <Link
          to="/urunler"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Ürünler
        </Link>
        <Link
          to="/projeler"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Projeler
        </Link>
        <Link
          to="/kataloglar"
          className="hover:text-cyan-700 transition ease-in-out duration-200"
        >
          Kataloglar
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
