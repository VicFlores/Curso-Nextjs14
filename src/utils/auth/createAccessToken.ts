import { GraphQLClientSingleton } from 'app/graphql';
import { customerAccessTokenCreateMutation } from 'app/graphql/mutations/customerAccessTokenCreate';
import { cookies } from 'next/headers';

export const createAccessToken = async (email: string, password: string) => {
  const cookieStore = cookies();

  const graphqClient = GraphQLClientSingleton.getInstance().getClient();

  const { customerAccessTokenCreate }: any = await graphqClient.request(
    customerAccessTokenCreateMutation,
    {
      email,
      password,
    }
  );

  const { accessToken, expiresAt } =
    customerAccessTokenCreate?.customerAccessToken;

  if (accessToken) {
    cookieStore.set('accessToken', accessToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: 'strict',
    });
  }
};
