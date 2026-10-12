export function tournamentEndpoint(apiUrl){
 const url=new URL(apiUrl);
 if(url.protocol!=='https:'||!url.hostname.endsWith('.workers.dev')||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('The tournament server address is not valid.');
 return new URL('/tournament',url).href;
}
export async function callTournament({apiUrl,getToken,data,fetcher=fetch}){
 if(!apiUrl)throw Error('The tournament server is being connected. Please try again after the owner publishes the update.');
 const endpoint=tournamentEndpoint(apiUrl),token=await getToken();
 const response=await fetcher(endpoint,{method:'POST',redirect:'error',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(30000)});
 const result=await response.json();if(!response.ok||result.error)throw Error(result.error||'Tournament service is temporarily unavailable.');return result;
}
