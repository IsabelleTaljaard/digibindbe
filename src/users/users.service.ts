import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

//methods called by controller
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  /**
   * INSERT new user into DB
   * @param user new user
   */
  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  /**
   * SELECT * from user
   */
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  /**
   * SELECT * from user WHERE userNumber = number
   * @param userNumber to lookup
   */
  async findOne(userNumber: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(userNumber);
      return user;
    } catch (err) {
      //todo Add error handling here
      throw err;
    }
  }

  /**
   * Updates user
   * @param user updated version of the user
   */
  async updateUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  /**
   * Updates user display name
   * @param userNumber user that should be updated
   * @param userDisplayName user new display name
   */
  async updateUserDisplayName(
    userNumber: number,
    userDisplayName: string,
  ): Promise<User> {
    const user = await this.findOne(userNumber);
    user.userDisplayName = userDisplayName;
    return this.usersRepository.save(user);
  }

  /**
   * Updates user email
   * @param userNumber user that should be updated
   * @param userEmail user new email
   */
  async updateUserEmail(userNumber: number, userEmail: string): Promise<User> {
    const user = await this.findOne(userNumber);
    user.userEmail = userEmail;
    return this.usersRepository.save(user);
  }

  /**
   * Updates user password
   * @param userNumber user that should be updated
   * @param userPassword user new password
   */
  async updateUserPassword(
    userNumber: number,
    userPassword: string,
  ): Promise<User> {
    const user = await this.findOne(userNumber);
    user.userPassword = userPassword;
    return this.usersRepository.save(user);
  }

  /**
   * Removes a user
   * @param userNumber user that should be delete
   */
  async remove(userNumber: number) {
    return await this.usersRepository.delete({ userNumber: userNumber });
  }

  /**
   * Finds a user based on email
   * @param userEmail email to use
   */
  findByEmail(userEmail: string): Promise<User> {
    return this.usersRepository.findOne({ userEmail: userEmail });
  }
}
