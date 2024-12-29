import React, { useState } from "react";
import SidebarItems from "./SidebarItems";
import { useNavigate } from "react-router-dom";
import items from "../../data/sidebar.json";
import FirstPage from "../../pages/FirstPage";
import SecondPage from "../../pages/SecondPage";
import ThirdPage from "../../pages/ThirdPage";
import FourthPage from "../../pages/FourthPage";

export default function Sidebar() {
  const [selectedKey, setSelectedKey] = useState("0");
  const nevigate = useNavigate();
  //for next page 
  // const [firstPage, setfirstPage] = useState(true);
  // const [secondPage, setsecondPage] = useState(false);
  // const [thirdPage, setThirdPage] = useState(false);
  // const [fourthPage, setFourthPage] = useState(false);

  // const showFirst = () => {
  //   setfirstPage(true);
  //   setsecondPage(false);
  //   setThirdPage(false);
  //   setFourthPage(false);
  // };

  // const showSecond = () => {
  //   setfirstPage(false);
  //   setsecondPage(true);
  //   setThirdPage(false);
  //   setFourthPage(false);
  // };
  // const showThird = () => {
  //   setfirstPage(false);
  //   setsecondPage(false);
  //   setThirdPage(true);
  //   setFourthPage(false);
  // };
  // const showFourth = () => {
  //   setfirstPage(false);
  //   setsecondPage(false);
  //   setThirdPage(false);
  //   setFourthPage(true);
  // };

  const renderContent = () => {
    switch (selectedKey) {
      case "0" :
        return(
          <div>
            
          </div>
        );
        // case "0.3" :
        //   return(
        //     <div>
        //       <FirstPage/>
        //     </div>
        //   );
          case "0.3" :
            return(
              <div>
                {/* <Link to='firstlevel'></Link> */}
                {/* {nevigate("/firstlevel")} */}
               <FirstPage />
              </div>
            );
            case "0.3.2" :
              return(
                <div>
                  {/* {nevigate("/secondlevel")} */}
                 <SecondPage  />
                </div>
              );
              case "0.3.2.1" :
                return(
                  <div>
                 <ThirdPage />
                  </div>
                );
                case "0.3.3.1.0" :
                  return(
                    <div>
                    <FourthPage />
                    </div>
                  );
      case 1 :
        return(
          <div>
            <h1>it is account 1</h1>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Its Profile 2</h1>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>its advance 3</h1>
          </div>
        );
      default:
    }
  };
  return (
    <div className="main">
    <div className="flex">
      <div className="sidebar">
        {items.map((item, index) => (
          <SidebarItems
            key={index}
            item={item}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        ))}
      </div>
      <div className="">
        {renderContent()}
      </div>
    </div>
    </div>
  );
}
