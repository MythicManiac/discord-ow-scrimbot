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
const athena_1 = require("../athena");
class ScrimModel extends basie_1.Basie {
    get startingTime() {
        return new Date(this.startingTimestamp);
    }
    set startingTime(value) {
        this.startingTimestamp = value.getTime();
    }
    getAuthor() {
        return athena_1.default.client.fetchUser(this.authorId.toString());
    }
    setAuthor(value) {
        this.authorId = parseInt(value.id);
    }
    setInitials(creationMessage) {
        if (this.uniqueId !== undefined)
            return;
        this.setAuthor(creationMessage.author);
        this.generateId(creationMessage);
    }
    generateId(creationMessage) {
        this.uniqueId = `${creationMessage.channel.id}-${creationMessage.id}`;
    }
}
__decorate([
    basie_1.field,
    __metadata("design:type", Number)
], ScrimModel.prototype, "startingTimestamp", void 0);
__decorate([
    basie_1.field,
    __metadata("design:type", Number)
], ScrimModel.prototype, "authorId", void 0);
__decorate([
    basie_1.field,
    __metadata("design:type", String)
], ScrimModel.prototype, "uniqueId", void 0);
exports.ScrimModel = ScrimModel;
exports.Scrim = basie_1.Based(ScrimModel);
