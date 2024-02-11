import { DevEnvironment } from "./environment.dev";
import { ProEnvironment } from "./environment.prod";


export interface Environment{
    db_uri: string
}

export function getEnvironmentVariables(){
    if(process.env.NODE_ENV === 'production'){
        return ProEnvironment;
    }
    return DevEnvironment;
}