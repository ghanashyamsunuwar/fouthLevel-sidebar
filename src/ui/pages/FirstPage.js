import React, { useState, useEffect } from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import { Table, Button, Modal, Form, Input } from "antd";
import axios from "axios";

const FirstPage = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  // const [confirmModal, setConfirmModal] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const [firstPage, setfirstPage] = useState(true);
  const [secondPage, setsecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showFirst = () => {
    setfirstPage(true);
    setsecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
  };

  const showSecond = () => {
    setfirstPage(false);
    setsecondPage(true);
    setThirdPage(false);
    setFourthPage(false);
  };
  const showThird = () => {
    setfirstPage(false);
    setsecondPage(false);
    setThirdPage(true);
    setFourthPage(false);
  };
  const showFourth = () => {
    setfirstPage(false);
    setsecondPage(false);
    setThirdPage(false);
    setFourthPage(true);
  };

  const handleAdd = () => {
    setEditedItem(null);
    setModalVisible(true);
  };

  const handleEdit = (item) => {
    setEditedItem(item);
    setModalVisible(true);
  };
  const showDeleteConfirm = (id) => {
    const itemToDelete = data.find((item) => item.id === id);
    setDeleteItem(itemToDelete);
    Modal.confirm({
      title: `Confirm Delete "${itemToDelete.title}"`,
      content: "Are you sure you want to delete this item?",
      onOk: () => handleDelete(id),
      onCancel: () => setDeleteItem(null),
    });
  };

  const handleDelete = (id) => {
    // Perform delete operation
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    // setConfirmModal(false);
    setDeleteItem(null);
  };

  const handleSave = (values) => {
    if (editedItem) {
      // Perform update operation
      const updatedData = data.map((item) =>
        item.id === editedItem.id ? { ...item, ...values } : item
      );
      setData(updatedData);
    } else {
      // Perform add operation
      const newItem = { id: data.length + 1, ...values };
      setData([...data, newItem]);
    }

    setEditedItem(null);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => showDeleteConfirm(id)}>
            Delete
          </Button>
          <Button type="link" onClick={() => showSecond()}>
            Next Level
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="pl-3">
      {firstPage && (
        <>
          <h2 className="text-2xl p-2"> Level One Table</h2>
          <div className="flex justify-end">
            <Button
              className="bg-blue-500 text-white font-bold py-1  px-4 rounded"
              type="primary"
              onClick={handleAdd}
            >
              Add Title
            </Button>
          </div>

          <Table dataSource={data} columns={columns} rowKey="id" />

          <Modal
            title={editedItem ? "Edit Item" : "Add Title"}
            visible={modalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <Form initialValues={editedItem || {}} onFinish={handleSave}>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: "Please enter a status" }]}
              >
                <Input />
              </Form.Item>
              <Button
                className="bg-blue-500 text-white font-bold py-1  px-4 rounded "
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </Form>
          </Modal>
        </>
      )}
      {secondPage && <SecondPage showThird={showThird} />}
      {thirdPage && <ThirdPage showForth={showFourth} />}
      {fourthPage && <FourthPage showFirst={showFirst} />}
    </div>
  );
};

export default FirstPage;
