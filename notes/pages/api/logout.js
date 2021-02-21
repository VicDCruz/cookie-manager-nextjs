import { removeTokenCookie } from '../../lib/auth-cookies';

export default (req, res) => {
  removeTokenCookie(req, res);
  res.writeHead(302, { Location: '/' })
  res.end();
};
