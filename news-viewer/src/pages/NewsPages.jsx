import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

export default function NewsPages() {
  let { category } = useParams();
  console.log(category);
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
