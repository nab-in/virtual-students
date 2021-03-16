import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { resolveResponse } from '../../../core/resolvers/resolveresponse.resolver';
import { User } from '../entities/users.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Post()
  async createUser(
    @Req() req: any,
    @Res() res: any,
    @Body() createUserDTO: User,
  ) {
    try {
      const user = await this.service.create(createUserDTO);
      return res.status(HttpStatus.OK).send(resolveResponse(user));
    } catch (e) {
      res.status(HttpStatus.EXPECTATION_FAILED).send(e.message);
    }
  }
}
