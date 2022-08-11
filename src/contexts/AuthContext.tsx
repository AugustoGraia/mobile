import React, {useState, createContext, ReactNode } from "react"; 
import { api } from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
//user só  podera permanecer na aplicação com esses dados
export function AuthProvider({children}: AuthProvideProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    })

    const isAthenticated = !!user.name;
    
    const [loading, setLoading ] = useState(false);


    async function singIn ({email, password }: SingInProps){
        setLoading(true)

        try{
            const response = await api.post('/session', {
                email,
                password
            })

            //console.log(response.data)
            const { id, name, token } = response.data;

            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@getpizzaria', JSON.stringify(data))
            //Passando o token no Bearer
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setUser({
                id,
                name,
                token,
                email,
            })

            setLoading(false)


        }catch(erro){
            console.log("erro ao acessar "+ erro)          
            setLoading(false)
        }

    }

    return(
        //aplicação esta em volta desse contexto de autenticação
        <AuthContext.Provider value={{ isAthenticated, user, singIn}}>
            {children}
        </AuthContext.Provider>
    )

}


