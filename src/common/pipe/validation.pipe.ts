import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform, Type, ValidationPipe } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class CustomValidationPipe extends ValidationPipe implements PipeTransform<any> {
  constructor() {
    super({ whitelist: true, transform: true });
  }

  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || this.isPrimitiveType(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      this.handleValidationErrors(errors);
    }

    return object;
  }

  private isPrimitiveType(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return types.includes(metatype);
  }

  private handleValidationErrors(errors: any[]) {
    const firstError = errors[0];

    if (firstError.constraints) {
      throw new BadRequestException(firstError.constraints[Object.keys(firstError.constraints)[0]]);
    } else if (firstError.children.length > 0) {
      this.findError(firstError.children);
    }
  }

  private findError(currentNode) {
    const node = currentNode[0];

    if (node?.constraints) {
      throw new BadRequestException(node.constraints[Object.keys(node.constraints)[0]]);
    }

    this.findError(node?.children);
  }
}
