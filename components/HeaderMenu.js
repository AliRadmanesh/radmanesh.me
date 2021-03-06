import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// const LogoType = () => {
//   return (
//     <div className="flex items-center">
//       <span className="font-Arial font-black text-3xl text-navy-blue">A</span>
//       <span className="font-Arial font-black text-3xl text-green">•</span>
//       <span className="font-Arial font-black text-3xl text-navy-blue">R</span>
//     </div>
//   );
// };

const HeaderMenu = () => {
  const [pathName, setPathName] = useState("NOT_SET");

  const pathArray = useRef([]);
  const MENU_ITEMS = [
    // { id: 1, title: "HOME", link: "/" },
    { id: 2, title: "Blog", link: "/blog" },
    { id: 3, title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    if (!pathArray.current.length) {
      pathArray.current = window.location.pathname.split("/");
      setPathName(pathArray.current[1]);
    }
  }, []);

  function renderMenu() {
    return (
      <>
        {/* <div className="md:hidden flex justify-between items-center pt-10 mb-4">
          <LogoType />
          <div className="flex items-center">
            <Icon
              icon="heroicons-solid:sun"
              width={32}
              className="text-navy-blue"
            />
            <button onClick={toggleMobileMenuVisibility}>
              <Icon
                icon="heroicons-solid:menu-alt-2"
                width={32}
                className="text-navy-blue ml-6"
              />
            </button>
          </div>
        </div> */}
        <div className="flex justify-end pt-10 mb-4">
          <div className="flex items-start">
            {MENU_ITEMS.map((item) => {
              const isLinkActive = `/${pathName}` === item.link;
              return isLinkActive ? (
                <div
                  key={item.id}
                  className="flex flex-col items-center mr-4 lg:mr-8 xl:mr-12"
                >
                  <Link href={item.link}>
                    <a className="font-Arial text-xl lg:text-2xl font-black text-light-white">
                      {item.title}
                    </a>
                  </Link>
                  <div className="w-3 h-3 rounded-full bg-orange mt-2" />
                </div>
              ) : (
                <Link key={item.id} href={item.link}>
                  <a className="font-Arial text-xl lg:text-2xl font-bold text-light-white mr-4 lg:mr-8 xl:mr-12 hover:underline">
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  // function renderMenu() {
  //   if (isMenuVisible) {
  //     return (
  //       <div className="bg-light-white w-full px-8 h-full fixed z-50 top-0 left-0 overflow-y-hidden">
  //         <div className="flex justify-between items-center pt-10 mb-4">
  //           <LogoType />
  //           <button onClick={toggleMobileMenuVisibility}>
  //             <Icon
  //               icon="akar-icons:cross"
  //               width={32}
  //               className="text-navy-blue ml-6"
  //             />
  //           </button>
  //         </div>
  //         <div className="w-full text-center grid grid-cols-1 grid-rows-5 gap-y-8 relative top-[10%]">
  //           {MENU_ITEMS.map((item) => {
  //             const isLinkActive = `/${pathName}` === item.link;
  //             return isLinkActive ? (
  //               <div key={item.id} className="flex flex-col items-center">
  //                 <Link href={item.link}>
  //                   <a className="font-Arial text-3xl font-black text-navy-blue">
  //                     {item.title}
  //                   </a>
  //                 </Link>
  //                 <div className="w-3 h-3 rounded-full bg-green mt-2" />
  //               </div>
  //             ) : (
  //               <Link key={item.id} href={item.link}>
  //                 <a className="font-Arial text-3xl font-bold text-gray">
  //                   {item.title}
  //                 </a>
  //               </Link>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     );
  //   }

  //   return (
  //     <>
  //       <div className="md:hidden flex justify-between items-center pt-10 mb-4">
  //         <LogoType />
  //         <div className="flex items-center">
  //           <Icon
  //             icon="heroicons-solid:sun"
  //             width={32}
  //             className="text-navy-blue"
  //           />
  //           <button onClick={toggleMobileMenuVisibility}>
  //             <Icon
  //               icon="heroicons-solid:menu-alt-2"
  //               width={32}
  //               className="text-navy-blue ml-6"
  //             />
  //           </button>
  //         </div>
  //       </div>
  //       <div className="hidden md:flex justify-between items-start pt-16 mb-4">
  //         <div className="flex items-start">
  //           {MENU_ITEMS.map((item) => {
  //             const isLinkActive = `/${pathName}` === item.link;
  //             return isLinkActive ? (
  //               <div
  //                 key={item.id}
  //                 className="flex flex-col items-center md:mr-4 lg:mr-8 xl:mr-12"
  //               >
  //                 <Link href={item.link}>
  //                   <a className="font-Arial text-2xl font-black text-navy-blue">
  //                     {item.title}
  //                   </a>
  //                 </Link>
  //                 <div className="w-3 h-3 rounded-full bg-green mt-2" />
  //               </div>
  //             ) : (
  //               <Link key={item.id} href={item.link}>
  //                 <a className="font-Arial text-2xl font-bold text-gray md:mr-4 lg:mr-8 xl:mr-12">
  //                   {item.title}
  //                 </a>
  //               </Link>
  //             );
  //           })}
  //         </div>
  //         <Icon
  //           icon="heroicons-solid:sun"
  //           width={lightIconWidth}
  //           className="text-navy-blue"
  //         />
  //       </div>
  //     </>
  //   );
  // }

  return <>{renderMenu()}</>;
};

export default HeaderMenu;
