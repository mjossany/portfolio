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
        <InnerLayout className="blog">
          {
            blogs.map((blog) => (
              <div key={blog.id} className="blog-item">
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
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .blog-item {
      background-color: var(--background-dark-gray);
      padding: 2rem 1rem;
    }
    .image {
      width: 100%;
      height: 90%;
      img {
        width: 100%;
        height: 85%;
        object-fit: cover;
      }
    }
  }
`;

export default BlogsPage;
