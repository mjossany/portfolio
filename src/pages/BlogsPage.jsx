import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import blogs from '../data/blogs';

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsPageStyled>
        <Title title="Blogs" span="Blogs" />
        <InnerLayout>
          {
            blogs.map((blog) => (
              <div key={blog.id} className="blog">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <h4>
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))
          }
        </InnerLayout>
      </BlogsPageStyled>
    </MainLayout>
  );
}

const BlogsPageStyled = styled.div`

`;

export default BlogsPage;
