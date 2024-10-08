import React from 'react'
import { Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';


const AdminAbout = () => {


  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      const tempskills = values.skills.split(',');
      values.skills= tempskills;
      dispatch(ShowLoading());
      const response = await axios.post('https://portfolio-0fue.onrender.com/api/portfolio/update-about', {
        ...values,
        _id: portfolioData.about._id,  // Safe check using optional chaining
      });

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      dispatch(HideLoading());  // Ensure loading indicator is hidden after request completes
    }
  };

  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={{
        ...portfolioData.about,
        skills: portfolioData.about.skills.join(","),
      }} >
        <Form.Item name='lottieUrl' label='Lottie URL'>
          <Input placeholder='Lottie URL' />
        </Form.Item>

        <Form.Item name='description1' label='Description 1'>
          <Input.TextArea placeholder='Description 1' />
        </Form.Item>
        <Form.Item name='description2' label='Description 2'>
          <Input.TextArea placeholder='Description 2' />
        </Form.Item>
        <Form.Item name='skills' label='Skills'>
          <Input.TextArea placeholder='Skills' />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout
