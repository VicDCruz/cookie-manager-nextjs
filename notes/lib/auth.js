import Iron from '@hapi/iron';
import { MAX_AGE, getTokenCookie, setTokenCookie } from './auth-cookies';

const { TOKEN_SECRET } = process.env;

export async function setLoginSession(req, res, session = {}, remember = true) {
  const createdAt = Date.now();
  const obj = { ...session, createdAt, maxAge: MAX_AGE, remember };
  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);
  setTokenCookie(req, res, token, remember);
}

export async function getLoginSession(req, res) {
  const token = getTokenCookie(req, res);
  if (!token) return null;
  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;
  if (session.remember && Date.now() > expiresAt)
    throw new Error('Sesión expirada');
  delete session.createdAt;
  delete session.maxAge;
  return session;
}
