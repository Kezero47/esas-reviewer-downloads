// Deterministic calculator core for the UI. No expression text is evaluated as JavaScript.
const functions={
  sqrt:Math.sqrt,cbrt:Math.cbrt,abs:Math.abs,ln:Math.log,log:Math.log10,
  exp:Math.exp,floor:Math.floor,ceil:Math.ceil,round:Math.round,
  sinh:Math.sinh,cosh:Math.cosh,tanh:Math.tanh,asinh:Math.asinh,acosh:Math.acosh,atanh:Math.atanh,
  root:(n,v)=>Math.sign(v)*Math.abs(v)**(1/n),rand:()=>Math.random(),irand:(a,b)=>Math.floor(Math.random()*(Math.floor(b)-Math.ceil(a)+1))+Math.ceil(a)
};
const factorial=n=>{if(!Number.isInteger(n)||n<0||n>170)throw Error('Factorial requires an integer from 0 to 170');let r=1;for(let i=2;i<=n;i++)r*=i;return r};
const perm=(n,r)=>factorial(n)/factorial(n-r);
const comb=(n,r)=>perm(n,r)/factorial(r);
export function evaluateExpression(expression,{angle='RAD',x=0,ans=0,variables={}}={}){
  const source=String(expression).replace(/[×]/g,'*').replace(/[÷]/g,'/').replace(/[−]/g,'-').replace(/π/g,'pi').replace(/√\(/g,'sqrt(');
  const tokens=[];let at=0;
  while(at<source.length){
    if(/\s/.test(source[at])){at++;continue}
    const m=source.slice(at).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|^[A-Za-z]+|^[+*/^(),!%-]/);
    if(!m)throw Error('Unsupported symbol at position '+(at+1));
    tokens.push(m[0]);at+=m[0].length;
  }
  // Allow calculator-style multiplication without the × key, such as 5X or 2sin(30).
  const callable=new Set(['sin','cos','tan','asin','acos','atan','sinh','cosh','tanh','asinh','acosh','atanh','sqrt','cbrt','root','abs','ln','log','logb','exp','floor','ceil','round','rand','irand','pol','rec','pow']);
  for(let j=tokens.length-1;j>0;j--){let before=tokens[j-1],after=tokens[j];let valueBefore=/^(?:\d|\.)/.test(before)||before===')'||/^(?:pi|e|x|ans|[A-FMYZ])$/i.test(before);let valueAfter=/^[A-Za-z]+$/.test(after)&&!['nPr','nCr'].includes(after)||after==='(';
    if(valueBefore&&valueAfter&&!(after==='('&&callable.has(before.toLowerCase())))tokens.splice(j,0,'*')}
  let i=0;
  const peek=()=>tokens[i],take=()=>tokens[i++];
  const isNumber=t=>t!==undefined&&/^(?:\d|\.)/.test(t);
  function atom(){
    let t=take();if(t===undefined)throw Error('Incomplete expression');
    if(t==='+'||t==='-')return(t==='-'?-1:1)*parse(29);
    if(t==='('){let v=parse(0);if(take()!==')')throw Error('Missing closing parenthesis');return v}
    if(isNumber(t))return Number(t);
    if(/^[A-Za-z]+$/.test(t)){
      const name=t.toLowerCase();
      if(peek()==='('){take();let args=[];if(peek()!==')'){do{args.push(parse(0));if(peek()!==',')break;take()}while(true)}if(take()!==')')throw Error('Missing closing parenthesis');
        const rad=v=>angle==='DEG'?v*Math.PI/180:angle==='GRAD'?v*Math.PI/200:v,deg=v=>angle==='DEG'?v*180/Math.PI:angle==='GRAD'?v*200/Math.PI:v;
        const special={sin:v=>Math.sin(rad(v)),cos:v=>Math.cos(rad(v)),tan:v=>Math.tan(rad(v)),asin:v=>deg(Math.asin(v)),acos:v=>deg(Math.acos(v)),atan:v=>deg(Math.atan(v)),npr:perm,ncr:comb,pow:Math.pow,logb:(base,value)=>Math.log(value)/Math.log(base),pol:(a,b)=>{variables.Y=deg(Math.atan2(b,a));return Math.hypot(a,b)},rec:(r,t)=>{variables.Y=r*Math.sin(rad(t));return r*Math.cos(rad(t))}};
        const fn=special[name]||functions[name];if(!fn)throw Error('Unknown function: '+t);return fn(...args)
      }
      if(name==='pi')return Math.PI;if(name==='e')return Math.E;if(name==='x')return x;if(name==='ans')return Number(ans);
      if(Object.hasOwn(variables,t.toUpperCase()))return Number(variables[t.toUpperCase()]);
      throw Error('Unknown constant: '+t)
    }
    throw Error('Unexpected '+t)
  }
  function parse(min){let left=atom();while(true){let op=peek();if(op==='!'||op==='%'){if(50<min)break;take();left=op==='!'?factorial(left):left/100;continue}
      const bp={'+':10,'-':10,'*':20,'/':20,nPr:25,nCr:25,'^':30}[op];if(bp===undefined||bp<min)break;take();let right=parse(op==='^'?bp:bp+1);
      left=op==='+'?left+right:op==='-'?left-right:op==='*'?left*right:op==='/'?left/right:op==='nPr'?perm(left,right):op==='nCr'?comb(left,right):left**right
    }return left}
  if(tokens.length===0)throw Error('Enter an expression');const result=parse(0);
  if(i!==tokens.length)throw Error('Unexpected '+tokens[i]);if(!Number.isFinite(result))throw Error('Result outside supported range');return result
}
export function evaluateBaseExpression(expression,base=10){let source=String(expression).replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/\s/g,'').toUpperCase(),radix=Number(base);if(![2,8,10,16].includes(radix))throw Error('Select DEC, HEX, BIN or OCT');let tokens=source.match(/[0-9A-F]+|[()+*/-]/g)||[];if(tokens.join('')!==source||!tokens.length)throw Error('Invalid BASE expression');let pos=0,peek=()=>tokens[pos],take=()=>tokens[pos++];function atom(){let t=take();if(t==='+'||t==='-'){let n=parse(29);return t==='-'?-n:n}if(t==='('){let n=parse(0);if(take()!==')')throw Error('Missing closing parenthesis');return n}if(!t||!(/^[0-9A-F]+$/.test(t)))throw Error('Expected a base number');let digits='0123456789ABCDEF',v=0n;for(let c of t){let d=digits.indexOf(c);if(d>=radix)throw Error(`${c} is not valid in base ${radix}`);v=v*BigInt(radix)+BigInt(d)}return v}function parse(min){let left=atom();while(true){let op=peek(),bp={'+':10,'-':10,'*':20,'/':20}[op];if(bp===undefined||bp<min)break;take();let right=parse(bp+1);if(op==='+')left+=right;else if(op==='-')left-=right;else if(op==='*')left*=right;else{if(right===0n)throw Error('Division by zero');left/=right}}return left}let answer=parse(0);if(pos!==tokens.length)throw Error('Unexpected '+tokens[pos]);return answer}
// Complex arithmetic for the red Alpha i key. Other calculator modes keep real results.
export function evaluateComplexExpression(expression,options={}){
  const source=String(expression).replace(/[×]/g,'*').replace(/[÷]/g,'/').replace(/[−]/g,'-').replace(/(\d|\))i\b/g,'$1*i');
  const tokens=source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|[A-Za-z]+|[+*/^()-]/g)||[];
  if(tokens.join('')!==source.replace(/\s/g,''))throw Error('Unsupported complex expression');
  let at=0,peek=()=>tokens[at],take=()=>tokens[at++],pair=n=>[n,0];
  const add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[0],-a[1]],mul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],div=(a,b)=>{let d=b[0]**2+b[1]**2;if(!d)throw Error('Division by zero');return[(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d]};
  function atom(){let t=take();if(t==='+'||t==='-'){let v=parse(29);return t==='-'?neg(v):v}if(t==='('){let v=parse(0);if(take()!==')')throw Error('Missing closing parenthesis');return v}if(t===undefined)throw Error('Incomplete expression');if(/^(?:\d|\.)/.test(t))return pair(Number(t));let name=t.toLowerCase();if(name==='i')return[0,1];if(name==='pi')return pair(Math.PI);if(name==='e')return pair(Math.E);if(name==='ans')return pair(Number(options.ans)||0);if(name==='x')return pair(Number(options.x)||0);if(Object.hasOwn(options.variables||{},t.toUpperCase()))return pair(Number(options.variables[t.toUpperCase()]));throw Error('Unknown complex symbol: '+t)}
  function parse(min){let left=atom();while(true){let op=peek(),bp={'+':10,'-':10,'*':20,'/':20,'^':30}[op];if(bp===undefined||bp<min)break;take();let right=parse(op==='^'?bp:bp+1);if(op==='+')left=add(left,right);else if(op==='-')left=add(left,neg(right));else if(op==='*')left=mul(left,right);else if(op==='/')left=div(left,right);else{if(right[1]!==0||!Number.isInteger(right[0])||Math.abs(right[0])>100)throw Error('Complex power requires a small integer');let base=left,left=pair(1);for(let j=0;j<Math.abs(right[0]);j++)left=mul(left,base);if(right[0]<0)left=div(pair(1),left)}}return left}
  if(!tokens.length)throw Error('Enter an expression');let value=parse(0);if(at!==tokens.length)throw Error('Unexpected '+tokens[at]);if(value.some(n=>!Number.isFinite(n)))throw Error('Result outside supported range');return value
}
export const formatted=n=>Number.isInteger(n)?String(n):String(Number(n.toPrecision(12)));
export function fractionOf(value){if(!Number.isFinite(value))return '—';let sign=value<0?'-':'';let x=Math.abs(value),a0=Math.floor(x),h0=0,k0=1,h1=1,k1=0,h=a0,k=1;
  while(k<100000&&Math.abs(h/k-x)>1e-10){x=1/(x-a0);if(!Number.isFinite(x))break;a0=Math.floor(x);h=a0*h1+h0;k=a0*k1+k0;h0=h1;k0=k1;h1=h;k1=k}
  return k===1?sign+h:sign+h+'/'+k
}
export function integrate(expression,a,b,options={}){if(!Number.isFinite(a)||!Number.isFinite(b))throw Error('Enter finite limits');let n=1000,h=(b-a)/n,sum=evaluateExpression(expression,{...options,x:a})+evaluateExpression(expression,{...options,x:b});for(let j=1;j<n;j++)sum+=(j%2?4:2)*evaluateExpression(expression,{...options,x:a+j*h});return sum*h/3}
export function differentiate(expression,x,options={}){let h=1e-5*Math.max(1,Math.abs(x));return(evaluateExpression(expression,{...options,x:x+h})-evaluateExpression(expression,{...options,x:x-h}))/(2*h)}
export function parseMatrix(text){if(!String(text).trim())throw Error('Enter a matrix');let rows=String(text).trim().split(/[;\n]+/).map(row=>row.trim().split(/[\s,]+/).map(Number));if(!rows.length||!rows[0].length||rows.length>4||rows[0].length>4||rows.some(r=>r.length!==rows[0].length||r.some(v=>!Number.isFinite(v))))throw Error('Enter a rectangular matrix up to 4×4. Separate rows with semicolons.');return rows}
export const transpose=A=>A[0].map((_,j)=>A.map(row=>row[j]));
export function multiplyMatrices(A,B){if(A[0].length!==B.length)throw Error('Columns of A must equal rows of B');return A.map(row=>B[0].map((_,j)=>row.reduce((sum,v,k)=>sum+v*B[k][j],0)))}
export function determinant(A){if(A.length!==A[0].length)throw Error('Determinant requires a square matrix');let m=A.map(r=>r.slice()),d=1,n=m.length;for(let i=0;i<n;i++){let pivot=i;for(let j=i+1;j<n;j++)if(Math.abs(m[j][i])>Math.abs(m[pivot][i]))pivot=j;if(Math.abs(m[pivot][i])<1e-12)return 0;if(pivot!==i){[m[pivot],m[i]]=[m[i],m[pivot]];d=-d}d*=m[i][i];for(let j=i+1;j<n;j++){let f=m[j][i]/m[i][i];for(let k=i;k<n;k++)m[j][k]-=f*m[i][k]}}return d}
export function inverse(A){if(A.length!==A[0].length)throw Error('Inverse requires a square matrix');let n=A.length,m=A.map((r,i)=>[...r,...Array.from({length:n},(_,j)=>Number(i===j))]);for(let i=0;i<n;i++){let p=i;for(let j=i+1;j<n;j++)if(Math.abs(m[j][i])>Math.abs(m[p][i]))p=j;if(Math.abs(m[p][i])<1e-12)throw Error('Matrix is singular');[m[p],m[i]]=[m[i],m[p]];let q=m[i][i];for(let k=0;k<2*n;k++)m[i][k]/=q;for(let j=0;j<n;j++)if(j!==i){let f=m[j][i];for(let k=0;k<2*n;k++)m[j][k]-=f*m[i][k]}}return m.map(r=>r.slice(n))}
export function parseVector(text){if(!String(text).trim())throw Error('Enter a vector');let v=String(text).trim().split(/[\s,]+/).map(Number);if(v.length<2||v.length>4||v.some(x=>!Number.isFinite(x)))throw Error('Enter 2 to 4 components separated by commas');return v}
export function vectorOperation(A,B,op){if(op==='magnitude')return Math.hypot(...A);if(A.length!==B.length)throw Error('Vector dimensions must match');if(op==='dot')return A.reduce((n,v,i)=>n+v*B[i],0);if(op==='add')return A.map((v,i)=>v+B[i]);if(op==='subtract')return A.map((v,i)=>v-B[i]);if(op==='cross'){if(A.length!==3)throw Error('Cross product requires 3D vectors');return[A[1]*B[2]-A[2]*B[1],A[2]*B[0]-A[0]*B[2],A[0]*B[1]-A[1]*B[0]]}throw Error('Unknown vector operation')}
export function statistics(text){let a=String(text).split(/[\s,;]+/).filter(Boolean).map(Number);if(!a.length||a.some(x=>!Number.isFinite(x)))throw Error('Enter comma-separated numbers');let n=a.length,sum=a.reduce((x,y)=>x+y,0),mean=sum/n,ss=a.reduce((s,x)=>s+(x-mean)**2,0),sorted=[...a].sort((x,y)=>x-y);return{n,sum,mean,median:n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2,populationSD:Math.sqrt(ss/n),sampleSD:n>1?Math.sqrt(ss/(n-1)):NaN,min:sorted[0],max:sorted[n-1]}}
export function solvePolynomial(a,b,c){if(a===0){if(b===0)throw Error('No unique solution');return[-c/b]}let d=b*b-4*a*c;if(d<0){let re=-b/(2*a),im=Math.sqrt(-d)/(2*Math.abs(a));return[`${formatted(re)} + ${formatted(im)}i`,`${formatted(re)} - ${formatted(im)}i`]}return[(-b+Math.sqrt(d))/(2*a),(-b-Math.sqrt(d))/(2*a)]}
export function complexOperation([a,b],[c,d],op){if(op==='add')return[a+c,b+d];if(op==='subtract')return[a-c,b-d];if(op==='multiply')return[a*c-b*d,a*d+b*c];let den=c*c+d*d;if(!den)throw Error('Division by zero');return[(a*c+b*d)/den,(b*c-a*d)/den]}

