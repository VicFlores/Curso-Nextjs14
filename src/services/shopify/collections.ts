import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getCollections = async () => {
  try {
    const token = env.SHOPIFY_API_KEY;
    if (!token) {
      throw new Error('SHOPIFY_ACCESS_TOKEN is not defined');
    }

    const response = await fetch(shopifyUrls.collections.all, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token,
      },
    });

    const { smart_collections } = await response.json();

    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      };
    });

    return transformedCollections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (collectionId: string) => {
  try {
    const token = env.SHOPIFY_API_KEY;
    if (!token) {
      throw new Error('SHOPIFY_ACCESS_TOKEN is not defined');
    }

    const response = await fetch(
      shopifyUrls.collections.products(collectionId),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': token,
        },
      }
    );

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};
