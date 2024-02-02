import { ArgumentMetadata, PipeTransform, ValidationPipe } from '@nestjs/common';
export declare class CustomValidationPipe extends ValidationPipe implements PipeTransform<any> {
    constructor();
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private isPrimitiveType;
    private handleValidationErrors;
    private findError;
}
