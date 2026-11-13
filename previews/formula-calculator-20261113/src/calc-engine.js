// Deterministic calculator core for the UI. No expression text is evaluated as JavaScript.
const functions={
  frac:(a,b)=>a/b,mixed:(a,b,c)=>Math.sign(a||1)*(Math.abs(a)+b/c),sqrt:Math.sqrt,cbrt:Math.cbrt,abs:Math.abs,ln:Math.log,log:Math.log10,
  exp:Math.exp,floor:Math.floor,ceil:Math.ceil,round:Math.round,
  sinh:Math.sinh,cosh:Math.cosh,tanh:Math.tanh,asinh:Math.asinh,acosh:Math.acosh,atanh:Math.atanh,
  root:(n,v)=>{if(!n||v<0&&(!Number.isInteger(n)||Math.abs(n%2)!==1))throw Error('Math ERROR');return Math.sign(v)*Math.abs(v)**(1/n)},rand:()=>Math.floor(Math.random()*1000)/1000,irand:(a,b)=>{if(![a,b].every(Number.isInteger)||a<0||b<a||b>=1e10)throw Error('Argument ERROR');return Math.floor(Math.random()*(b-a+1))+a},
  max:(...v)=>{if(v.length<2||v.length>5)throw Error('Argument ERROR');return Math.max(...v)},min:(...v)=>{if(v.length<2||v.length>5)throw Error('Argument ERROR');return Math.min(...v)},
  mod:(a,b)=>b===0?a:((a%b)+b)%b,gcd:(...v)=>integerFold(v,false),lcm:(...v)=>integerFold(v,true),dms:(d,m=0,s=0)=>Math.sign(d||1)*(Math.abs(d)+m/60+s/3600)

};
function integerFold(values,lcm){if(values.length<2||values.length>3||values.some(v=>!Number.isInteger(v)||v<0||v>9999999999999))throw Error('Argument ERROR');const gcd=(a,b)=>{while(b)[a,b]=[b,a%b];return a};return values.reduce((a,b)=>lcm?(a&&b?a/gcd(a,b)*b:0):gcd(a,b));}
const factorial=n=>{if(!Number.isInteger(n)||n<0||n>69)throw Error('Math ERROR: factorial requires an integer from 0 to 69');let r=1;for(let i=2;i<=n;i++)r*=i;return r};
const perm=(n,r)=>{if(![n,r].every(Number.isInteger)||n<0||n>=1e10||r<0||r>n||r>1000)throw Error('Math ERROR');let v=1;for(let j=0;j<r;j++){v*=n-j;if(v>=1e100)throw Error('Math ERROR')}return v;};
const negativePower=(a,b)=>{const [n,d=1]=fractionOf(b).split('/').map(Number);if(d%2!==1||Math.abs(n/d-b)>1e-12)throw Error('Math ERROR');return(-1)**n*Math.abs(a)**b;};
const comb=(n,r)=>{if(![n,r].every(Number.isInteger)||n<0||n>=1e10||r<0||r>n)throw Error('Math ERROR');r=Math.min(r,n-r);if(r>1000)throw Error('Math ERROR');let v=1;for(let j=1;j<=r;j++){v*= (n-r+j)/j;if(v>=1e100)throw Error('Math ERROR')}return v;};
export function evaluateExpression(expression,{angle='RAD',x=0,ans=0,variables={},canon=false,rounding={}}={}){
  let source=String(expression).replace(/[×]/g,'*').replace(/[÷]/g,'/').replace(/[−]/g,'-').replace(/π/g,'pi').replace(/√\(/g,'sqrt(');
  // Canon permits omitted final closing parentheses (manual p.8).
  if(canon){let depth=0;for(const c of source){if(c==='(')depth++;if(c===')')depth--;if(depth<0)throw Error('Syntax ERROR')}source+=')'.repeat(depth);}
  const tokens=[];let at=0;
  while(at<source.length){
    if(/\s/.test(source[at])){at++;continue}
    const m=source.slice(at).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|^[A-Za-z]+|^[+*/^(),!%-]/);
    if(!m)throw Error('Unsupported symbol at position '+(at+1));
    tokens.push(m[0]);at+=m[0].length;
  }
  // Allow calculator-style multiplication without the × key, such as 5X or 2sin(30).
  const callable=new Set(['sin','cos','tan','asin','acos','atan','sinh','cosh','tanh','asinh','acosh','atanh','sqrt','cbrt','root','abs','ln','log','logb','exp','floor','ceil','round','rand','irand','pol','rec','pow','max','min','mod','gcd','lcm','dms','frac','mixed']);
  for(let j=tokens.length-1;j>0;j--){let before=tokens[j-1],after=tokens[j];let valueBefore=/^(?:\d|\.)/.test(before)||before===')'||/^(?:pi|e|x|ans|[A-FMYZ])$/i.test(before);let valueAfter=/^[A-Za-z]+$/.test(after)&&!['nPr','nCr'].includes(after)||after==='(';
    if(valueBefore&&valueAfter&&!(after==='('&&callable.has(before.toLowerCase())))tokens.splice(j,0,canon?'@':'*')}
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
        const special={round:v=>canon?(rounding.notation==='Fix'?Number(v.toFixed(rounding.digits)):Number(v.toPrecision(rounding.notation==='Sci'?(rounding.digits||10):10))):Math.round(v),sin:v=>Math.sin(rad(v)),cos:v=>Math.cos(rad(v)),tan:v=>{if(canon&&(Math.abs(v)>=(angle==='DEG'?9e9:angle==='GRAD'?1e10:157079632.7)||Math.abs(Math.cos(rad(v)))<1e-14))throw Error('Math ERROR');return Math.tan(rad(v))},asin:v=>deg(Math.asin(v)),acos:v=>deg(Math.acos(v)),atan:v=>deg(Math.atan(v)),npr:perm,ncr:comb,pow:Math.pow,logb:(base,value)=>Math.log(value)/Math.log(base),pol:(a,b)=>{variables.Y=deg(Math.atan2(b,a));variables.X=Math.hypot(a,b);return variables.X},rec:(r,t)=>{variables.Y=r*Math.sin(rad(t));variables.X=r*Math.cos(rad(t));return variables.X}};
        const fn=special[name]||functions[name];if(!fn)throw Error('Unknown function: '+t);if(canon){const arity={frac:2,mixed:3,root:2,pow:2,logb:2,npr:2,ncr:2,irand:2,pol:2,rec:2,mod:2,rand:0};if(!['min','max','gcd','lcm','dms'].includes(name)&&args.length!==(arity[name]??1))throw Error('Argument ERROR');if(['sin','cos','tan'].includes(name)&&Math.abs(args[0])>=(angle==='DEG'?9e9:angle==='GRAD'?1e10:157079632.7))throw Error('Math ERROR');}return fn(...args)
      }
      if(name==='pi')return Math.PI;if(name==='e')return Math.E;if(name==='x')return x;if(name==='ans')return Number(ans);
      if(Object.hasOwn(variables,t.toUpperCase()))return Number(variables[t.toUpperCase()]);
      throw Error('Unknown constant: '+t)
    }
    throw Error('Unexpected '+t)
  }
  function parse(min){let left=atom();while(true){let op=peek();if(op==='!'||op==='%'){if(50<min)break;take();left=op==='!'?factorial(left):left/100;continue}
      const bp={'+':10,'-':10,'*':20,'/':20,'@':27,nPr:25,nCr:25,'^':30}[op];if(bp===undefined||bp<min)break;take();let right=parse(op==='^'?bp:bp+1);
      left=op==='+'?left+right:op==='-'?left-right:op==='*'||op==='@'?left*right:op==='/'?left/right:op==='nPr'?perm(left,right):op==='nCr'?comb(left,right):canon&&left<0&&!Number.isInteger(right)?negativePower(left,right):left**right
    }return left}
  if(tokens.length===0)throw Error('Enter an expression');const result=parse(0);
  if(i!==tokens.length)throw Error('Unexpected '+tokens[i]);if(!Number.isFinite(result)||canon&&Math.abs(result)>=1e100)throw Error('Math ERROR');return canon&&Math.abs(result)<1e-99?0:result
}
export function evaluateBaseExpression(expression,base=10){
 const source=String(expression).replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/\s/g,''),radix=Number(base);if(![2,8,10,16].includes(radix))throw Error('Argument ERROR');
 const tokens=source.match(/xnor|xor|and|or|Not|Neg|[dhbo](?=\()|[0-9A-F]+|[()+*/,-]/g)||[];if(tokens.join('')!==source||!tokens.length)throw Error('Syntax ERROR');let pos=0,peek=()=>tokens[pos],take=()=>tokens[pos++];
 const checked=n=>{if(n< -2147483648n||n>2147483647n)throw Error('Math ERROR');return n;};
 function atom(r=radix){let t=take();if(t==='+'||t==='-'){let n=parse(29,r);return t==='-'?checked(-n):n;}if(t==='('){let n=parse(0,r);if(take()!==')')throw Error('Syntax ERROR');return n;}if(['d','h','b','o','Not','Neg'].includes(t)){if(take()!=='(')throw Error('Syntax ERROR');let n=parse(0,({d:10,h:16,b:2,o:8})[t]||r);if(take()!==')')throw Error('Syntax ERROR');return t==='Not'?BigInt.asIntN(32,~n):t==='Neg'?BigInt.asIntN(32,-n):n;}
 if(!t||!(/^[0-9A-F]+$/.test(t)))throw Error('Syntax ERROR');let v=0n;for(const c of t){let d='0123456789ABCDEF'.indexOf(c);if(d>=r)throw Error('Math ERROR');v=v*BigInt(r)+BigInt(d);}if(r!==10&&v<=4294967295n)return BigInt.asIntN(32,v);return v===2147483648n?v:checked(v);}
 function parse(min,r=radix){let left=atom(r);while(true){let op=peek(),bp={or:3,xor:3,xnor:3,and:4,'+':10,'-':10,'*':20,'/':20}[op];if(bp===undefined||bp<min)break;take();let right=parse(bp+1,r);if(op==='+')left=checked(left+right);else if(op==='-')left=checked(left-right);else if(op==='*')left=checked(left*right);else if(op==='/'){if(right===0n)throw Error('Math ERROR');left=checked(left/right);}else left=BigInt.asIntN(32,op==='and'?left&right:op==='or'?left|right:op==='xor'?left^right:~(left^right));}return left;}
 const answer=parse(0);if(pos!==tokens.length)throw Error('Syntax ERROR');return checked(answer);
}
// Complex arithmetic for the red Alpha i key. Other calculator modes keep real results.
export function evaluateComplexExpression(expression,options={}){
  const source=String(expression).replace(/[×]/g,'*').replace(/[÷]/g,'/').replace(/[−]/g,'-').replace(/(\d|\))i\b/g,'$1*i');
  const tokens=source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|[A-Za-z]+|[+*/^()-]/g)||[];
  if(tokens.join('')!==source.replace(/\s/g,''))throw Error('Unsupported complex expression');
  for(let j=tokens.length-1;j>0;j--){const a=tokens[j-1],b=tokens[j],before=/^(?:\d|\.)/.test(a)||a===')'||/^(?:i|pi|e|[A-FXYM])$/i.test(a),after=b==='('||/^(?:i|pi|e|[A-FXYM])$/i.test(b);if(before&&after)tokens.splice(j,0,'*');}
  let at=0,peek=()=>tokens[at],take=()=>tokens[at++],pair=n=>[n,0];
  const add=(a,b)=>[a[0]+b[0],a[1]+b[1]],neg=a=>[-a[0],-a[1]],mul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],div=(a,b)=>{let d=b[0]**2+b[1]**2;if(!d)throw Error('Division by zero');return[(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d]};
  function atom(){let t=take();if(t==='+'||t==='-'){let v=parse(29);return t==='-'?neg(v):v}if(t==='('){let v=parse(0);if(take()!==')')throw Error('Missing closing parenthesis');return v}if(t===undefined)throw Error('Incomplete expression');if(/^(?:\d|\.)/.test(t))return pair(Number(t));let name=t.toLowerCase();if(name==='i')return[0,1];if(name==='pi')return pair(Math.PI);if(name==='e')return pair(Math.E);if(name==='ans')return pair(Number(options.ans)||0);if(name==='x')return pair(Number(options.x)||0);if(Object.hasOwn(options.variables||{},t.toUpperCase()))return pair(Number(options.variables[t.toUpperCase()]));throw Error('Unknown complex symbol: '+t)}
  function parse(min){let left=atom();while(true){let op=peek(),bp={'+':10,'-':10,'*':20,'/':20,'^':30}[op];if(bp===undefined||bp<min)break;take();let right=parse(op==='^'?bp:bp+1);if(op==='+')left=add(left,right);else if(op==='-')left=add(left,neg(right));else if(op==='*')left=mul(left,right);else if(op==='/')left=div(left,right);else{if(right[1]!==0||!Number.isInteger(right[0])||Math.abs(right[0])>100)throw Error('Complex power requires a small integer');let base=left;left=pair(1);for(let j=0;j<Math.abs(right[0]);j++)left=mul(left,base);if(right[0]<0)left=div(pair(1),left)}}return left}
  if(!tokens.length)throw Error('Enter an expression');let value=parse(0);if(at!==tokens.length)throw Error('Unexpected '+tokens[at]);if(value.some(n=>!Number.isFinite(n)))throw Error('Result outside supported range');return value
}
export const formatted=n=>Number.isInteger(n)?String(n):String(Number(n.toPrecision(12)));
export function fractionOf(value){if(!Number.isFinite(value))return '—';const sign=value<0?'-':'';let x=Math.abs(value),h0=0,h1=1,k0=1,k1=0,best=[Math.floor(x),1];for(let i=0;i<32;i++){const a=Math.floor(x),h=a*h1+h0,k=a*k1+k0;if(k>1000000||!Number.isSafeInteger(h))break;best=[h,k];if(Math.abs(h/k-Math.abs(value))<=1e-12*Math.max(1,Math.abs(value)))break;const rem=x-a;if(!rem)break;x=1/rem;h0=h1;h1=h;k0=k1;k1=k;}return sign+best[0]+(best[1]===1?'':'/'+best[1]);}
// Adaptive embedded Gauss–Kronrod 7/15 integration (manual p.52).
export function integrate(expression,a,b,options={}){
 if(!Number.isFinite(a)||!Number.isFinite(b))throw Error('Argument ERROR');if(a===b)return 0;if(b<a)return-integrate(expression,b,a,options);
 const nodes=[.9914553711208126,.9491079123427585,.8648644233597691,.7415311855993945,.5860872354676911,.4058451513773972,.2077849550078985,0],wk=[.02293532201052922,.06309209262997855,.1047900103222502,.1406532597155259,.1690047266392679,.1903505780647854,.2044329400752989,.2094821410847278],wg=[.1294849661688697,.2797053914892767,.3818300505051189,.4179591836734694];
 let calls=0;const f=x=>{if(++calls>30000)throw Error('Time Out ERROR');return evaluateExpression(expression,{...options,x});};
 function quad(lo,hi,tol,depth){const mid=(lo+hi)/2,half=(hi-lo)/2,c=f(mid);let k=wk[7]*c,g=wg[3]*c;for(let j=0;j<7;j++){const v=f(mid-half*nodes[j])+f(mid+half*nodes[j]);k+=wk[j]*v;if(j%2===1)g+=wg[(j-1)/2]*v;}k*=half;g*=half;if(Math.abs(k-g)<=tol*Math.max(1,Math.abs(k)))return k;if(!depth)throw Error('Time Out ERROR');return quad(lo,mid,tol/2,depth-1)+quad(mid,hi,tol/2,depth-1);}
 return quad(a,b,options.tolerance||1e-10,18);
}
export function differentiate(expression,x,options={}){const h=options.deltaX||Math.cbrt(Number.EPSILON)*Math.max(1,Math.abs(x));if(!Number.isFinite(x)||!Number.isFinite(h)||h<=0)throw Error('Argument ERROR');return(evaluateExpression(expression,{...options,x:x+h})-evaluateExpression(expression,{...options,x:x-h}))/(2*h);}
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
