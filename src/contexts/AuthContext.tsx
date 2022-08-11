import React, {useState, createContext, ReactNode } from "react"; 

type AuthContextData = {
    user: UserProps,
    isAthenticated: boolean,
}

type UserProps = {
    id: string,
    name: string,
    email: string,
    token: string,
}

type AuthProvideProps = {
    children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProvideProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: 'Lima',
        email: '',
        token: '',
    })

    const isAthenticated = !!user.name;

    return(
        //aplicação esta em volta desse contexto de autenticação
        <AuthContext.Provider value={{ isAthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )

}


