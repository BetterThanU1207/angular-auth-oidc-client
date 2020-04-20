import { NgModule } from '@angular/core';
import { DataService } from './api/data.service';
import { HttpBaseService } from './api/http-base.service';
import { AuthStateService } from './authState/auth-state.service';
import { ConfigurationProvider, OidcConfigService } from './config';
import { EventsService } from './events';
import { CheckSessionService } from './iframe/check-session.service';
import { IFrameService } from './iframe/existing-iframe.service';
import { IFrameService2 } from './iframe/iframe.service';
import { SilentRenewService } from './iframe/silent-renew.service';
import { LoggerService } from './logging/logger.service';
import { TokenHelperService } from './services/oidc-token-helper.service';
import { OidcSecurityService } from './services/oidc.security.service';
import { AbstractSecurityStorage, BrowserStorageService, StoragePersistanceService } from './storage';
import { UserService } from './userData/user-service';
import { PlatformProvider, RandomService, UrlService } from './utils';
import { EqualityService } from './utils/equality/equality.service';
import { FlowHelper } from './utils/flowHelper/flow-helper.service';
import { StateValidationService } from './validation/state-validation.service';
import { TokenValidationService } from './validation/token-validation.service';

@NgModule()
export class AuthModule {
    static forRoot(token: Token = {}) {
        return {
            ngModule: AuthModule,
            providers: [
                OidcConfigService,
                EventsService,
                FlowHelper,
                OidcSecurityService,
                TokenValidationService,
                PlatformProvider,
                CheckSessionService,
                SilentRenewService,
                ConfigurationProvider,
                UserService,
                RandomService,
                HttpBaseService,
                UrlService,
                AuthStateService,
                StoragePersistanceService,
                TokenHelperService,
                LoggerService,
                IFrameService,
                IFrameService2,
                EqualityService,
                DataService,
                StateValidationService,
                {
                    provide: AbstractSecurityStorage,
                    useClass: token.storage || BrowserStorageService,
                },
            ],
        };
    }
}

export type Type<T> = new (...args: any[]) => T;

export interface Token {
    storage?: Type<any>;
}
