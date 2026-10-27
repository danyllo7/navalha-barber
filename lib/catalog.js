export const services = [
{id:'classico',name:'Corte clássico',category:'Cabelo',duration:30,price:15,description:'Tesoura, máquina e um acabamento à sua medida.'},
{id:'degrade',name:'Degradê / skin fade',category:'Cabelo',duration:45,price:18,description:'Transições precisas. Dos detalhes nasce o estilo.'},
{id:'tesoura',name:'Corte à tesoura',category:'Cabelo',duration:45,price:20,description:'Textura, movimento e um corte que acompanha o seu cabelo.'},
{id:'maquina',name:'Corte à máquina',category:'Cabelo',duration:20,price:12,description:'Simples, uniforme e sempre impecável.'},
{id:'infantil',name:'Corte infantil',category:'Cabelo',duration:30,price:12,description:'Um cuidado especial para os mais novos, até aos 12 anos.'},
{id:'barba',name:'Barba com ritual quente',category:'Barba & rosto',duration:30,price:12,description:'Desenho, toalha quente e finalização com óleo.'},
{id:'sobrancelhas',name:'Design de sobrancelhas',category:'Barba & rosto',duration:15,price:5,description:'Limpeza e definição que respeitam a sua expressão.'},
{id:'pele',name:'Limpeza de pele',category:'Barba & rosto',duration:45,price:25,description:'Higienização, esfoliação e hidratação facial.'},
{id:'combo',name:'Corte + barba',category:'Combinações',duration:60,price:25,description:'O seu corte de eleição com o ritual completo de barba.'},
{id:'fadebarba',name:'Degradê + barba',category:'Combinações',duration:75,price:28,description:'Fade com precisão e uma barba à altura.'},
{id:'completo',name:'Ritual completo',category:'Combinações',duration:105,price:48,description:'Corte, barba, sobrancelhas e limpeza de pele.'}];
export const professionals=[{id:'miguel',name:'Miguel Costa',role:'Cortes clássicos & barba',initials:'MC'},{id:'rafael',name:'Rafael Santos',role:'Degradês & novos estilos',initials:'RS'},{id:'ines',name:'Inês Martins',role:'Cabelo & cuidados de rosto',initials:'IM'}];
export function today(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}
export function validDate(date){return /^\d{4}-\d{2}-\d{2}$/.test(date)&&date>=today()&&date<=new Date(Date.now()+90*86400000).toISOString().slice(0,10)&&new Date(date+'T12:00Z').toISOString().slice(0,10)===date&&new Date(date+'T12:00Z').getUTCDay()!==0}
export function timeAllowed(date,minute,duration){const p=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',hour:'2-digit',minute:'2-digit'}).format(new Date()).split(':').map(Number);return minute>=540&&minute+duration<=1140&&(minute+duration<=780||minute>=840)&&minute%15===0&&(date!==today()||minute>p[0]*60+p[1]+30)}
