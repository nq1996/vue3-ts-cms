class LocalCache {
  setCache(key:string,value:any){
    window.localStorage.setItem(key,JSON.stringify(value))
  }
  getCache(key:string){
    const value = window.localStorage.getItem(key)!    
    return JSON.parse(value)
  }
  deleteCache(key:string){
    window.localStorage.removeItem(key)
  }
}
export default new LocalCache()
