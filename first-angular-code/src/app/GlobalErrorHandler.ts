import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { LocationStrategy } from "@angular/common";

const resourceURL = 'http://localhost:3003/errors'

@Injectable()
export class GlobalErrorHandler extends ErrorHandler{

    constructor(
        private httpclient: HttpClient,
        private locationstrategy: LocationStrategy
    ) {super()}

    override handleError(error: any): void {
        var errorevent = {
            path: this.locationstrategy.path(),
            message: error.message?? error.toString(),
            handler: 'GlobalErrorHandler',
            user: 'current user',
            time: new Date(),
            stack: error.stack
        };
        this.httpclient.post(`${resourceURL}`, errorevent).subscribe(() => {});
    }

}