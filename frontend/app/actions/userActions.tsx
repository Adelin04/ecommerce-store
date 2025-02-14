'use server'

import axios from 'axios';
import { cookies } from 'next/headers';

export async function checkIsAuth() {
    // const accessToken = cookies().get('accessToken')?.value;
    // const refreshToken = cookies().get('refreshToken')?.value;

    if (!cookies().has('accessToken')) return false;

    const user = await fetch(`${process.env.DEV_URI}auth/profile`,
        {
            method: 'GET',
            headers: {
                Cookie: cookies().getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; '),
            },
        })
        .then((res) => { return res.json() })
        .then((data) => { return data })
        .catch((error) => {
            console.log(error);

            if (error instanceof Error)
                return null;
        });

    return user
}

export async function refreshToken() {
    if (!cookies().has('refreshToken')) return false;

    const user = await fetch(`${process.env.DEV_URI}auth/refresh-token`,
        {
            method: 'GET',
            headers: {
                Cookie: cookies().getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; '),
            },
        })
        .then((res) => { return res.json() });

    console.log('user', user);
    return user;
}

export async function login(email: string, password: string) {
    if (!email || !password) return;

    const result = await fetch(`${process.env.DEV_URI}auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => { return res.json() });

    if (result.success) {
        const { accessToken, refreshToken } = result;
        // cookies().set('accessToken', accessToken);
        // cookies().set('refreshToken', refreshToken);

        cookies().set("accessToken", accessToken, {
            httpOnly: true, // prevent XSS attacks, cross site scripting attack
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
            maxAge: 24 * 60 * 60 * 1000, // one hour
        });
        cookies().set("refreshToken", refreshToken, {
            httpOnly: true, // prevent XSS attacks, cross site scripting attack
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
    }

    return result.user;
}

export async function register(body: any) {
    const { firstName, lastName, email, password } = body
    const user = await fetch(`${process.env.DEV_URI}auth/signup`, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => { return res.json() });

    return user;
}

export async function logout() {
    await fetch(`${process.env.DEV_URI}auth/logout`,
        {
            method: 'GET',
            headers: {
                Cookie: cookies().getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; '),
            },
        })
        .then((res) => { return res.json() });
}

export async function updateUserById(image: any, id: string | number) {
    try {
        const response = await fetch(`${process.env.DEV_URI}user/updateUserById/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ imageProfile: image }),
                headers: {
                    Cookie: cookies().getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; '),
                },
            }
        )
            .then((res) => { return res.json() });
    } catch (error) {
        throw error;
    }
};

export async function uploadImageProfileUser(formData: any, id: string | number) {
    try {
        const response = await fetch(`${process.env.DEV_URI}user/uploadImageProfileUser/${id}`, {
            method: 'POST',
            body: formData
        }).then((res) => { return res.json() });
        console.log(response);

        return response

    } catch (error) {
        throw error;
    }
};