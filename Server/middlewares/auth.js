
// import jwt from 'jsonwebtoken'

// const userAuth = async (req, res, next) => {
//     const {token} = req.headers;
    
//     if(!token) {
//         return res.json({ success: false, message: 'Not Authorized. Login Again '});
//     }

//     try {
//         const tokenDecode = jwt.verify(token, process.env.JET_SECRET);

//         if (tokenDecode.id) {
//             req.body.userId = tokenDecode.id;
//         } else {
//             return res.json({ success: false, message: 'Not Authorized. Login Again '});
//         }
//         next();
//     }

//     catch (error){
//         res.json({ success:false , message: 'not' })
//     }

// };

// export default userAuth;  


// import jwt from 'jsonwebtoken';

// const userAuth = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//             return res.json({ success: false, message: 'Token missing or invalid. Please log in.' });
//         }

//         const token = authHeader.split(' ')[1];
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

//         if (tokenDecode.id) {
//             req.body.userId = tokenDecode.id;
//             next();
//         } else {
//             return res.json({ success: false, message: 'Not Authorized. Login Again.' });
//         }
//     } catch (error) {
//         res.json({ success: false, message: 'Authorization failed. Please try again.' });
//     }
// };

// export default userAuth;


import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again123' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }
        next();
    } catch (err) {
        return res.json({ success: false, message: 'Authorization Failed' });
    }
};

export default userAuth;
