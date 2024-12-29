import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function SidebarItems({ item, setSelectedKey, selectedKey}) {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    // Call setSelectedKey with the key of the current item
    setSelectedKey(item.key);
  };
  if (item.childrens) {
    return (
      <div>
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className="sidebar-title">
            <span onClick={handleItemClick}>
              {/* <Link to="/d"> */}
              {item.icon && <i class={item.icon}></i>}
              {item.title}
              {/* </Link> */}
            </span>

            <i
              class="fa-solid fa-chevron-down toggle-btn"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
          <div className="sidebar-content">
            {item.childrens.map((item, index) => (
              <SidebarItems key={index} item={item}  setSelectedKey={setSelectedKey}
              selectedKey={selectedKey} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <span onClick={handleItemClick} >{item.title}</span>
      </div>
    );
  }
}
