"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterQueryParamLookup = exports.IntervalQueryKeyLookup = exports.SortQueryKeyLookup = exports.PokemonListQuerySuffixLookup = exports.PokemonQuerySuffix = exports.PokemonListQueryPrefixLookup = exports.PokemonQueryPrefix = exports.SortParam = exports.SortValue = void 0;
var SortValue;
(function (SortValue) {
    SortValue["Asc"] = "asc";
    SortValue["Desc"] = "desc";
})(SortValue = exports.SortValue || (exports.SortValue = {}));
exports.SortParam = {
    nameAsc: 'name-asc',
    nameDesc: 'name-desc',
    heightAsc: 'height-asc',
    heightDesc: 'height-desc',
    weightAsc: 'weight-asc',
    weightDesc: 'weight-desc',
};
var PokemonQueryPrefix;
(function (PokemonQueryPrefix) {
    PokemonQueryPrefix["Interval"] = "i";
    PokemonQueryPrefix["Filter"] = "f";
    PokemonQueryPrefix["Sort"] = "s";
})(PokemonQueryPrefix = exports.PokemonQueryPrefix || (exports.PokemonQueryPrefix = {}));
exports.PokemonListQueryPrefixLookup = {
    i: 'interval',
    f: 'filter',
    s: 'sort',
};
var PokemonQuerySuffix;
(function (PokemonQuerySuffix) {
    PokemonQuerySuffix["Range"] = "r";
    PokemonQuerySuffix["List"] = "l";
    PokemonQuerySuffix["Boolean"] = "b";
})(PokemonQuerySuffix = exports.PokemonQuerySuffix || (exports.PokemonQuerySuffix = {}));
exports.PokemonListQuerySuffixLookup = {
    r: 'Range',
    l: 'List',
};
exports.SortQueryKeyLookup = {
    nameAsc: 's-name-asc',
    nameDesc: 's-name-desc',
    heightAsc: 's-height-asc',
    heightDesc: 's-height-desc',
    weightAsc: 's-weight-asc',
    weightDesc: 's-weight-desc',
};
exports.IntervalQueryKeyLookup = {
    interval: 'i-interval',
    offset: 'i-offset',
};
exports.FilterQueryParamLookup = {
    typeList: 'f-type-list',
    generationList: 'f-generation-list',
    heightMin: 'f-height-min',
    heightMax: 'f-height-max',
    weightMin: 'f-weight-min',
    weightMax: 'f-weight-max',
    hpMin: 'f-hp-min',
    hpMax: 'f-hp-max',
    attackMin: 'f-attack-min',
    attackMax: 'f-attack-max',
    defenseMin: 'f-defense-min',
    defenseMax: 'f-defense-max',
    specialDefenseMin: 'f-special-defense-min',
    specialDefenseMax: 'f-special-defense-max',
    specialAttackMin: 'f-special-attack-min',
    specialAttackMax: 'f-special-attack-max',
    specialSpeedMin: 'f-special-speed-min',
    specialSpeedMax: 'f-special-speed-max',
    abilityList: 'f-ability-list',
    moveList: 'f-move-list',
    isDefault: 'f-is-default',
    presentInGameList: 'f-presentInGame-list',
};
