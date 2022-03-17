import React from 'react';
import blogs from '../../data/blogs';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import Title from '../Title/Title';
import {
  BlogItem,
  BlogsPageContainer,
  BlogTitle,
  Image,
  ImageContainer,
  TitleContainer,
} from './Styled';

function BlogsPageComponent() {
  return (
    <MainLayout>
      <BlogsPageContainer>
        <Title title="Blogs" span="Blogs" />
        <InnerLayout className="blogs">
          {
            blogs.map((blog) => (
              <BlogItem key={blog.id}>
                <ImageContainer>
                  <Image src={blog.image} alt="" />
                </ImageContainer>
                <TitleContainer>
                  <BlogTitle href={blog.link}>
                    {blog.title}
                  </BlogTitle>
                </TitleContainer>
              </BlogItem>
            ))
          }
        </InnerLayout>
      </BlogsPageContainer>
    </MainLayout>
  );
}

export default BlogsPageComponent;
