import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID, res) => {
	const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});
	res.cookie("jwt", token, {
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV === "production",
		maxAge: 1000 * 60 * 60 * 24 * 15,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
	});
};

const clearCookie = (res) => {
	res.clearCookie("jwt");
};

export { generateTokenAndSetCookie, clearCookie };
