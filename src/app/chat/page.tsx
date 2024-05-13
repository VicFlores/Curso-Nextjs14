import Chat from 'app/components/Chat/Chat';
import { getProducts } from 'app/services/shopify/products';
import React from 'react';
import { createAgent } from '../../utils/gemini/createAgent';

const ChatPage = async () => {
  const products = await getProducts();

  const productsTitles = products.map((product: any) => product.title);

  const flatProductsTitles = productsTitles.join('\n');

  const agent = createAgent(flatProductsTitles);

  return (
    <>
      <h1>Azure OpenIa Chatbot</h1>

      <Chat agent={agent} />
    </>
  );
};

export default ChatPage;
