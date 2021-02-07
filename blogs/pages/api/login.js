export default (req, res) => {
  console.log(req.body);
  if (req.method === 'POST') {
    res.status(200).json({ name: 'John Doe' });
  } else {
    res.status(300).json({ status: 'wrong method' });
  }
};
