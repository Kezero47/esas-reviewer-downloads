const number=(value,label)=>{if(String(value??'').trim()===''||!Number.isFinite(Number(value)))throw Error(`Enter a valid ${label}.`);return Number(value);};
const positive=(value,label)=>{const x=number(value,label);if(x<=0)throw Error(`${label} must be greater than zero.`);return x;};
export function ohmsLaw({solve='voltage',voltage,current,resistance}){
 let V,I,R;
 if(solve==='voltage'){I=number(current,'current');R=positive(resistance,'Resistance');V=I*R;}
 else if(solve==='current'){V=number(voltage,'voltage');R=positive(resistance,'Resistance');I=V/R;}
 else if(solve==='resistance'){V=number(voltage,'voltage');I=number(current,'current');if(I===0)throw Error('Current cannot be zero when solving resistance.');R=V/I;if(R<=0)throw Error('Voltage and current must give a positive resistance.');}
 else throw Error('Choose voltage, current, or resistance.');
 const power=V*I;if(![V,I,R,power].every(Number.isFinite))throw Error('Result is outside the supported range.');return {voltage:V,current:I,resistance:R,power};
}
export function acPower({voltage,current,powerFactor,phase='single'}){
 const V=positive(voltage,'RMS voltage'),I=positive(current,'RMS current'),pf=number(powerFactor,'power factor');if(pf<0||pf>1)throw Error('Power factor must be between 0 and 1.');if(!['single','three'].includes(phase))throw Error('Choose a phase system.');
 const apparent=V*I*(phase==='three'?Math.sqrt(3):1);if(!Number.isFinite(apparent))throw Error('Result is outside the supported range.');return {apparent,active:apparent*pf,reactive:apparent*Math.sqrt(1-pf*pf)};
}
export function reactance({frequency,inductance,capacitance}){
 const f=positive(frequency,'Frequency'),L=positive(inductance,'Inductance')/1000,C=positive(capacitance,'Capacitance')/1e6;
 const values={inductive:2*Math.PI*f*L,capacitive:1/(2*Math.PI*f*C),resonance:1/(2*Math.PI*Math.sqrt(L*C))};if(!Object.values(values).every(Number.isFinite))throw Error('Result is outside the supported range.');return values;
}
export function resistorNetwork(text){const values=String(text).trim().split(/[\s,;]+/).map(x=>positive(x,'Resistance'));if(values.length<2||values.length>100)throw Error('Enter 2 to 100 resistances in ohms.');const series=values.reduce((a,b)=>a+b,0),parallel=1/values.reduce((sum,r)=>sum+1/r,0);if(!Number.isFinite(series)||!Number.isFinite(parallel)||parallel<=0)throw Error('Result is outside the supported range.');return {series,parallel};}
