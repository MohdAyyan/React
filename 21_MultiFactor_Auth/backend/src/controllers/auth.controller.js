import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import speakeasy from "speakeasy";
import jwt from "jsonwebtoken";
import qrCode from "qrcode"

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json("Please provide username and password");
    }
    const existinguser = await User.findOne({ username });
    if (existinguser) {
      return res.status(400).json("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, isMfaActive: false });
    res.status(200).json({
      message: "User Registered Successfully",
      user
    });
  } catch (error) {
    console.log("Error in Registering User", error);
    res.status(500).json({ msg: "Error in Registering User" });
  }
};

const loginUser = async (req, res) => {
    console.log(req.user);
    res.status(200).json({
        message: "User Logged In Successfully",
        username: req.user.username,
        isMfaActive: req.user.isMfaActive,
    })
};

const logoutUser = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({msg:"User Not Authenticated"});
  }
  req.logout((err) => {
    if (err) return res.status(500).json({msg:"Error logging out user"});
    return res.status(200).json({msg: "User logged out successfully"});
  });
};

const authStatus = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      message: "User Authenticated",
      username: req.user.username,
      isMfaActive: req.user.isMfaActive,
    })
  }
  else{
    res.status(401).json({
     msg:" User Not Authenticated" 
    }
    )
  }
};

const setup2FA = async (req, res) => {
  // Placeholder for 2FA setup logic
try {
  const user = req.user;
  const secret = speakeasy.generateSecret({length: 20});
  user.mfaSecret = secret.base32;
  user.isMfaActive = true;
  await user.save();
  const otpauthUrl = speakeasy.otpauthURL({
    secret: secret.base32,
    label:`${req.user.username}`,
    issuer:"mohdayyan.com",
    encoding:true
  })
  const qrImage= await qrCode.toDataURL(otpauthUrl, (err, dataUrl) => {
    res.status(200).json({
      message: "2FA Setup Successful",
      qrCode: dataUrl,
      secret: secret.base32
    })
  })
} catch (error) {
  res.status(500).json({msg:"Error in setting up 2FA"})
}
};

const verify2FA = async (req, res) => {
  // Placeholder for 2FA verification logic
  const { token } = req.body;
  const user = req.user;
  const verified = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: "base32",
     token,
  });
  if (verified) {
    const jwtToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "2FA Verified Successfully",
      token: jwtToken
    });
  } else {
    res.status(400).json({
      message: "2FA Verification Failed",
    });
  }
};

const reset2FA = async (req, res) => {
  // Placeholder for 2FA reset logic
  try {
    const user = req.user;
    user.mfaSecret = null;
    user.isMfaActive = false;
    await user.save();
    res.status(200).json({
      message: "2FA Reset Successful",
    })
  } catch (error) {
    res.status(500).json({msg:"Error in resetting 2FA"})
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  authStatus,
  setup2FA,
  verify2FA,
  reset2FA,
};
