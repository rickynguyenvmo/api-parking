import { EGuardDecoratorKey } from '../constant/constant';
export declare const GuardPublic: () => import("@nestjs/common").CustomDecorator<EGuardDecoratorKey>;
export declare const User: (...dataOrPipes: unknown[]) => ParameterDecorator;
