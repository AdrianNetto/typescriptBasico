import React from "react";

interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  // enum

  category: Category;
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  RB = "Ruby"
}

const Desctucturing = ({
  title,
  content,
  commentsQty,
  tags,
  category
}: Props): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Desctucturing;
