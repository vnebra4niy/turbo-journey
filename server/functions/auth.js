import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id, name: user.name }, 'MySecretKey721', { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'MySecretKey721');
    return decoded;
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };