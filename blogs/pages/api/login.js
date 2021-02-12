import { URL_BACKEND } from '../constants';
import { setLoginSession } from '../../lib/auth';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { remember } = req.body;
    const body = JSON.stringify({
      identifier: req.body.email,
      password: req.body.password,
    });
    const response = await fetch(`${URL_BACKEND}/auth/local`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const data = await response.json();
    if (data.statusCode && data.statusCode === 400)
      res.status(400).json({ error: 'Credenciales incorrectas' });
    else if (data.user) {
      const { user } = data;
      if (user.confirmed && !user.bloqued) {
        console.log('==== Inicio de creación de cookie ====');
        await setLoginSession(
          req,
          res,
          {
            jwt: data.jwt,
            user: {
              username: user.username,
              email: user.email,
              role: user.role,
            },
          },
          !!remember
        );
        console.log('==== Fin de creación de cookie ====');
        res.status(200).json({ success: true });
      }
    } else res.status(400).json({ error: 'Error desconocido' });
  } else {
    res.status(300).json({ error: 'Método incorrecto' });
  }
};
