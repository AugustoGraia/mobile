import React, {useState, createContext, ReactNode } from "react"; 

type AuthContextData = {
    user: UserProps,
    isAthenticated: boolean,
    singIn: (credenciais: SingInProps) => Promise<void>; 

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

type SingInProps = {
    email: string,
    password: string,

}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProvideProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    })

    const isAthenticated = !!user.name;


    async function singIn ({email, password }: SingInProps){
        console.log(email)
        console.log(password)

    }

    return(
        //aplicação esta em volta desse contexto de autenticação
        <AuthContext.Provider value={{ isAthenticated, user, singIn}}>
            {children}
        </AuthContext.Provider>
    )

}


