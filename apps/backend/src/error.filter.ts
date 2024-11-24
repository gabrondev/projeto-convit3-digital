import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(Error)
export default class ErroFilter implements ExceptionFilter{
    catch(exception: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();

        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();

        const status = (exception as any).getStatus
            ? (exception as any).getStatus() : 500; 

        console.error(exception);

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            messagem: exception.message,
        });
    }

}