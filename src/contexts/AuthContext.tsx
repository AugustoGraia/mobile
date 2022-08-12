import React, {useState, createContext, ReactNode, useEffect } from "react"; 
import { api } from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
    user: UserProps,
    isAthenticated: boolean,
    singIn: (credenciais: SingInProps) => Promise<void>; 
    singOut: () => Promise<void>; 
    loadingAuth: boolean,
    loading: boolean,

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
    const [loadingAuth, setLoadingAuth ] = useState(false);
    const [loading, setLoading] = useState(true);
    //Pegando dados salvos user
    useEffect(() => {

        async function getUser(){
            const userInfo = await AsyncStorage.getItem('@getpizzaria');
            let hasUser: UserProps = JSON.parse(userInfo || '{}')
            //Verificando se a informações do user
            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }
            setLoading(false);
        }
        getUser();

    }, [])

    

    //Logar user
    async function singIn ({email, password }: SingInProps){
        setLoadingAuth(true)

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

            setLoadingAuth(false)


        }catch(erro){
            console.log("erro ao acessar "+ erro)          
            setLoadingAuth(false)
        }

    }

    //Deslogar user

    async function singOut(){
        await AsyncStorage.clear()
        .then( ()=>{
            setUser({
                id: '',
                name: '',
                email: '',
                token: '',
            })
        })
    }

    return(
        //aplicação esta em volta desse contexto de autenticação
        <AuthContext.Provider value={{ isAthenticated, user, singIn, loading, loadingAuth, singOut}}>
            {children}
        </AuthContext.Provider>
    )

}


