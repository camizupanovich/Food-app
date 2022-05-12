const validate = (entry,e)=>{
    const {name}= e.target;
    let error = {};
    switch(name){
        case 'title':
            if(!/^[/A-Za-z\s]+$/g.test(entry.title)){
                error.title = 'Must not contain numbers or special characters';
            }
            if(entry.title.length>25){
                error.title = 'Should not exceed 25 characters'
            }
            if(entry.title.length<1){
                error.title='Required field'
            }
            break
        case 'summary':
            if(entry.summary>150){
                error.summary= 'Should not exceed 150 characters'
            }
            if(entry.summary.length<1){
                error.summary='Required field'
            }
            break
        case 'steps':
            if(entry.steps>250){
                error.steps= 'Should not exceed 250 characters'
            }
            if(entry.steps.length<1){
                error.steps='Required field'
            }
            break
        case 'image':
            if(!/[(http(s)?):\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(entry.image)){
                error.image = 'The image must be a validate url'
            }
            break
        case 'diets':
            if(entry.diets.length< 1){
                error.diets = 'Minimum selection required'
            }
            if(entry.diets.length>3){
                error.diets = 'The limit of selection is 3'
            }
            break
        case 'score':
            if(entry.score<1){
                error.score= 'The score cannot be 0'
            }
            break
        case 'healthScore':
            if(entry.healthScore<1){
                error.healthScore= 'The health score cannot be 0'
            }
            break
        default:
            return '';
        }
    return error;
}
module.export= validate