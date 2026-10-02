export function signOutMode(profile,nativeAvailable){
  return nativeAvailable&&profile?.role!=='guest'?'native':'local';
}
