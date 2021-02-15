import Cookies from 'cookies';

const TOKEN_NAME = 'token';

export const MAX_AGE = 1 * 24 * 60 * 60; // 1 day

export function setTokenCookie(req, res, token = '', remember = true) {
  const cookies = new Cookies(req, res);
  cookies.set(TOKEN_NAME, token, {
    ...(remember ? { expires: new Date(Date.now() + MAX_AGE * 1000) } : {}),
    // secure: process.env.NODE_ENV === 'production',
    // path: '/',
    sameSite: 'lax',
  });
}

export function removeTokenCookie(req, res) {
  const cookies = new Cookies(req, res);
  cookies.set(TOKEN_NAME);
}

export function getTokenCookie(req, res) {
  const cookies = new Cookies(req, res);
  return cookies.get(TOKEN_NAME);
}
