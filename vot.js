// ja rboyos 18 er niche se vot dite parbe nah 
// 18 hoile parbe ar 18 er upor hoile o parbe 

function votErYear (year){
    
    const age = year >= 18 ;
    if(age){
        console.log('yes', year , ' years vot dite parba 🥰 ')
    }
    else{
        console.log('noh', year,'years vot dite parba nah  😢')
    }
}
votErYear(20)