import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";

// export default function EditModal({open, onOk, onCancel, title,status, disc}) {
    export default function EditModal({open, onOk, onCancel,id}) {
        const [item, setItem] = useState([]); 
        useEffect(() => {
            // Fetch data from the JSON file
            fetch('/data.json')
              .then((response) => response.json())
              .then((data) => {
                // Find the item with the specified id
                const selectedItem = data.find((item) => item.id === id);
                setItem(selectedItem || { title: item.title , description: item.description, status: item.status });
              })
              .catch((error) => console.error('Error fetching data:', error));
          }, [id]);
        
  return (
    <>
      <Modal
      title= "edit data"

        open={open}
        onOk={onOk}
        onCancel={onCancel}
        
      >
            <div>
         <h2></h2>
      <label>
        Title:{item.title}
        <input
        className="text-black"
          type="text"
          value={item.title}
        // value={item.title}
        //   onChange={(e) => setEditedTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
        //   value={editedDescription}
        //   onChange={(e) => setEditedDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
        //   value={editedStatus}
        //   onChange={(e) => setEditedStatus(e.target.value)}
        />
      </label>
      </div>
      
      <br />
      {/* <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button> */}
      
      </Modal>
    </>
  );
}
