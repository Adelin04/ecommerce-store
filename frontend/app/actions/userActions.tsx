'use server'

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
        .then((res) => { return res.json() });


    return user;
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