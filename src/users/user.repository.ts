import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity'; // Подставьте вашу собственную сущность пользователя

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Дополнительные методы репозитория могут быть добавлены здесь
}