// Selected reference constants; the complete device-specific 79-item mapping still needs verification.
export const constants=[
  ['π','Pi',Math.PI,''],['e','Euler’s number',Math.E,''],['c','Speed of light in vacuum',299792458,'m/s'],['h','Planck constant',6.62607015e-34,'J·s'],['ℏ','Reduced Planck constant',1.054571817e-34,'J·s'],['e₀','Elementary charge',1.602176634e-19,'C'],['kB','Boltzmann constant',1.380649e-23,'J/K'],['NA','Avogadro constant',6.02214076e23,'mol⁻¹'],['R','Molar gas constant',8.314462618,'J/(mol·K)'],['g₀','Standard gravity',9.80665,'m/s²'],['G','Gravitational constant',6.67430e-11,'m³/(kg·s²)'],['μ₀','Vacuum permeability',1.25663706127e-6,'N/A²'],['ε₀','Vacuum permittivity',8.8541878188e-12,'F/m'],['me','Electron mass',9.1093837139e-31,'kg'],['mp','Proton mass',1.67262192595e-27,'kg'],['mn','Neutron mass',1.67492750056e-27,'kg'],['σ','Stefan–Boltzmann constant',5.670374419e-8,'W/(m²·K⁴)'],['F','Faraday constant',96485.33212,'C/mol'],['u','Atomic mass constant',1.66053906892e-27,'kg'],['atm','Standard atmosphere',101325,'Pa']
];

