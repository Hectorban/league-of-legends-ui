/* eslint-disable no-unused-vars */
export interface ChampSelectType {
    actions:              Array<Action[]>;
    allowBattleBoost:     boolean;
    allowDuplicatePicks:  boolean;
    allowLockedEvents:    boolean;
    allowRerolling:       boolean;
    allowSkinSelection:   boolean;
    bans:                 Bans;
    benchChampionIds:     number[];
    benchEnabled:         boolean;
    boostableSkinCount:   number;
    chatDetails:          ChatDetails;
    counter:              number;
    entitledFeatureState: EntitledFeatureState;
    gameId:               number;
    hasSimultaneousBans:  boolean;
    hasSimultaneousPicks: boolean;
    isCustomGame:         boolean;
    isSpectating:         boolean;
    localPlayerCellId:    number;
    lockedEventIndex:     number;
    myTeam:               PlayerPickType[];
    rerollsRemaining:     number;
    skipChampionSelect:   boolean;
    theirTeam:            PlayerPickType[];
    timer:                Timer;
    trades:               Trade[];
}

export interface Action {
    actorCellId:  number;
    championId:   number;
    completed:    boolean;
    id:           number;
    isAllyAction: boolean;
    isInProgress: boolean;
    pickTurn:     number;
    type:         Type;
}

export enum Type {
    Ban = "ban",
    Pick = "pick",
}

export interface Bans {
    myTeamBans:    number[];
    numBans:       number;
    theirTeamBans: number[];
}

export interface ChatDetails {
    chatRoomName:     string;
    chatRoomPassword: null;
}

export interface EntitledFeatureState {
    additionalRerolls: number;
    unlockedSkinIds:   number[];
}

export interface PlayerPickType {
    assignedPosition:    string;
    cellId:              number;
    championId:          number;
    championPickIntent:  number;
    entitledFeatureType: string;
    selectedSkinId:      number;
    spell1Id:            number;
    spell2Id:            number;
    summonerId:          number;
    team:                number;
    wardSkinId:          number;
}

export interface Timer {
    adjustedTimeLeftInPhase: number;
    internalNowInEpochMs:    number;
    isInfinite:              boolean;
    phase:                   string;
    totalTimeInPhase:        number;
}

export interface Trade {
    cellId: number;
    id:     number;
    state:  string;
}

