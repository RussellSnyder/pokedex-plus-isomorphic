"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
exports.util = {
    getKeyOfObject: function (o) { return Object.keys(o)[0]; },
    getValueOfObject: function (o) { return Object.values(o)[0]; },
    getKeyAndValueOfObject: function (o) { return [exports.util.getKeyOfObject(o), exports.util.getValueOfObject(o)]; },
};
