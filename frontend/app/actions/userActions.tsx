'use server'

import { cookies } from 'next/headers';

export async function checkIsAuth() {
    const accessToken = cookies().get('accessToken')?.value;
    const refreshToken = cookies().get('refreshToken')?.value;
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