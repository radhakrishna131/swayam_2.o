import { Injectable, UnauthorizedException } from '@nestjs/common';

export type Role = 'STUDENT' | 'INSTRUCTOR' | 'UNIVERSITY' | 'MODERATOR' | 'ADMIN' | 'SUPER_ADMIN';

@Injectable()
export class AuthService {
  assertRole(user: { roles: Role[] }, allowedRoles: Role[]) {
    if (!user.roles.some((role) => allowedRoles.includes(role))) {
      throw new UnauthorizedException('Insufficient role');
    }

    return true;
  }
}
