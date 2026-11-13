// SI/CODATA reference values, selected by meaning rather than an ambiguous symbol.
// Material properties and reaction-specific constants have no universal value.
export function constantsForFormula(formula){
 return (formula.symbols||[]).flatMap(s=>{
  const m=s.meaning.toLowerCase();let value,note='';
  if(/universal.*(?:gas|molar)|(?:gas|molar).*universal/.test(m)){value='8.314462618 J/(mol·K) = 8.314462618 kPa·L/(mol·K) = 0.082057366 L·atm/(mol·K)';note='Choose the value matching your pressure and volume units.';}
  else if(m==='specific gas constant'){value='287 J/(kg·K) for dry air';note='Gas-dependent: R = R_u/M. For another gas, use its specific constant.';}
  else if(m==='gravitational acceleration'){value='9.81 m/s²';note='Approximate near Earth’s surface.';}
  else if(m==='circle constant')value='3.141592653589793…';
  else if(m==='euler constant')value='2.718281828459045…';
  else if(m==='avogadro constant')value='6.02214076 × 10^23 mol^(-1)';
  else if(m==='boltzmann constant')value='1.380649 × 10^(-23) J/K';
  else if(m==='speed of light in vacuum'||m==='vacuum light speed')value='299792458 m/s';
  else if(m==='water density'){value='1000 kg/m³';note='Approximate reference; varies with temperature.';}
  else if(m==='water specific weight'){value='9810 N/m³';note='Approximate reference near Earth’s surface.';}
  else if(m==='mercury density'){value='13600 kg/m³';note='Approximate reference; varies with temperature.';}
  else if(m==='faraday constant')value='96485.33212 C/mol';
  else if(m==='stefan–boltzmann constant')value='5.670374419 × 10^(-8) W/(m²·K⁴)';
  return value?[{symbol:s.symbol,value,note}]:[];
 }).filter((c,i,a)=>a.findIndex(x=>x.symbol===c.symbol)===i);
}
