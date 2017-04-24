"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const basie_1 = require("basie");
class EnlisterModel extends basie_1.Basie {
    constructor() {
        super(...arguments);
        this.timezoneOffset = undefined;
        this.region = undefined;
    }
}
__decorate([
    basie_1.field,
    __metadata("design:type", Number)
], EnlisterModel.prototype, "timezoneOffset", void 0);
__decorate([
    basie_1.field,
    __metadata("design:type", String)
], EnlisterModel.prototype, "region", void 0);
exports.EnlisterModel = EnlisterModel;
exports.Enlister = basie_1.Based(EnlisterModel);
