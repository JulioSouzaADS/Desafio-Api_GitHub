const user = {
    avatarUrl:'',
    name:'',
    bio:'' ,
    userName: '',
    followers:'' ,
    following:'' ,
    repositories : [],
    forks:0 ,
    language:'' ,
    star:0 ,
    watchers:0 ,
    stargazers_count:0,
    events : [],
    eventsData : [],
    location:'',

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio =gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
        console.log(gitHubUser)
       
     },
     setRepositories (repositories){
        this.repositories = repositories
        this.forks = repositories.forks
        this.language = repositories.language
        this.watchers = repositories.watchers
        this.stargazers_count = repositories.stargazers_count
        this.location =repositories.location
        console.log(repositories)
       

     },
     setEvents (events){
         this.events = events
         this.eventsData = events.payload.commits
         console.log(events)
        //  console.log(events.data)
     }
   
}

export {user}