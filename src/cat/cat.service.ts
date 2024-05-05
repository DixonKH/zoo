import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'Myow';
  }

  public intoduce(): string {
    return 'My name is Tom';
  }
}
