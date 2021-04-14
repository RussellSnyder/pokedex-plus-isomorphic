"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyAndValueOfObject = exports.getValueOfObject = exports.getKeyOfObject = void 0;
var getKeyOfObject = function (o) { return Object.keys(o)[0]; };
exports.getKeyOfObject = getKeyOfObject;
var getValueOfObject = function (o) { return Object.values(o)[0]; };
exports.getValueOfObject = getValueOfObject;
var getKeyAndValueOfObject = function (o) { return [exports.getKeyOfObject(o), exports.getValueOfObject(o)]; };
exports.getKeyAndValueOfObject = getKeyAndValueOfObject;
