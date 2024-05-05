import { Injectable } from '@nestjs/common';
// Dog Schema Model
@Injectable()
export class DogService {
  public getHello(): string {
    return 'Wow Wow!';
  }

  public introduce(): string {
<<<<<<< HEAD
    return 'My name is Rex!';
  }
  public modifyDetail(): string {
    return 'Succsessfully Modified!';
=======
    return 'My name is Rexboy';
>>>>>>> origin/develop
  }
}
