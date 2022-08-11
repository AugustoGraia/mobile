import React, {useState, createContext } from "react"; 

type AuthContextData = {
    user: AuthContextProps,
    isAthenticated: boolean,
}

type AuthContextProps = {
    id: string,
    name: string,
    email: string,
    token: string,
}

export const AuthContext = createContext({})