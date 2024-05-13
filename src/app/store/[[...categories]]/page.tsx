import { ProductsWrapper } from 'app/components';
import {
  getCollectionProducts,
  getCollections,
} from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Categoria',
};

interface Props {
  params: {
    categories: string[];
  };

  searchParams: {
    [key: string]: string;
  };
}

const Category = async (props: Props) => {
  const { categories } = props.params;
  const searchParams = props.searchParams;

  let products = await getProducts();

  const collections = await getCollections();

  if (categories) {
    const selectedCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;

    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
};

export default Category;
