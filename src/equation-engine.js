// Equation mode uses numeric coefficients entered on the calculator LCD.
export const equationTypes=[
  {id:'sim2',label:'2 unknowns',description:'Simultaneous linear equations',variables:['X','Y']},
  {id:'sim3',label:'3 unknowns',description:'Simultaneous linear equations',variables:['X','Y','Z']},
  {id:'sim4',label:'4 unknowns',description:'Simultaneous linear equations',variables:['W','X','Y','Z']},
  {id:'quad',label:'Quadratic',description:'ax² + bx + c = 0',degree:2},
  {id:'cubic',label:'Cubic',description:'ax³ + bx² + cx + d = 0',degree:3},
  {id:'quartic',label:'Quartic',description:'ax⁴ + bx³ + cx² + dx + e = 0',degree:4}
];

export function equationSlots(id){const kind=equationTypes.find(x=>x.id===id);if(!kind)throw Error('Select an equation type');if(kind.degree)return Array.from({length:kind.degree+1},(_,i)=>'abcde'[i]);const n=kind.variables.length;return Array.from({length:n},(_,row)=>Array.from({length:n+1},(_,col)=>col===n?`row${row+1}:rhs`:`row${row+1}:${kind.variables[col]}`)).flat()}

export function solveLinearSystem(matrix){const n=matrix.length;if(n<2||n>4||matrix.some(row=>row.length!==n+1||row.some(v=>!Number.isFinite(v))))throw Error('Enter all finite coefficients');const a=matrix.map(row=>row.slice());for(let col=0;col<n;col++){let pivot=col;for(let row=col+1;row<n;row++)if(Math.abs(a[row][col])>Math.abs(a[pivot][col]))pivot=row;if(Math.abs(a[pivot][col])<1e-12)throw Error('No unique solution: dependent or inconsistent equations');[a[pivot],a[col]]=[a[col],a[pivot]];let d=a[col][col];for(let j=col;j<=n;j++)a[col][j]/=d;for(let row=0;row<n;row++)if(row!==col){let factor=a[row][col];for(let j=col;j<=n;j++)a[row][j]-=factor*a[col][j]}}return a.map(row=>Math.abs(row[n])<1e-12?0:row[n])}

const plus=(a,b)=>[a[0]+b[0],a[1]+b[1]],minus=(a,b)=>[a[0]-b[0],a[1]-b[1]],times=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],divide=(a,b)=>{let d=b[0]*b[0]+b[1]*b[1];if(d<1e-28)throw Error('Root iteration did not converge');return[(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d]};
const magnitude=z=>Math.hypot(...z);
const polynomialValue=(coeff,z)=>coeff.reduce((acc,c)=>plus(times(acc,z),[c,0]),[0,0]);

export function solvePolynomialCoefficients(coefficients){if(coefficients.some(v=>!Number.isFinite(v)))throw Error('Enter all finite coefficients');let coeff=coefficients.slice();while(coeff.length>1&&coeff[0]===0)coeff.shift();let degree=coeff.length-1;if(degree<1)throw Error('At least one nonzero variable coefficient is required');if(degree===1)return[[-coeff[1]/coeff[0],0]];if(degree===2){let [a,b,c]=coeff,d=b*b-4*a*c;if(d>=0)return[[(-b+Math.sqrt(d))/(2*a),0],[(-b-Math.sqrt(d))/(2*a),0]];return[[-b/(2*a),Math.sqrt(-d)/(2*Math.abs(a))],[-b/(2*a),-Math.sqrt(-d)/(2*Math.abs(a))]]}
  const normalized=coeff.map(v=>v/coeff[0]),radius=1+Math.max(...normalized.slice(1).map(Math.abs));let roots=Array.from({length:degree},(_,i)=>{let theta=2*Math.PI*(i+.19)/degree;return[radius*Math.cos(theta),radius*Math.sin(theta)]});
  for(let iteration=0;iteration<1200;iteration++){let next=roots.map((z,i)=>{let denominator=[1,0];for(let j=0;j<degree;j++)if(j!==i)denominator=times(denominator,minus(z,roots[j]));if(magnitude(denominator)<1e-13)denominator=plus(denominator,[1e-8,1e-8]);return minus(z,divide(polynomialValue(normalized,z),denominator))});let movement=Math.max(...next.map((z,i)=>magnitude(minus(z,roots[i]))));roots=next;if(movement<1e-12)break}
  if(roots.some(z=>!z.every(Number.isFinite)||magnitude(polynomialValue(normalized,z))>1e-6))throw Error('Polynomial root calculation did not converge');return roots.map(([re,im])=>[Math.abs(re)<1e-10?0:re,Math.abs(im)<1e-9?0:im]).sort((a,b)=>b[0]-a[0]||b[1]-a[1])
}

export function solveSelectedEquation(id,values){let def=equationTypes.find(x=>x.id===id);if(!def)throw Error('Select an equation type');if(values.length!==equationSlots(id).length||values.some(v=>!Number.isFinite(v)))throw Error('Fill every coefficient box');if(def.degree)return solvePolynomialCoefficients(values).map((value,i)=>({name:`X${i+1}`,value}));let n=def.variables.length,matrix=Array.from({length:n},(_,i)=>values.slice(i*(n+1),(i+1)*(n+1)));return solveLinearSystem(matrix).map((value,i)=>({name:def.variables[i],value:[value,0]}))}
