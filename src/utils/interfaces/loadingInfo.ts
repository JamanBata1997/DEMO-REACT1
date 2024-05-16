/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export interface ILoadingInfo {
    buttonLoading: boolean
    pageLoading: boolean
    moduleLoading: boolean
}

export const iLoadingInfo: ILoadingInfo = {
    buttonLoading: false,
    pageLoading: false,
    moduleLoading: false,
}