export const units={
  Length:{m:1,km:1000,cm:.01,mm:.001,ft:.3048,in:.0254,yd:.9144,mi:1609.344},
  Area:{'m²':1,'km²':1e6,'cm²':1e-4,'ft²':.09290304,ha:1e4,acre:4046.8564224},
  Volume:{'m³':1,L:.001,mL:1e-6,'ft³':.028316846592,'US gal':.003785411784},
  Mass:{kg:1,g:.001,mg:1e-6,lb:.45359237,oz:.028349523125,'metric ton':1000},
  Speed:{'m/s':1,'km/h':1/3.6,mph:.44704,knot:.5144444444,'ft/s':.3048},
  Pressure:{Pa:1,kPa:1000,bar:1e5,atm:101325,psi:6894.757293,mmHg:133.3223874},
  Energy:{J:1,kJ:1000,cal:4.184,kcal:4184,Wh:3600,kWh:3.6e6,BTU:1055.05585262},
  Power:{W:1,kW:1000,MW:1e6,hp:745.69987158},
  Time:{s:1,min:60,h:3600,day:86400},
  Temperature:{'°C':1,'°F':1,K:1}
};
export function convertUnits(value,category,from,to){if(!Number.isFinite(value))throw Error('Enter a number');if(category==='Temperature'){let k=from==='K'?value:from==='°C'?value+273.15:(value+459.67)*5/9;return to==='K'?k:to==='°C'?k-273.15:k*9/5-459.67}let group=units[category];if(!group||!(from in group)||!(to in group))throw Error('Choose compatible units');return value*group[from]/group[to]}
