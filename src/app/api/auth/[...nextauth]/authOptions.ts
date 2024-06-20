
import { LOGIN_URL } from "@/lib/apiEndpoint"
import axiosClient from "@/lib/axios.config"
import { AuthOptions, ISODateString } from "next-auth"
import { JWT } from "next-auth/jwt";
import CredentialsProvider from 'next-auth/providers/credentials'

export interface CustomSession{
  admin?:CustomAdmin;
  expires: ISODateString;
}

export type CustomAdmin = {
  id:string|null;
  name:string|null;
  email:string|null;
  profile_image:string|null;
  token:string|null;
  created_at:string|null;
  // updated_at:string|null;
}

export const authOptions:AuthOptions = {
  pages:{
    signIn: "/login",
    
  },
  callbacks:{
    async jwt({token, user, trigger,session}){
      
      if(user){
        token.admin = user;
        
      }
      return token;
    },
  
      async session({ session, token }) {
      if (token.admin) {
        session.user = {
          ...session.user,
          ...token.admin,
        };
      }
      return session;
    },
  },
  providers: [
   CredentialsProvider({
    name: "Credentials",
    credentials:{
      email:{},
      password:{}
    },
    async authorize(credentials, req){
      // const res = await axiosClient.post(LOGIN_URL, credentials)
      // const response = res.data
      // console.log(response)
      // const admin = response.admin

         const res = await fetch("http://localhost:8000/api/auth/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        });

        const response = await res.json();
        console.log("Response in auth",response)
        const admin = response.admin;
        
      

      if(admin){
        return admin
      }else{
        return null;
      }
    }
   })
    // ...add more providers here
  ],
}




// import { AuthOptions, ISODateString } from "next-auth";
// import { JWT } from "next-auth/jwt";
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { LOGIN_URL } from "@/lib/apiEndpoint";

// export interface CustomSession {
//   admin?: CustomAdmin;
//   expires: ISODateString;
// }

// export type CustomAdmin = {
//   id: string | null;
//   name: string | null;
//   email: string | null;
//   profile_image: string | null;
//   token: string | null;
//   created_at: string | null;
//   // updated_at: string | null;
// }

// export const authOptions: AuthOptions = {
//   pages: {
//     signIn: "/login", // This should match your login page route
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.admin = user;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token.admin) {
//         session.user = {
//           ...session.user,
//           ...token.admin,
//         };
//       }
//       return session;
//     },
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         try {
//           const res = await fetch(LOGIN_URL, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(credentials)
//           });

//           const response = await res.json();
//           console.log("Response in auth", response);
//           const admin = response.admin;

//           if (admin) {
//             return admin;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.error("Error in authorize", error);
//           return null;
//         }
//       }
//     })
//   ],
// };