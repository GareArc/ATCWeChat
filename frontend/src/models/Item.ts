export interface Item {
    price: number;
    quantity: number;
    isTaxed: boolean;
    relation: Relation;
    shareType: ShareType | undefined;
}

export enum Relation {
    INDIVIDUAL = "INDIVIDUAL",
    SHARED = "SHARED",
    ALL = "ALL"
}

export enum ShareType {
    WITHTARGET1 = "WITHTARGET1",
    WITHTARGET2 = "WITHTARGET2",
    TARGETS = "TARGETS",
}
