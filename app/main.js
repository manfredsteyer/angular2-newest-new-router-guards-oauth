"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_providers_1 = require('./app.providers');
var app_routes_1 = require('./app.routes');
var providers = [
    app_providers_1.APP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
];
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, providers);
//# sourceMappingURL=main.js.map