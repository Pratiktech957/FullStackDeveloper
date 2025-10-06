import jwt from "jsonwebtoken";

const genToken = (userId) => {
  try {
    const token = jwt.sign(
      { id: userId }, // payload
      process.env.JWT_SECRET, // secret
      { expiresIn: "7d" } // options
    );
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};

export default genToken;
