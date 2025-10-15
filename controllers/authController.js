const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../schema/auth');

// Register Router
const registerUser =  async (req, res) => {
  const { username, password } = req.body;

  try {
    let auth = await Auth.findOne({ username });

    if (auth) {
      return res.status(400).json({ message: 'Student already exists' });
    }

    auth = new Auth({ username, password });

    const salt = await bcrypt.genSalt(10);
    auth.password = await bcrypt.hash(password, salt);

    await auth.save();

    const payload = {
      user: {
        id:auth._id,
        username: auth.username,
        isAdmin : auth.isAdmin,
      }
    };

    jwt.sign(payload, "hinduja", { expiresIn: '4D' }, (error, token) => {
      if (error) throw error;
      res.header('Authorization', token).json({ token });
      res.json({ token });
      
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login Route
const loginUser =  async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const auth = await Auth.findOne({ username });

    if (!auth) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, auth.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: auth._id,
        username: auth.username,
        isAdmin : auth.isAdmin,
      }
    };

    jwt.sign(payload, "hinduja", { expiresIn: '4D' }, (error, token) => {
      if (error) throw error;
      res.header('Authorization', token).json({ token });
      res.json({ token });
      localStorage.setItem("token", token);
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const logoutUser = async(req,res) =>{
  
}

const verifyToken = async(req, res) => {
  const {token} = req.body;
  if(!token){
    res.status(401).json({ message: 'Login first'})
  }
  try {
      const decoded = jwt.verify(token, "hinduja");
      if (!decoded.user) { 
          res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        else{
          res.status(200).json({ message: 'Protected route accessed successfully' });
        }
  } catch (error) {
      res.status(401).json({ message: 'Internal server error' });
  }
};


module.exports = {
  registerUser,
  loginUser,
  verifyToken
};
