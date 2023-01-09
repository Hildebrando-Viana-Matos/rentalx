// Garantir que o usuário que tá fazendo a requisição, seja um usuário válido

import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request:Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  // Se tem algum token
  if(!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  // Verificar se é um token válido
  try {
    const { sub: user_id } = verify(token, "bf6fa8cbb7686414aa0f04500a7a50ff") as IPayload;

    const userRepository = new UsersRepository();

    const user = await userRepository.findById(user_id);

    if(!user) {
      throw new Error("User does not exists!")
    }
    
    next();
  } catch (error) {
    throw new Error("Invalid token!")
  }
}