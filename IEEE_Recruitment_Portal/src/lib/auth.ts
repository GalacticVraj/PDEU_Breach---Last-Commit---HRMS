'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { DB, User } from './types';

import connectDB from './dbConfig';
import { UserModel } from '@/models/models';

export async function login(currentState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    await connectDB();
    const user = await UserModel.findOne({ email });

    // Compare plaintext for now (as per prototype reqs)
    if (user && user.passwordHash === password) {
        // Create session
        const session = JSON.stringify({
            id: user.id,
            name: user.name,
            role: user.role,
            departmentId: user.departmentId
        });

        const cookieStore = await cookies();
        cookieStore.set('session', session, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        });

        return { success: true };
    }

    return { error: 'Invalid credentials' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    redirect('/login');
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get('session');
    if (!session?.value) return null;
    try {
        return JSON.parse(session.value) as Partial<User>;
    } catch {
        return null;
    }
}
