import "./app.css";
import React, { useRef, useState } from "react";
import AppRouter from "./router/AppRouter";
import MarboContextProvider from "./context/MarboContext";

const App = () => {
  const scrollRef = useRef();
  // const [active, setActive] = useState("");
  const scrollHandler = () => {
    //! Navbar active colors by scrolling
    // if (scrollRef.current.scrollTop === 0) {
    //   setActive("");
    // } else if (scrollRef.current.scrollTop > 13119) {
    //   setActive("donate");
    // } else if (scrollRef.current.scrollTop > 12219) {
    //   setActive("involved");
    // } else if (scrollRef.current.scrollTop > 11850) {
    //   setActive("team");
    // } else if (scrollRef.current.scrollTop > 10950) {
    //   setActive("stories");
    // } else if (scrollRef.current.scrollTop > 10048) {
    //   setActive("projects");
    // } else if (scrollRef.current.scrollTop > 696) {
    //   setActive("about");
    // } else if (scrollRef.current.scrollTop < 337) {
    //   setActive("");
    // }
  };
  return (
    <div ref={scrollRef} onScroll={scrollHandler}>
      <MarboContextProvider>
        <AppRouter />
      </MarboContextProvider>
    </div>
  );
};

export default App;
