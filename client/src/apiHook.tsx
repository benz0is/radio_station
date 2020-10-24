import {useState,useEffect} from 'react'

export const ApiHook = () => {
    const [api,setApi]= useState<object>()
    const handleAction = ()=>{ 
        //if api doesn't exist, use this array of objects
            const list = {"api":[  
          {"id":1,"name":"Putin FM","station":"66.6"},
          {"id":2,"name":"Dribble FM","station":"101.2"},
          {"id":3,"name":"Doge FM","station":"99.4"},
          {"id":4,"name":"Ballads FM","station":"87.1"},
          {"id":5,"name":"Maximum FM","station":"142.2"},]
                  }
        //Fetch api if exists
        let response
        const fetchData = async()=>{
          let response = await fetch("/api").then((res)=>res.json()).then(res=>setApi(res))
          return response
        }
        //if not set it to list
        if(response === undefined){
          setApi(list)
        }
        fetchData()}
        useEffect(()=>{handleAction()},[])
    return {api,handleAction}
}


