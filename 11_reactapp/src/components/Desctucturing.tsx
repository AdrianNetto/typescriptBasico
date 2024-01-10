import React from "react";

interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
}

const Desctucturing = ({ title, content, commentsQty, tags }: Props): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map(tag => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Desctucturing;
