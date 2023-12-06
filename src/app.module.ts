import { Module, Logger} from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/users.entity';
import { Task } from './task.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '539561hgj',
      database: 'postgres',
      entities: ['./users/users.entity', './task.entity'],
    synchronize: true,
       logging: true, 
  }), UsersModule,
  TypeOrmModule.forFeature([User])],
  controllers: [TasksController, UserController],
  providers: [TasksService, UsersService ],
})
export class AppModule {}