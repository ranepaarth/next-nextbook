import NextAuth from 'next-auth/next';
import { nextAuthOptions } from './nextAuthOptions';

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
