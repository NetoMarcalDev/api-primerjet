import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'; 
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from './jwt-payload.interface';
import { UsersRepository } from "./repositories/user.repository";
import { User } from './entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ) {
        super({
            secretOrKey: '@TopSecret51',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: JwtPayload): Promise<User> {
        const { username } = payload;
        const user: User = await this.usersRepository.findOne({ username });

        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
