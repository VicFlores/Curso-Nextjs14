import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getProducts = async (id?: string) => {
  try {
    const token = env.SHOPIFY_API_KEY;
    if (!token) {
      throw new Error('SHOPIFY_ACCESS_TOKEN is not defined');
    }

    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token,
      },
    });

    const { products } = await response.json();

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });

    return transformedProducts;
  } catch (error) {
    console.log(error);
  }
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: {
      'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
    },
    cache: 'force-cache',
    next: {
      tags: ['main-products'],
    },
  });

  const { products } = await response.json();

  return products;
};
