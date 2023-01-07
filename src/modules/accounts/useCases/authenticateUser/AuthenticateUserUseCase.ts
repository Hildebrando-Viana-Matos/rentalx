import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuário existe
    const user = await this.usersRepository.findByEmail((email))

    if(!user) {
      throw new Error("Email or password incorrect")
    }
    
    // Senha está correta
    const passwordMath = await compare(password, user.password);

    if(!passwordMath) {
      throw new Error("Email or password incorrect")
    }

    // Gerar jsonwebtoken
    const token = sign({}, "bf6fa8cbb7686414aa0f04500a7a50ff", {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      user,
      token
    }
  }
}

export { AuthenticateUserUseCase }