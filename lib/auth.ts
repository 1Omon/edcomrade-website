import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";
import Admin from "@/models/Admin";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin@edcomrade.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                }
                
                await connectToDatabase();
                const admin = await Admin.findOne({ email: credentials.email });
                
                if (!admin) {
                    throw new Error("No admin found with this email");
                }

                const isValid = await bcrypt.compare(credentials.password, admin.passwordHash);
                
                if (!isValid) {
                    throw new Error("Invalid password");
                }

                return {
                    id: admin._id.toString(),
                    email: admin.email,
                    name: admin.name
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).id = token.id;
            }
            return session;
        }
    },
    pages: {
        signIn: '/admin/login',
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback_secret_override"
};
