import dotenv from "dotenv";
import cowsay from "cowsay";



dotenv.config();

console.log(
	cowsay.say({
		text: `Bonjour, je suis ${process.env.NAME} j'étudie avec la promo ${process.env.CAMPUS}`,
		e: "oO",
		T: "U",
	}),
);

