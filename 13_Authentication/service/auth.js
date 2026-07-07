
const jwt=require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

function setUser(userFound){
    return jwt.sign({
        _id: userFound._id,
        email: userFound.email,
    },secret);
}
function getUser(token){
    if(!token) return null;
    return jwt.verify(token,secret);
}

module.exports={
    setUser,
    getUser,
}