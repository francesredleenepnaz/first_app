import React from 'react'
import './blog.css';
import {Article} from '../../components';
import{blog01, blog02, blog03, blog04, blog05} from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_grpA">
            <Article imgUrl={blog01} date = "Febuary 2, 2023" title = " GPT-3 and Open AI is the future. Let us explore how it is?"  />
          </div>
          <div className="gpt3__blog-container_grpB">
            <Article imgUrl={blog02} date = "Febuary 2, 2023" title = " GPT-3 and Open AI is the future. Let us explore how it is?"  />
            <Article imgUrl={blog03} date = "Febuary 2, 2023" title = " GPT-3 and Open AI is the future. Let us explore how it is?"  />
            <Article imgUrl={blog04} date = "Febuary 2, 2023" title = " GPT-3 and Open AI is the future. Let us explore how it is?"  />
            <Article imgUrl={blog05} date = "Febuary 2, 2023" title = " GPT-3 and Open AI is the future. Let us explore how it is?"  />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog