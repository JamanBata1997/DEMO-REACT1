/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

export const saveToken = (val: string) => localStorage.setItem('token', val)
export const getToken = () =>
    localStorage.getItem('token') ? localStorage.getItem('token') : null
export const clearStorage = () => localStorage.clear()
export const removeToken = () => localStorage.remove('token')

export const saveUser = (val: string) =>
    localStorage.setItem('user', JSON.stringify(val))

export const getUser = () =>
    localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user') ?? '')
        : null
