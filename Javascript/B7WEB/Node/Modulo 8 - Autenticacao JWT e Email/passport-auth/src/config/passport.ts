import passport from "passport";
import { BasicStrategy } from "passport-http";
import { User, UserInstance } from "../models/User";
import { NextFunction, Request, Response } from "express";

const notAuthorizedJson = { status: 401, message: "Not authorized!" };

//configuração da strategy
passport.use(
  new BasicStrategy(async (email, password, done) => {
    if (email && password) {
      const user = await User.findOne({
        where: { email, password },
      });
      if (user) return done(null, user);
    }
    return done(notAuthorizedJson, false);
  })
);

export const privateRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authFunction = passport.authenticate("lalall", (err : any, user : UserInstance) => {
    req.user = user;
    return user ? next() : next(notAuthorizedJson);
  });
  authFunction(req,res,next);
};
export default passport;
