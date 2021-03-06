export declare enum SortValue {
    Asc = "asc",
    Desc = "desc"
}
export interface GroupNamedAPIResourceResponse {
    data: {
        count: number;
        results: NamedAPIResource[];
    };
}
export interface ListInterval {
    offset: number;
    limit: number;
}
export interface APIResource {
    url: string;
}
export interface Description {
    description: string;
    language: string;
}
export interface PokemonAbility {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}
export interface NamedAPIResource {
    name: string;
    url: string;
}
export interface GenerationGameIndex {
    game_index: number;
    version: NamedAPIResource;
}
export interface PokemonSprite {
    back_default?: string | null;
    back_female?: string | null;
    back_shiny?: string | null;
    back_shiny_female?: string | null;
    front_default?: string | null;
    front_female?: string | null;
    front_shiny?: string | null;
    front_shiny_female?: string | null;
}
export interface VersionPokemonSprite {
    'generation-i': {
        [key: string]: PokemonSprite;
    };
    'generation-ii': {
        [key: string]: PokemonSprite;
    };
    'generation-iii': {
        [key: string]: PokemonSprite;
    };
    'generation-iv': {
        [key: string]: PokemonSprite;
    };
    'generation-v': {
        [key: string]: PokemonSprite;
    };
    'generation-vi': {
        [key: string]: PokemonSprite;
    };
    'generation-vii': {
        [key: string]: PokemonSprite;
    };
    'generation-viii': {
        [key: string]: PokemonSprite;
    };
}
export interface OtherPokemonSprite {
    [key: string]: PokemonSprite;
}
export interface PokemonSpriteSet {
    main: PokemonSprite;
    other: OtherPokemonSprite;
    versions: VersionPokemonSprite;
}
export interface PokemonResponseType {
    slot: number;
    type: NamedAPIResource;
}
export interface PokemonResponseVersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
}
export interface PokemonResponseMove {
    move: NamedAPIResource;
    version_group_details: PokemonResponseVersionGroupDetail[];
}
export interface PokemonResponseStat {
    base_stat: number;
    effort: number;
    stat: {
        name: keyof PokemonStats;
        url: string;
    };
}
export interface PokeApiPokemonResponse {
    name: string;
    order: number;
    abilities: PokemonAbility[];
    base_experience: number;
    forms: NamedAPIResource[];
    game_indices: GenerationGameIndex[];
    height: number;
    id: number;
    isDefault: boolean;
    locationAreaEncounters: string;
    moves: PokemonResponseMove[];
    species: NamedAPIResource;
    sprites: PokemonSpriteSet;
    stats: PokemonResponseStat[];
    is_default: boolean;
    types: PokemonResponseType[];
    weight: number;
}
export interface PokemonJsonFormat extends Omit<PokeApiPokemonResponse, 'moves'> {
    moves: NamedAPIResource[];
}
export interface PokemonConstructorArguments extends PokemonJsonFormat {
    generation: number;
}
export interface GenerationResponse {
    id: number;
    pokemon_species: NamedAPIResource[];
    name: string;
}
export interface IPokemon {
    name: string;
    id: number;
    generation: number;
    baseExperience: number;
    normalizedBaseExperience: number;
    gamesWherePresent: string[];
    isDefault: boolean;
    forms: string[];
    types: string[];
    actions: PokemonActions;
    stats: PokemonStats;
    normalizedStats: PokemonStats;
    physicalCharacteristics: PokemonPhysicalCharacteristics;
    normalizedPhysicalCharacteristics: PokemonPhysicalCharacteristics;
    sprites: PokemonSpriteSet;
}
export interface PokemonStats {
    hp?: number;
    attack?: number;
    defense?: number;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
}
export interface PokemonPhysicalCharacteristics {
    height: number;
    weight: number;
}
export interface PokemonActions {
    moves: string[];
    abilities: string[];
}
export interface IntervalParam {
    offset: number;
    limit: number;
}
export interface FilterParam {
    typeList?: string[];
    generationList?: number[];
    heightRange?: [number, number];
    weightRange?: [number, number];
    hpRange?: [number, number];
    attackRange?: [number, number];
    defenseRange?: [number, number];
    specialAttackRange?: [number, number];
    specialDefenseRange?: [number, number];
    speedRange?: [number, number];
    abilityList?: string[];
    moveList?: string[];
    isDefault?: boolean;
    presentInGameList?: string[];
}
export declare const SortParam: {
    nameAsc: string;
    nameDesc: string;
    heightAsc: string;
    heightDesc: string;
    weightAsc: string;
    weightDesc: string;
};
export interface PokemonListOptions {
    filter?: FilterParam;
    sort?: keyof typeof SortParam;
    interval?: ListInterval;
}
export interface NameAndCount {
    [key: string]: number;
}
export interface MathematicalStats {
    mean: number;
    median: number;
    mode: number;
    variance: number;
    stdev: number;
    sampleStdev: number;
    max: number;
    min: number;
}
export interface AllPokemonStat extends MathematicalStats {
    nameAndCounts: NameAndCount;
}
export interface AllPokemonStats {
    types: NameAndCount;
    abilities: NameAndCount;
    moves: NameAndCount;
    generations: number[];
    pokemonInGeneration: NameAndCount;
    pokemonPresentInGame: NameAndCount;
    height: AllPokemonStat;
    weight: AllPokemonStat;
    hp: AllPokemonStat;
    attack: AllPokemonStat;
    defense: AllPokemonStat;
    specialAttack: AllPokemonStat;
    specialDefense: AllPokemonStat;
    speed: AllPokemonStat;
    baseExperience: AllPokemonStat;
    defaultPokemonCount: number;
}
export interface PokemonListResponse {
    results: IPokemon[];
    totalResults: number;
    offset?: number;
    limit?: number;
}
export declare type NumberRange = [number, number];
export interface PokemonFilterControls {
    types: string[];
    abilities: string[];
    moves: string[];
    generations: number[];
    games: string[];
    height: NumberRange;
    weight: NumberRange;
    hp: NumberRange;
    attack: NumberRange;
    defense: NumberRange;
    specialAttack: NumberRange;
    specialDefense: NumberRange;
    speed: NumberRange;
    baseExperience: NumberRange;
}
