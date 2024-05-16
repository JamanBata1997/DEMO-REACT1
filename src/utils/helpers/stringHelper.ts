/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const formatName = (firstName: string, lastName: string) => {
    return !!firstName && !!lastName ? (firstName + ' ' + lastName).trim() : ''
}
