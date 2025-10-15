const jwt = require('jsonwebtoken');

const verifyToken = async(req, res) => {
    const {token} = req.body;
    console.log(``, token);
    try {
        const decoded = jwt.verify(token, "hinduja");
        if (!decoded.user) {

            res.status(401).json({ message: 'Unauthorized: Invalid token' });
          }
          else{
           
            res.status(200).json({ message: 'Protected route accessed successfully' });
          }
    } catch (error) {
        
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.export ={ verifyToken};
