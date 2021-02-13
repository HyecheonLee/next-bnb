import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";
import { StoredUserType } from "../../../types/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "DELETE") {
      res.setHeader(
        "Set-Cookie",
        `access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly`
      );
      res.statusCode = 204;
      return res.end();
    }
  } catch (e) {
    console.log(e);
    return res.send(e.message);
  }
  res.statusCode = 405;

  return res.end();
};
