import { Form, Input, message, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminProjects = () => {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;

    const [showAddEditModel, setShowAddEditModel] = useState(false);
    const [selectedForEdit, setSelectedItemForEdit] = useState(null);
    const [type, setType] = React.useState("add");

    const onFinish = async (values) => {
        try {
            const tempTechnologies = values?.technologies?.split(",") || [];
            values.technologies = tempTechnologies;
            dispatch(ShowLoading());
            let response;
            if (selectedForEdit) {
                response = await axios.post("https://portfolio-0fue.onrender.com/api/portfolio/update-project", {
                    ...values,
                    _id: selectedForEdit._id,
                });
            } else {
                response = await axios.post('https://portfolio-0fue.onrender.com/api/portfolio/add-project', values);
            }

            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModel(false);
                setSelectedItemForEdit(null);
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            dispatch(HideLoading());
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("https://portfolio-0fue.onrender.com/api/portfolio/delete-project", {
                _id: item._id,
            });

            dispatch(HideLoading());

            if (response.data.success) {
                message.success(response.data.message);
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        } 
    };

    return (
        <div>
            <div className="flex justify-end">
                <button
                    className='bg-primary px-5 py-2 text-white'
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setShowAddEditModel(true);
                    }}
                >
                    Add Project
                </button>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1 md:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className='shadow border p-5 border-gray-400 flex flex-col'
                    >
                        <h1 className='text-primary text-xl font-bold'>{project.title}</h1>
                        <hr />
                        <img src={project.image} alt="" className='h-60 w-80 '/>
                        <h1>Role: {project.title}</h1>
                        <h1>{project.description}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button
                                className='bg-red-500 text-white px-5 py-2'
                                onClick={() => {
                                    onDelete(project);
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className='bg-primary text-white px-5 py-2'
                                onClick={() => {
                                    setSelectedItemForEdit(project);
                                    setShowAddEditModel(true);
                                    setType("edit")
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

           {
            (type === "add" ||
            selectedForEdit) &&  <Modal
            open={showAddEditModel}
            title={selectedForEdit ? "Edit project" : "Add project"}
            footer={null}
            onCancel={() =>{
                setShowAddEditModel(false);
                setSelectedItemForEdit(null);
            } }
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
                initialValues={
                    {
                        ...selectedForEdit,
                        technologies : selectedForEdit?.technologies?.join(" , "),
                        
                    } || {}
                }
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please input the period!' }]}
                >
                    <Input placeholder='Title' />
                </Form.Item>
                <Form.Item
                    name="image"
                    label="Image URL"
                    rules={[{ required: true, message: 'Please input the company!' }]}
                >
                    <Input placeholder='Image' />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please input the title!' }]}
                >
                    <textarea placeholder='description' />
                </Form.Item>
                <Form.Item
                    name="link"
                    label="Link"
                    rules={[{ required: true, message: 'Please input the Link!' }]}
                >
                    <input placeholder='Link' />
                </Form.Item>
                <Form.Item
                    name="technologies"
                    label="Technologes"
                    rules={[{ required: true, message: 'Please input the description!' }]}
                >
                    <input placeholder='Technologies' />
                </Form.Item>

                <div className="flex justify-end">
                    <button
                        className='border-primary text-primary px-5 py-2'
                        onClick={() => {
                            setShowAddEditModel(false);
                            setSelectedItemForEdit(null);

                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className='bg-primary text-white px-5 py-2'
                    >
                        {selectedForEdit ? "Update" : "Add"}
                    </button>
                </div>
            </Form>
        </Modal>
           }
        </div>
    );
};

export default AdminProjects;
