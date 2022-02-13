const people = [
    {name: "Juan", street: "Robson Street", city: "British Columbia", state: "Vancouver", country: "Canada", telephone: "9122632", birthday: "27-08-1999"},
    {name: "Pablo", street: "Cariboo Road", city: "British Columbia", state: "Vancouver", country: "Canada", telephone: "6809402", birthday: "18-03-1998"},
    {name: "Leady", street: "Jasper Avenue", city: "Edmonton", state: "Alberta", country: "Canada", telephone: "2591689", birthday: "08-05-1997"},
    {name: "Gloria", street: "Protage Avenue", city: "Winnipeg", state: "Manitoba", country: "Canada", telephone: "4791407", birthday: "10-09-1994"},
    {name: "Arnoldo", street: "Yonge Street", city: "Toronto", state: "Ontario", country: "Canada", telephone: "6808123", birthday: "08-08-1995"},
    {name: "Camilo", street: "Sussex Drive", city: "Ottawa", state: "Ontario", country: "Canada", telephone: "1077978", birthday: "06-07-1992"},
    {name: "Alejandra", street: "Saint Laurent Boulevard", city: "Montreal", state: "Quebec", country: "Canada", telephone: "1744594", birthday: "19-08-1993"}
];
var startWeb =  function (){
    let countPeople = people.length;
    startData(countPeople)
    captureMauseMove(countPeople)
}
var startData = function(countPeople){
    let content;
    for(let i=0; i<countPeople;i++){
        let li = document.createElement("li");
        li.setAttribute('id',`element_${i}`);
        let p = document.createElement("p");
        content = `Name : ${people[i].name}`;
        p.appendChild(document.createTextNode(content));
        document.querySelector('#listNameClients').appendChild(li).appendChild(p)
    }
}
var captureMauseMove = function(countPeople){
    for(let i=0;i<countPeople;i++){
        let containerElementClick = document.getElementById(`element_${i}`);
            containerElementClick.addEventListener('click', function() {
            completeData(i);
	    });
    }
    
}
var completeData = function(positionPeople){
    let content;
    var clearContent=document.getElementById('contentResult');
    clearContent.innerHTML=''
    if (positionPeople != null){
        const object = people[positionPeople]
        for (const propertyPeople in object){
            let li = document.createElement("li");
            let p = document.createElement("p");    
            content = `${propertyPeople}: ${object[propertyPeople]}`;
            p.appendChild(document.createTextNode(content));
            document.querySelector('#contentResult').appendChild(li).appendChild(p)
        }
    }
}