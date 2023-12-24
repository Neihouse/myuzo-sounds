import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prismaClient';

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.Email({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // add more providers here
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET,
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      encryption: true,
    },
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error',
      verifyRequest: '/auth/verify-request',
      newUser: '/auth/new-user',
    },
    callbacks: {
      session: async (session, user) => {
        session.userId = user.id;
        return Promise.resolve(session);
      },
    },
  });
