// code your solution here
const mondayWork = function (activity='go to the office') {
    return `This Monday, I will ${activity}.`
}
function saturdayFun(activity ='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
const wrapAdjective = function(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}
