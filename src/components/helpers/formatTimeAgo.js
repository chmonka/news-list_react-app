const formatTimeAgo=(dateString)=>{
    const now = new Date()
    const date = new Date(dateString)
    const seccond = (now.getTime()- date.getTime())/1000;

    if(seccond <60){
        return `${Math.floor(seccond)}'s ago`
    }

    if(seccond < 3600){
        return `${Math.floor(seccond / 60 )}'m ago`
    }

    if(seccond <= 86400){
        return `${Math.floor(seccond/3600)}'h ago`
    }

    if(seccond >=86400){
        const day = Math.floor(seccond/86400)
        return day === 1 ? `${day} day ago` : `${day} days ago`
    }
}

export default formatTimeAgo