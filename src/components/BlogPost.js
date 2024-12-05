import React from 'react';

const BlogPost = ({ title, content, author, date }) => {
  return (
    <article className="blog-post">
      <header>
        <h2>{title}</h2>
        <div className="meta">
          <span>Von {author}</span>
          <span>•</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </header>
      <div className="content">
        {content}
      </div>
    </article>
  );
};

export default BlogPost;
