export const formulaCatalog = {
  "hydrostatic": {
    "id": "hydrostatic",
    "expression": "Δp = ρgh",
    "symbols": [
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth",
        "unit": "m"
      }
    ]
  },
  "pressure-force": {
    "id": "pressure-force",
    "expression": "F = ΔpA",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Normal force",
        "unit": "N"
      },
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "A",
        "meaning": "Loaded area",
        "unit": "m²"
      }
    ]
  },
  "circular-area": {
    "id": "circular-area",
    "expression": "A = πd²/4",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Circular area",
        "unit": "m²"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      }
    ]
  },
  "pascal": {
    "id": "pascal",
    "expression": "F₁/A₁ = F₂/A₂",
    "symbols": [
      {
        "symbol": "F₁",
        "meaning": "First piston force",
        "unit": "N"
      },
      {
        "symbol": "A₁",
        "meaning": "First piston area",
        "unit": "m²"
      },
      {
        "symbol": "F₂",
        "meaning": "Second piston force",
        "unit": "N"
      },
      {
        "symbol": "A₂",
        "meaning": "Second piston area",
        "unit": "m²"
      }
    ]
  },
  "specific-weight": {
    "id": "specific-weight",
    "expression": "Δp = γh",
    "symbols": [
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "γ",
        "meaning": "Specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "h",
        "meaning": "Vertical depth",
        "unit": "m"
      }
    ]
  },
  "velocity-head": {
    "id": "velocity-head",
    "expression": "hᵥ = v²/(2g)",
    "symbols": [
      {
        "symbol": "hᵥ",
        "meaning": "Velocity head",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Flow velocity",
        "unit": "m/s"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "continuity": {
    "id": "continuity",
    "expression": "A₁v₁ = A₂v₂",
    "symbols": [
      {
        "symbol": "A₁",
        "meaning": "Inlet area",
        "unit": "m²"
      },
      {
        "symbol": "v₁",
        "meaning": "Inlet velocity",
        "unit": "m/s"
      },
      {
        "symbol": "A₂",
        "meaning": "Outlet area",
        "unit": "m²"
      },
      {
        "symbol": "v₂",
        "meaning": "Outlet velocity",
        "unit": "m/s"
      }
    ]
  },
  "rect-area": {
    "id": "rect-area",
    "expression": "A = bL",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      },
      {
        "symbol": "b",
        "meaning": "Width",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Length",
        "unit": "m"
      }
    ]
  },
  "density-sg": {
    "id": "density-sg",
    "expression": "ρ = SG ρ_w",
    "symbols": [
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "SG",
        "meaning": "Specific gravity relative to water",
        "unit": "dimensionless"
      },
      {
        "symbol": "ρ_w",
        "meaning": "Water density",
        "unit": "kg/m³"
      }
    ]
  },
  "weight-sg": {
    "id": "weight-sg",
    "expression": "γ = SG γ_w",
    "symbols": [
      {
        "symbol": "γ",
        "meaning": "Specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "SG",
        "meaning": "Specific gravity relative to water",
        "unit": "dimensionless"
      },
      {
        "symbol": "γ_w",
        "meaning": "Water specific weight",
        "unit": "N/m³"
      }
    ]
  },
  "density-volume": {
    "id": "density-volume",
    "expression": "ρ = 1/v_s",
    "symbols": [
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "v_s",
        "meaning": "Specific volume",
        "unit": "m³/kg"
      }
    ]
  },
  "density-weight": {
    "id": "density-weight",
    "expression": "ρ = W/(gV)",
    "symbols": [
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "W",
        "meaning": "Weight in air",
        "unit": "N"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "m³"
      }
    ]
  },
  "viscosity": {
    "id": "viscosity",
    "expression": "μ = ρν",
    "symbols": [
      {
        "symbol": "μ",
        "meaning": "Dynamic viscosity",
        "unit": "Pa·s"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "ν",
        "meaning": "Kinematic viscosity",
        "unit": "m²/s"
      }
    ]
  },
  "ideal-gas": {
    "id": "ideal-gas",
    "expression": "m = p_abs V/(RT)",
    "symbols": [
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "p_abs",
        "meaning": "Absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "m³"
      },
      {
        "symbol": "R",
        "meaning": "Specific gas constant",
        "unit": "J/(kg·K)"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      }
    ]
  },
  "celsius-kelvin": {
    "id": "celsius-kelvin",
    "expression": "T = T_C + 273.15",
    "symbols": [
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_C",
        "meaning": "Temperature in Celsius",
        "unit": "°C"
      }
    ]
  },
  "fahrenheit-rankine": {
    "id": "fahrenheit-rankine",
    "expression": "T_R = T_F + 459.67",
    "symbols": [
      {
        "symbol": "T_R",
        "meaning": "Absolute Rankine temperature",
        "unit": "°R"
      },
      {
        "symbol": "T_F",
        "meaning": "Temperature in Fahrenheit",
        "unit": "°F"
      }
    ]
  },
  "weight": {
    "id": "weight",
    "expression": "W = mg",
    "symbols": [
      {
        "symbol": "W",
        "meaning": "Weight in air",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "horizontal-bernoulli": {
    "id": "horizontal-bernoulli",
    "expression": "p₂ = p₁ + ρ(v₁² − v₂²)/2",
    "symbols": [
      {
        "symbol": "p₂",
        "meaning": "Pressure at section 2",
        "unit": "Pa"
      },
      {
        "symbol": "p₁",
        "meaning": "Pressure at section 1",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "v₁",
        "meaning": "Section 1 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v₂",
        "meaning": "Section 2 velocity",
        "unit": "m/s"
      }
    ]
  },
  "bernoulli-loss": {
    "id": "bernoulli-loss",
    "expression": "p₁/(ρg) + v₁²/(2g) + z₁ = p₂/(ρg) + v₂²/(2g) + z₂ + h_L",
    "symbols": [
      {
        "symbol": "p₁",
        "meaning": "Pressure at section 1",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "v₁",
        "meaning": "Section 1 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "z₁",
        "meaning": "Section 1 elevation",
        "unit": "m"
      },
      {
        "symbol": "p₂",
        "meaning": "Pressure at section 2",
        "unit": "Pa"
      },
      {
        "symbol": "v₂",
        "meaning": "Section 2 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "z₂",
        "meaning": "Section 2 elevation",
        "unit": "m"
      },
      {
        "symbol": "h_L",
        "meaning": "Head loss",
        "unit": "m"
      }
    ]
  },
  "inclined-depth": {
    "id": "inclined-depth",
    "expression": "h_c = L sin θ",
    "symbols": [
      {
        "symbol": "h_c",
        "meaning": "Centroid depth below free surface",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Length",
        "unit": "m"
      },
      {
        "symbol": "θ",
        "meaning": "Inclination or contact angle as specified",
        "unit": "rad"
      }
    ]
  },
  "plane-hydrostatic": {
    "id": "plane-hydrostatic",
    "expression": "F = ρg h_c A",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Resultant force",
        "unit": "N"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "h_c",
        "meaning": "Centroid depth below free surface",
        "unit": "m"
      },
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      }
    ]
  },
  "buoyancy": {
    "id": "buoyancy",
    "expression": "F_b = ρgV",
    "symbols": [
      {
        "symbol": "F_b",
        "meaning": "Buoyant force",
        "unit": "N"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "m³"
      }
    ]
  },
  "apparent-weight": {
    "id": "apparent-weight",
    "expression": "W_app = W − F_b",
    "symbols": [
      {
        "symbol": "W_app",
        "meaning": "Apparent immersed weight",
        "unit": "N"
      },
      {
        "symbol": "W",
        "meaning": "Weight in air",
        "unit": "N"
      },
      {
        "symbol": "F_b",
        "meaning": "Buoyant force",
        "unit": "N"
      }
    ]
  },
  "archimedes-sg": {
    "id": "archimedes-sg",
    "expression": "SG = W/(W − W_water)",
    "symbols": [
      {
        "symbol": "SG",
        "meaning": "Specific gravity relative to water",
        "unit": "dimensionless"
      },
      {
        "symbol": "W",
        "meaning": "Weight in air",
        "unit": "N"
      },
      {
        "symbol": "W_water",
        "meaning": "Apparent weight in water",
        "unit": "N"
      }
    ]
  },
  "oil-apparent": {
    "id": "oil-apparent",
    "expression": "W_oil = W − SG_o(W − W_water)",
    "symbols": [
      {
        "symbol": "W_oil",
        "meaning": "Apparent weight in oil",
        "unit": "N"
      },
      {
        "symbol": "W",
        "meaning": "Weight in air",
        "unit": "N"
      },
      {
        "symbol": "SG_o",
        "meaning": "Oil specific gravity",
        "unit": "dimensionless"
      },
      {
        "symbol": "W_water",
        "meaning": "Apparent weight in water",
        "unit": "N"
      }
    ]
  },
  "laminar-darcy": {
    "id": "laminar-darcy",
    "expression": "f_D = 64/Re",
    "symbols": [
      {
        "symbol": "f_D",
        "meaning": "Darcy friction factor",
        "unit": "dimensionless"
      },
      {
        "symbol": "Re",
        "meaning": "Reynolds number",
        "unit": "dimensionless"
      }
    ]
  },
  "reynolds": {
    "id": "reynolds",
    "expression": "Re = ρvd/μ",
    "symbols": [
      {
        "symbol": "Re",
        "meaning": "Reynolds number",
        "unit": "dimensionless"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      },
      {
        "symbol": "μ",
        "meaning": "Dynamic viscosity",
        "unit": "Pa·s"
      }
    ]
  },
  "jet-power": {
    "id": "jet-power",
    "expression": "P_k = ρQv²/2",
    "symbols": [
      {
        "symbol": "P_k",
        "meaning": "Jet kinetic power",
        "unit": "W"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "Q",
        "meaning": "Volume flow rate",
        "unit": "m³/s"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      }
    ]
  },
  "capillary": {
    "id": "capillary",
    "expression": "h = 4σ cos θ/(ρgd)",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      },
      {
        "symbol": "σ",
        "meaning": "Surface tension",
        "unit": "N/m"
      },
      {
        "symbol": "θ",
        "meaning": "Inclination or contact angle as specified",
        "unit": "rad"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      }
    ]
  },
  "bulk": {
    "id": "bulk",
    "expression": "K = −V₀ Δp/ΔV",
    "symbols": [
      {
        "symbol": "K",
        "meaning": "Bulk modulus",
        "unit": "Pa"
      },
      {
        "symbol": "V₀",
        "meaning": "Initial volume",
        "unit": "m³"
      },
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "ΔV",
        "meaning": "Volume change",
        "unit": "m³"
      }
    ]
  },
  "hydraulic-power": {
    "id": "hydraulic-power",
    "expression": "P_h = ρgQH",
    "symbols": [
      {
        "symbol": "P_h",
        "meaning": "Hydraulic power",
        "unit": "W"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "Q",
        "meaning": "Volume flow rate",
        "unit": "m³/s"
      },
      {
        "symbol": "H",
        "meaning": "Available hydraulic head",
        "unit": "m"
      }
    ]
  },
  "turbine-power": {
    "id": "turbine-power",
    "expression": "P_out = ηP_h",
    "symbols": [
      {
        "symbol": "P_out",
        "meaning": "Output shaft power",
        "unit": "W"
      },
      {
        "symbol": "η",
        "meaning": "Efficiency as a fraction",
        "unit": "dimensionless"
      },
      {
        "symbol": "P_h",
        "meaning": "Hydraulic power",
        "unit": "W"
      }
    ]
  },
  "pump-power": {
    "id": "pump-power",
    "expression": "P_in = P_h/η",
    "symbols": [
      {
        "symbol": "P_in",
        "meaning": "Input shaft power",
        "unit": "W"
      },
      {
        "symbol": "P_h",
        "meaning": "Hydraulic power",
        "unit": "W"
      },
      {
        "symbol": "η",
        "meaning": "Efficiency as a fraction",
        "unit": "dimensionless"
      }
    ]
  },
  "rotation-level": {
    "id": "rotation-level",
    "expression": "Δz = ω²r²/(2g)",
    "symbols": [
      {
        "symbol": "Δz",
        "meaning": "Elevation increase",
        "unit": "m"
      },
      {
        "symbol": "ω",
        "meaning": "Angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "r",
        "meaning": "Radius from axis",
        "unit": "m"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "draft-added": {
    "id": "draft-added",
    "expression": "d_new = d₀ + W_add/(ρgA_b)",
    "symbols": [
      {
        "symbol": "d_new",
        "meaning": "Loaded draft",
        "unit": "m"
      },
      {
        "symbol": "d₀",
        "meaning": "Initial draft",
        "unit": "m"
      },
      {
        "symbol": "W_add",
        "meaning": "Added load weight",
        "unit": "N"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "A_b",
        "meaning": "Horizontal base area",
        "unit": "m²"
      }
    ]
  },
  "draft-mass": {
    "id": "draft-mass",
    "expression": "h = m/(ρA_b)",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "A_b",
        "meaning": "Horizontal base area",
        "unit": "m²"
      }
    ]
  },
  "draft-weight": {
    "id": "draft-weight",
    "expression": "h = W/(ρgA_b)",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      },
      {
        "symbol": "W",
        "meaning": "Weight in air",
        "unit": "N"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "A_b",
        "meaning": "Horizontal base area",
        "unit": "m²"
      }
    ]
  },
  "draft-sg": {
    "id": "draft-sg",
    "expression": "h = SG H_b",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      },
      {
        "symbol": "SG",
        "meaning": "Specific gravity relative to water",
        "unit": "dimensionless"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      }
    ]
  },
  "droplet": {
    "id": "droplet",
    "expression": "Δp = 4σ/d",
    "symbols": [
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "σ",
        "meaning": "Surface tension",
        "unit": "N/m"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      }
    ]
  },
  "bubble": {
    "id": "bubble",
    "expression": "Δp = 8σ/d",
    "symbols": [
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "σ",
        "meaning": "Surface tension",
        "unit": "N/m"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      }
    ]
  },
  "pressure-difference": {
    "id": "pressure-difference",
    "expression": "Δp = p_abs − pₐ",
    "symbols": [
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "p_abs",
        "meaning": "Absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "pₐ",
        "meaning": "Atmospheric pressure",
        "unit": "Pa"
      }
    ]
  },
  "hydraulic-lever": {
    "id": "hydraulic-lever",
    "expression": "F_out = η M F_in (d₂/d₁)²",
    "symbols": [
      {
        "symbol": "F_out",
        "meaning": "Useful output force",
        "unit": "N"
      },
      {
        "symbol": "η",
        "meaning": "Efficiency as a fraction",
        "unit": "dimensionless"
      },
      {
        "symbol": "M",
        "meaning": "Lever force multiplier",
        "unit": "dimensionless"
      },
      {
        "symbol": "F_in",
        "meaning": "Applied input force",
        "unit": "N"
      },
      {
        "symbol": "d₂",
        "meaning": "Second diameter",
        "unit": "m"
      },
      {
        "symbol": "d₁",
        "meaning": "First diameter",
        "unit": "m"
      }
    ]
  },
  "torricelli": {
    "id": "torricelli",
    "expression": "v = √(2gh)",
    "symbols": [
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      }
    ]
  },
  "flow-rate": {
    "id": "flow-rate",
    "expression": "Q = Av",
    "symbols": [
      {
        "symbol": "Q",
        "meaning": "Volume flow rate",
        "unit": "m³/s"
      },
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      }
    ]
  },
  "orifice": {
    "id": "orifice",
    "expression": "Q = C_d A √(2gH)",
    "symbols": [
      {
        "symbol": "Q",
        "meaning": "Volume flow rate",
        "unit": "m³/s"
      },
      {
        "symbol": "C_d",
        "meaning": "Discharge coefficient",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "H",
        "meaning": "Available hydraulic head",
        "unit": "m"
      }
    ]
  },
  "closed-pressure": {
    "id": "closed-pressure",
    "expression": "p = p₀ + ρgh",
    "symbols": [
      {
        "symbol": "p",
        "meaning": "Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "p₀",
        "meaning": "Pressure above the liquid",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      }
    ]
  },
  "diameter-continuity": {
    "id": "diameter-continuity",
    "expression": "v₂ = v₁(d₁/d₂)²",
    "symbols": [
      {
        "symbol": "v₂",
        "meaning": "Section 2 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v₁",
        "meaning": "Section 1 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "d₁",
        "meaning": "First diameter",
        "unit": "m"
      },
      {
        "symbol": "d₂",
        "meaning": "Second diameter",
        "unit": "m"
      }
    ]
  },
  "pitot": {
    "id": "pitot",
    "expression": "v = √(2Δp/ρ)",
    "symbols": [
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      },
      {
        "symbol": "Δp",
        "meaning": "Pressure difference",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      }
    ]
  },
  "trapezoid-area": {
    "id": "trapezoid-area",
    "expression": "A = (b_t + b_b)H_b/2",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      },
      {
        "symbol": "b_t",
        "meaning": "Top width",
        "unit": "m"
      },
      {
        "symbol": "b_b",
        "meaning": "Bottom width",
        "unit": "m"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      }
    ]
  },
  "trapezoid-centroid": {
    "id": "trapezoid-centroid",
    "expression": "h_c = h_t + H_b(b_t + 2b_b)/(3(b_t + b_b))",
    "symbols": [
      {
        "symbol": "h_c",
        "meaning": "Centroid depth below free surface",
        "unit": "m"
      },
      {
        "symbol": "h_t",
        "meaning": "Top edge depth",
        "unit": "m"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      },
      {
        "symbol": "b_t",
        "meaning": "Top width",
        "unit": "m"
      },
      {
        "symbol": "b_b",
        "meaning": "Bottom width",
        "unit": "m"
      }
    ]
  },
  "accelerating-depth": {
    "id": "accelerating-depth",
    "expression": "h = h₀ + aL/(2g)",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      },
      {
        "symbol": "h₀",
        "meaning": "Initial uniform depth",
        "unit": "m"
      },
      {
        "symbol": "a",
        "meaning": "Horizontal acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "L",
        "meaning": "Length",
        "unit": "m"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "minimum-diameter": {
    "id": "minimum-diameter",
    "expression": "d = √(4Q/(πv))",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      },
      {
        "symbol": "Q",
        "meaning": "Volume flow rate",
        "unit": "m³/s"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      }
    ]
  },
  "siphon-pressure": {
    "id": "siphon-pressure",
    "expression": "p_g = −ρgΔz − ρv²/2",
    "symbols": [
      {
        "symbol": "p_g",
        "meaning": "Gauge pressure",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "Δz",
        "meaning": "Elevation increase",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      }
    ]
  },
  "layered-pressure": {
    "id": "layered-pressure",
    "expression": "p = p₀ + ρ_o gh_o + ρ_w gh_w",
    "symbols": [
      {
        "symbol": "p",
        "meaning": "Pressure",
        "unit": "Pa"
      },
      {
        "symbol": "p₀",
        "meaning": "Pressure above the liquid",
        "unit": "Pa"
      },
      {
        "symbol": "ρ_o",
        "meaning": "Oil density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "h_o",
        "meaning": "Oil depth",
        "unit": "m"
      },
      {
        "symbol": "ρ_w",
        "meaning": "Water density",
        "unit": "kg/m³"
      },
      {
        "symbol": "h_w",
        "meaning": "Block depth immersed in water",
        "unit": "m"
      }
    ]
  },
  "interface-float": {
    "id": "interface-float",
    "expression": "h_w = H_b(ρ_b − ρ_o)/(ρ_w − ρ_o)",
    "symbols": [
      {
        "symbol": "h_w",
        "meaning": "Block depth immersed in water",
        "unit": "m"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      },
      {
        "symbol": "ρ_b",
        "meaning": "Block density",
        "unit": "kg/m³"
      },
      {
        "symbol": "ρ_o",
        "meaning": "Oil density",
        "unit": "kg/m³"
      },
      {
        "symbol": "ρ_w",
        "meaning": "Water density",
        "unit": "kg/m³"
      }
    ]
  },
  "manometer-oil": {
    "id": "manometer-oil",
    "expression": "p_g = ρ_Hg gΔh − ρ_o gh_o",
    "symbols": [
      {
        "symbol": "p_g",
        "meaning": "Gauge pressure",
        "unit": "Pa"
      },
      {
        "symbol": "ρ_Hg",
        "meaning": "Mercury density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "Δh",
        "meaning": "Mercury-level difference",
        "unit": "m"
      },
      {
        "symbol": "ρ_o",
        "meaning": "Oil density",
        "unit": "kg/m³"
      },
      {
        "symbol": "h_o",
        "meaning": "Oil depth",
        "unit": "m"
      }
    ]
  },
  "manometer-geometry": {
    "id": "manometer-geometry",
    "expression": "h_o = Δh − z",
    "symbols": [
      {
        "symbol": "h_o",
        "meaning": "Oil depth",
        "unit": "m"
      },
      {
        "symbol": "Δh",
        "meaning": "Mercury-level difference",
        "unit": "m"
      },
      {
        "symbol": "z",
        "meaning": "Open mercury surface elevation above pipe center",
        "unit": "m"
      }
    ]
  },
  "turbine-head": {
    "id": "turbine-head",
    "expression": "H_t = H − h_L − v²/(2g)",
    "symbols": [
      {
        "symbol": "H_t",
        "meaning": "Turbine extracted head",
        "unit": "m"
      },
      {
        "symbol": "H",
        "meaning": "Available hydraulic head",
        "unit": "m"
      },
      {
        "symbol": "h_L",
        "meaning": "Head loss",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "angular-speed": {
    "id": "angular-speed",
    "expression": "ω = 2πN/60",
    "symbols": [
      {
        "symbol": "ω",
        "meaning": "Angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "N",
        "meaning": "Rotational speed",
        "unit": "rev/min"
      }
    ]
  },
  "shaft-viscous": {
    "id": "shaft-viscous",
    "expression": "P_in = μ πdL (ωd/2)²/δ",
    "symbols": [
      {
        "symbol": "P_in",
        "meaning": "Input shaft power",
        "unit": "W"
      },
      {
        "symbol": "μ",
        "meaning": "Dynamic viscosity",
        "unit": "Pa·s"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Length",
        "unit": "m"
      },
      {
        "symbol": "ω",
        "meaning": "Angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "δ",
        "meaning": "Oil-film thickness",
        "unit": "m"
      }
    ]
  },
  "vacuum-absolute": {
    "id": "vacuum-absolute",
    "expression": "p_abs = pₐ − pᵥ",
    "symbols": [
      {
        "symbol": "p_abs",
        "meaning": "Absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "pₐ",
        "meaning": "Atmospheric pressure",
        "unit": "Pa"
      },
      {
        "symbol": "pᵥ",
        "meaning": "Vacuum pressure magnitude",
        "unit": "Pa"
      }
    ]
  },
  "absolute-pressure": {
    "id": "absolute-pressure",
    "expression": "p_abs = pₐ + γh",
    "symbols": [
      {
        "symbol": "p_abs",
        "meaning": "Absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "pₐ",
        "meaning": "Atmospheric pressure",
        "unit": "Pa"
      },
      {
        "symbol": "γ",
        "meaning": "Specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "h",
        "meaning": "Vertical fluid depth or head",
        "unit": "m"
      }
    ]
  },
  "floating-fraction": {
    "id": "floating-fraction",
    "expression": "SG = SG_f (1 − f_above)",
    "symbols": [
      {
        "symbol": "SG",
        "meaning": "Specific gravity relative to water",
        "unit": "dimensionless"
      },
      {
        "symbol": "SG_f",
        "meaning": "Supporting fluid specific gravity",
        "unit": "dimensionless"
      },
      {
        "symbol": "f_above",
        "meaning": "Volume fraction above liquid",
        "unit": "dimensionless"
      }
    ]
  },
  "pump-head": {
    "id": "pump-head",
    "expression": "H_p = (p₂ − p₁)/(ρg) + (v₂² − v₁²)/(2g) + Δz + h_L",
    "symbols": [
      {
        "symbol": "H_p",
        "meaning": "Pump head",
        "unit": "m"
      },
      {
        "symbol": "p₂",
        "meaning": "Pressure at section 2",
        "unit": "Pa"
      },
      {
        "symbol": "p₁",
        "meaning": "Pressure at section 1",
        "unit": "Pa"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "v₂",
        "meaning": "Section 2 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v₁",
        "meaning": "Section 1 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "Δz",
        "meaning": "Elevation increase",
        "unit": "m"
      },
      {
        "symbol": "h_L",
        "meaning": "Head loss",
        "unit": "m"
      }
    ]
  },
  "ideal-density": {
    "id": "ideal-density",
    "expression": "ρ = p_abs/(RT)",
    "symbols": [
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "p_abs",
        "meaning": "Absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "R",
        "meaning": "Specific gas constant",
        "unit": "J/(kg·K)"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      }
    ]
  },
  "mass-flow": {
    "id": "mass-flow",
    "expression": "ṁ = ρAv",
    "symbols": [
      {
        "symbol": "ṁ",
        "meaning": "Mass flow rate",
        "unit": "kg/s"
      },
      {
        "symbol": "ρ",
        "meaning": "Fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      }
    ]
  },
  "shaft-power": {
    "id": "shaft-power",
    "expression": "P_out = τω",
    "symbols": [
      {
        "symbol": "P_out",
        "meaning": "Output shaft power",
        "unit": "W"
      },
      {
        "symbol": "τ",
        "meaning": "Shaft torque",
        "unit": "N·m"
      },
      {
        "symbol": "ω",
        "meaning": "Angular speed",
        "unit": "rad/s"
      }
    ]
  },
  "efficiency": {
    "id": "efficiency",
    "expression": "η = P_out/P_h",
    "symbols": [
      {
        "symbol": "η",
        "meaning": "Efficiency as a fraction",
        "unit": "dimensionless"
      },
      {
        "symbol": "P_out",
        "meaning": "Output shaft power",
        "unit": "W"
      },
      {
        "symbol": "P_h",
        "meaning": "Hydraulic power",
        "unit": "W"
      }
    ]
  },
  "rectangle-centroid": {
    "id": "rectangle-centroid",
    "expression": "h_c = h_t + H_b/2",
    "symbols": [
      {
        "symbol": "h_c",
        "meaning": "Centroid depth below free surface",
        "unit": "m"
      },
      {
        "symbol": "h_t",
        "meaning": "Top edge depth",
        "unit": "m"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      }
    ]
  },
  "fanning-conversion": {
    "id": "fanning-conversion",
    "expression": "f_D = 4f_F",
    "symbols": [
      {
        "symbol": "f_D",
        "meaning": "Darcy friction factor",
        "unit": "dimensionless"
      },
      {
        "symbol": "f_F",
        "meaning": "Fanning friction factor",
        "unit": "dimensionless"
      }
    ]
  },
  "darcy-loss": {
    "id": "darcy-loss",
    "expression": "h_f = f_D(L/d)v²/(2g)",
    "symbols": [
      {
        "symbol": "h_f",
        "meaning": "Friction head loss",
        "unit": "m"
      },
      {
        "symbol": "f_D",
        "meaning": "Darcy friction factor",
        "unit": "dimensionless"
      },
      {
        "symbol": "L",
        "meaning": "Length",
        "unit": "m"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Average flow velocity",
        "unit": "m/s"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "hydraulic-press": {
    "id": "hydraulic-press",
    "expression": "F_out = F_in(d₂/d₁)²",
    "symbols": [
      {
        "symbol": "F_out",
        "meaning": "Useful output force",
        "unit": "N"
      },
      {
        "symbol": "F_in",
        "meaning": "Applied input force",
        "unit": "N"
      },
      {
        "symbol": "d₂",
        "meaning": "Second diameter",
        "unit": "m"
      },
      {
        "symbol": "d₁",
        "meaning": "First diameter",
        "unit": "m"
      }
    ]
  },
  "rectangle-inertia": {
    "id": "rectangle-inertia",
    "expression": "I_G = bH_b³/12",
    "symbols": [
      {
        "symbol": "I_G",
        "meaning": "Area second moment about centroidal horizontal axis",
        "unit": "m⁴"
      },
      {
        "symbol": "b",
        "meaning": "Width",
        "unit": "m"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      }
    ]
  },
  "center-pressure": {
    "id": "center-pressure",
    "expression": "h_p = h_c + I_G/(Ah_c)",
    "symbols": [
      {
        "symbol": "h_p",
        "meaning": "Center-of-pressure depth",
        "unit": "m"
      },
      {
        "symbol": "h_c",
        "meaning": "Centroid depth below free surface",
        "unit": "m"
      },
      {
        "symbol": "I_G",
        "meaning": "Area second moment about centroidal horizontal axis",
        "unit": "m⁴"
      },
      {
        "symbol": "A",
        "meaning": "Area",
        "unit": "m²"
      }
    ]
  },
  "volume-cylinder": {
    "id": "volume-cylinder",
    "expression": "V₀ = πd²H_b/4",
    "symbols": [
      {
        "symbol": "V₀",
        "meaning": "Initial volume",
        "unit": "m³"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Diameter",
        "unit": "m"
      },
      {
        "symbol": "H_b",
        "meaning": "Height of the plate, block, or tank as specified",
        "unit": "m"
      }
    ]
  },
  "thermal-overflow": {
    "id": "thermal-overflow",
    "expression": "ΔV = V₀(ρ₁/ρ₂ − 1)",
    "symbols": [
      {
        "symbol": "ΔV",
        "meaning": "Volume change",
        "unit": "m³"
      },
      {
        "symbol": "V₀",
        "meaning": "Initial volume",
        "unit": "m³"
      },
      {
        "symbol": "ρ₁",
        "meaning": "Initial density",
        "unit": "kg/m³"
      },
      {
        "symbol": "ρ₂",
        "meaning": "Final density",
        "unit": "kg/m³"
      }
    ]
  },
  "friction-ratio": {
    "id": "friction-ratio",
    "expression": "h_f1/h_f2 = (L₁/L₂)(d₂/d₁)",
    "symbols": [
      {
        "symbol": "h_f1",
        "meaning": "First pipe head loss",
        "unit": "m"
      },
      {
        "symbol": "h_f2",
        "meaning": "Second pipe head loss",
        "unit": "m"
      },
      {
        "symbol": "L₁",
        "meaning": "First pipe length",
        "unit": "m"
      },
      {
        "symbol": "L₂",
        "meaning": "Second pipe length",
        "unit": "m"
      },
      {
        "symbol": "d₁",
        "meaning": "First diameter",
        "unit": "m"
      },
      {
        "symbol": "d₂",
        "meaning": "Second diameter",
        "unit": "m"
      }
    ]
  },
  "hgl-rise": {
    "id": "hgl-rise",
    "expression": "ΔHGL = H_p − (v₂² − v₁²)/(2g)",
    "symbols": [
      {
        "symbol": "ΔHGL",
        "meaning": "Hydraulic grade line rise",
        "unit": "m"
      },
      {
        "symbol": "H_p",
        "meaning": "Pump head",
        "unit": "m"
      },
      {
        "symbol": "v₂",
        "meaning": "Section 2 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v₁",
        "meaning": "Section 1 velocity",
        "unit": "m/s"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "compound-present": {
    "id": "compound-present",
    "expression": "P = F/(1 + i)ⁿ",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "compound-future": {
    "id": "compound-future",
    "expression": "F = P(1 + i)ⁿ",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "return-net": {
    "id": "return-net",
    "expression": "i = (F − P)/P",
    "symbols": [
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      }
    ]
  },
  "compound-time": {
    "id": "compound-time",
    "expression": "n = ln(F/P)/ln(1 + i)",
    "symbols": [
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      }
    ]
  },
  "cashflow-present": {
    "id": "cashflow-present",
    "expression": "P = Σ C_t/(1 + i)ᵗ",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "C_t",
        "meaning": "Cash flow at end of period t",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "t",
        "meaning": "Period index",
        "unit": "periods"
      }
    ]
  },
  "annuity-present": {
    "id": "annuity-present",
    "expression": "P = A[1 − (1 + i)⁻ⁿ]/i",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "annuity-future": {
    "id": "annuity-future",
    "expression": "F = A[(1 + i)ⁿ − 1]/i",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "sinking-deposit": {
    "id": "sinking-deposit",
    "expression": "A = Fi/[(1 + i)ⁿ − 1]",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "capital-payment": {
    "id": "capital-payment",
    "expression": "A = Pi(1 + i)ⁿ/[(1 + i)ⁿ − 1]",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "nominal-period": {
    "id": "nominal-period",
    "expression": "i = j/m",
    "symbols": [
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "j",
        "meaning": "Nominal annual interest rate",
        "unit": "dimensionless"
      },
      {
        "symbol": "m",
        "meaning": "Compounding periods per year",
        "unit": "periods/year"
      }
    ]
  },
  "simple-interest": {
    "id": "simple-interest",
    "expression": "I = Prt_y",
    "symbols": [
      {
        "symbol": "I",
        "meaning": "Interest amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "ordinary-days": {
    "id": "ordinary-days",
    "expression": "t_y = d_days/360",
    "symbols": [
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      },
      {
        "symbol": "d_days",
        "meaning": "Actual elapsed days",
        "unit": "days"
      }
    ]
  },
  "discount-face": {
    "id": "discount-face",
    "expression": "F = P/(1 − d_r t_y)",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "d_r",
        "meaning": "Annual simple discount rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "benefit-decrease": {
    "id": "benefit-decrease",
    "expression": "δ = (B − C)/B",
    "symbols": [
      {
        "symbol": "δ",
        "meaning": "Allowable proportional decrease",
        "unit": "dimensionless"
      },
      {
        "symbol": "B",
        "meaning": "Present worth of benefits",
        "unit": "₱"
      },
      {
        "symbol": "C",
        "meaning": "Present worth of costs",
        "unit": "₱"
      }
    ]
  },
  "after-tax": {
    "id": "after-tax",
    "expression": "CF = S_a(1 − T_r) + D T_r",
    "symbols": [
      {
        "symbol": "CF",
        "meaning": "After-tax annual cash flow",
        "unit": "₱/year"
      },
      {
        "symbol": "S_a",
        "meaning": "Annual savings before depreciation and tax",
        "unit": "₱/year"
      },
      {
        "symbol": "T_r",
        "meaning": "Tax rate",
        "unit": "dimensionless"
      },
      {
        "symbol": "D",
        "meaning": "Annual depreciation",
        "unit": "₱/year"
      }
    ]
  },
  "cost-crossover": {
    "id": "cost-crossover",
    "expression": "q = (FC₁ − FC₂)/(c₂ − c₁)",
    "symbols": [
      {
        "symbol": "q",
        "meaning": "Annual output at equal cost",
        "unit": "units/year"
      },
      {
        "symbol": "FC₁",
        "meaning": "Alternative 1 annual fixed cost",
        "unit": "₱/year"
      },
      {
        "symbol": "FC₂",
        "meaning": "Alternative 2 annual fixed cost",
        "unit": "₱/year"
      },
      {
        "symbol": "c₁",
        "meaning": "Alternative 1 variable unit cost",
        "unit": "₱/unit"
      },
      {
        "symbol": "c₂",
        "meaning": "Alternative 2 variable unit cost",
        "unit": "₱/unit"
      }
    ]
  },
  "gradient-annual": {
    "id": "gradient-annual",
    "expression": "A = G[1/i − n/((1 + i)ⁿ − 1)]",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "G",
        "meaning": "Arithmetic increase per period",
        "unit": "₱/period"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "capital-recovery": {
    "id": "capital-recovery",
    "expression": "CR = (P − S)i(1 + i)ⁿ/[(1 + i)ⁿ − 1] + Si",
    "symbols": [
      {
        "symbol": "CR",
        "meaning": "Annual capital recovery",
        "unit": "₱/period"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "S",
        "meaning": "Salvage value",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "nominal-equivalent": {
    "id": "nominal-equivalent",
    "expression": "j₂ = m₂[(1 + j₁/m₁)^(m₁/m₂) − 1]",
    "symbols": [
      {
        "symbol": "j₂",
        "meaning": "Equivalent nominal annual rate",
        "unit": "dimensionless"
      },
      {
        "symbol": "m₂",
        "meaning": "Target compounding frequency",
        "unit": "periods/year"
      },
      {
        "symbol": "j₁",
        "meaning": "Original nominal annual rate",
        "unit": "dimensionless"
      },
      {
        "symbol": "m₁",
        "meaning": "Original compounding frequency",
        "unit": "periods/year"
      }
    ]
  },
  "npv": {
    "id": "npv",
    "expression": "NPV = −P + A[1 − (1 + i)⁻ⁿ]/i + S/(1 + i)ⁿ",
    "symbols": [
      {
        "symbol": "NPV",
        "meaning": "Net present value",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "S",
        "meaning": "Salvage value",
        "unit": "₱"
      }
    ]
  },
  "discounted-payback": {
    "id": "discounted-payback",
    "expression": "n = −ln(1 − Pi/A)/ln(1 + i)",
    "symbols": [
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      }
    ]
  },
  "energy-savings": {
    "id": "energy-savings",
    "expression": "S_a = ΔP h_d d_y u c_e",
    "symbols": [
      {
        "symbol": "S_a",
        "meaning": "Annual electricity savings",
        "unit": "₱/year"
      },
      {
        "symbol": "ΔP",
        "meaning": "Power reduction",
        "unit": "kW"
      },
      {
        "symbol": "h_d",
        "meaning": "Operating hours per day",
        "unit": "h/day"
      },
      {
        "symbol": "d_y",
        "meaning": "Operating days per year",
        "unit": "days/year"
      },
      {
        "symbol": "u",
        "meaning": "Average utilization",
        "unit": "dimensionless"
      },
      {
        "symbol": "c_e",
        "meaning": "Energy tariff",
        "unit": "₱/kWh"
      }
    ]
  },
  "expected-value": {
    "id": "expected-value",
    "expression": "EV = Σ p_k X_k",
    "symbols": [
      {
        "symbol": "EV",
        "meaning": "Expected monetary value",
        "unit": "₱"
      },
      {
        "symbol": "p_k",
        "meaning": "Probability of outcome k",
        "unit": "dimensionless"
      },
      {
        "symbol": "X_k",
        "meaning": "Monetary payoff of outcome k",
        "unit": "₱"
      }
    ]
  },
  "expected-difference": {
    "id": "expected-difference",
    "expression": "ΔEV = EV_A − EV_B",
    "symbols": [
      {
        "symbol": "ΔEV",
        "meaning": "Difference in expected payoff",
        "unit": "₱"
      },
      {
        "symbol": "EV_A",
        "meaning": "Higher expected payoff",
        "unit": "₱"
      },
      {
        "symbol": "EV_B",
        "meaning": "Lower expected payoff",
        "unit": "₱"
      }
    ]
  },
  "expected-net": {
    "id": "expected-net",
    "expression": "ENPV = EV − P",
    "symbols": [
      {
        "symbol": "ENPV",
        "meaning": "Expected net payoff",
        "unit": "₱"
      },
      {
        "symbol": "EV",
        "meaning": "Expected receipts",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      }
    ]
  },
  "continuous-rate": {
    "id": "continuous-rate",
    "expression": "i = eʲ − 1",
    "symbols": [
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "e",
        "meaning": "Euler constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "j",
        "meaning": "Nominal annual interest rate",
        "unit": "dimensionless"
      }
    ]
  },
  "ddb": {
    "id": "ddb",
    "expression": "D_k = (2/N)P(1 − 2/N)^(k − 1)",
    "symbols": [
      {
        "symbol": "D_k",
        "meaning": "Depreciation during year k",
        "unit": "₱/year"
      },
      {
        "symbol": "N",
        "meaning": "Asset life",
        "unit": "years"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "k",
        "meaning": "Depreciation year number",
        "unit": "years"
      }
    ]
  },
  "annuity-due": {
    "id": "annuity-due",
    "expression": "P = A(1 + i)[1 − (1 + i)⁻ⁿ]/i",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "deferred-present": {
    "id": "deferred-present",
    "expression": "P₀ = P_t/(1 + i)ᵗ",
    "symbols": [
      {
        "symbol": "P₀",
        "meaning": "Value at time zero",
        "unit": "₱"
      },
      {
        "symbol": "P_t",
        "meaning": "Series value one period before first receipt",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "t",
        "meaning": "Period index",
        "unit": "periods"
      }
    ]
  },
  "sum-funds": {
    "id": "sum-funds",
    "expression": "F_total = F_principal + F_annuity",
    "symbols": [
      {
        "symbol": "F_total",
        "meaning": "Total accumulated value",
        "unit": "₱"
      },
      {
        "symbol": "F_principal",
        "meaning": "Accumulated initial deposit",
        "unit": "₱"
      },
      {
        "symbol": "F_annuity",
        "meaning": "Accumulated periodic deposits",
        "unit": "₱"
      }
    ]
  },
  "principal-first": {
    "id": "principal-first",
    "expression": "PR₁ = A − Pi",
    "symbols": [
      {
        "symbol": "PR₁",
        "meaning": "Principal in first payment",
        "unit": "₱"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      }
    ]
  },
  "loan-balance": {
    "id": "loan-balance",
    "expression": "B_n = P(1 + i)ⁿ − A[(1 + i)ⁿ − 1]/i",
    "symbols": [
      {
        "symbol": "B_n",
        "meaning": "Balance immediately after payment n",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      }
    ]
  },
  "coupon": {
    "id": "coupon",
    "expression": "A = F c",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "c",
        "meaning": "Coupon rate per period",
        "unit": "dimensionless"
      }
    ]
  },
  "bond-price": {
    "id": "bond-price",
    "expression": "P = A[1 − (1 + i)⁻ⁿ]/i + F/(1 + i)ⁿ",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      }
    ]
  },
  "irr-single": {
    "id": "irr-single",
    "expression": "i = (F/P)^(1/n) − 1",
    "symbols": [
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "syd": {
    "id": "syd",
    "expression": "D_k = (P − S)(N − k + 1)/[N(N + 1)/2]",
    "symbols": [
      {
        "symbol": "D_k",
        "meaning": "Depreciation during year k",
        "unit": "₱/year"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "S",
        "meaning": "Salvage value",
        "unit": "₱"
      },
      {
        "symbol": "N",
        "meaning": "Asset life",
        "unit": "years"
      },
      {
        "symbol": "k",
        "meaning": "Depreciation year number",
        "unit": "years"
      }
    ]
  },
  "sinking-depreciation": {
    "id": "sinking-depreciation",
    "expression": "D = (P − S)i/[(1 + i)ᴺ − 1]",
    "symbols": [
      {
        "symbol": "D",
        "meaning": "Annual depreciation",
        "unit": "₱/year"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "S",
        "meaning": "Salvage value",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "N",
        "meaning": "Asset life",
        "unit": "years"
      }
    ]
  },
  "annual-cost": {
    "id": "annual-cost",
    "expression": "EUAC = CR + O",
    "symbols": [
      {
        "symbol": "EUAC",
        "meaning": "Equivalent uniform annual cost",
        "unit": "₱/year"
      },
      {
        "symbol": "CR",
        "meaning": "Annual capital recovery",
        "unit": "₱/year"
      },
      {
        "symbol": "O",
        "meaning": "Annual operating expenses",
        "unit": "₱/year"
      }
    ]
  },
  "capitalized": {
    "id": "capitalized",
    "expression": "CC = P + O/i + R_c/[(1 + i)ⁿ − 1]",
    "symbols": [
      {
        "symbol": "CC",
        "meaning": "Capitalized cost",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "O",
        "meaning": "Annual perpetual maintenance",
        "unit": "₱/year"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "R_c",
        "meaning": "Recurring overhaul cost",
        "unit": "₱"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "benefit-cost": {
    "id": "benefit-cost",
    "expression": "BCR = B/C",
    "symbols": [
      {
        "symbol": "BCR",
        "meaning": "Conventional benefit-cost ratio",
        "unit": "dimensionless"
      },
      {
        "symbol": "B",
        "meaning": "Present worth of benefits",
        "unit": "₱"
      },
      {
        "symbol": "C",
        "meaning": "Present worth of costs",
        "unit": "₱"
      }
    ]
  },
  "purchase-variance": {
    "id": "purchase-variance",
    "expression": "MPV = Q_p(AP − SP)",
    "symbols": [
      {
        "symbol": "MPV",
        "meaning": "Material purchase price variance",
        "unit": "₱"
      },
      {
        "symbol": "Q_p",
        "meaning": "Quantity purchased",
        "unit": "units"
      },
      {
        "symbol": "AP",
        "meaning": "Actual price",
        "unit": "₱/unit"
      },
      {
        "symbol": "SP",
        "meaning": "Standard price",
        "unit": "₱/unit"
      }
    ]
  },
  "future-factor": {
    "id": "future-factor",
    "expression": "F/P = (1 + i)ⁿ",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "present-factor": {
    "id": "present-factor",
    "expression": "P/F = (1 + i)⁻ⁿ",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "factor-identity": {
    "id": "factor-identity",
    "expression": "(A/P, i, n) = (A/F, i, n) + i",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "straight-line-rate": {
    "id": "straight-line-rate",
    "expression": "r_D = (1 − S/P)/N",
    "symbols": [
      {
        "symbol": "r_D",
        "meaning": "Annual depreciation fraction of original cost",
        "unit": "1/year"
      },
      {
        "symbol": "S",
        "meaning": "Salvage value",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "N",
        "meaning": "Asset life",
        "unit": "years"
      }
    ]
  },
  "normal-stress": {
    "id": "normal-stress",
    "expression": "σ = P/A",
    "symbols": [
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      }
    ]
  },
  "allowable-stress": {
    "id": "allowable-stress",
    "expression": "σ = σ_y/FS",
    "symbols": [
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "σ_y",
        "meaning": "Yield stress",
        "unit": "Pa"
      },
      {
        "symbol": "FS",
        "meaning": "Factor of safety",
        "unit": "dimensionless"
      }
    ]
  },
  "shear-average": {
    "id": "shear-average",
    "expression": "τ = V/(n_s A)",
    "symbols": [
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "V",
        "meaning": "Shear force",
        "unit": "N"
      },
      {
        "symbol": "n_s",
        "meaning": "Number of shear planes",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      }
    ]
  },
  "annulus-area": {
    "id": "annulus-area",
    "expression": "A = π(D² − d²)/4",
    "symbols": [
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      }
    ]
  },
  "polar-solid": {
    "id": "polar-solid",
    "expression": "J = πd⁴/32",
    "symbols": [
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      }
    ]
  },
  "polar-hollow": {
    "id": "polar-hollow",
    "expression": "J = π(D⁴ − d⁴)/32",
    "symbols": [
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      }
    ]
  },
  "polar-modulus": {
    "id": "polar-modulus",
    "expression": "Z_p = J/r_o",
    "symbols": [
      {
        "symbol": "Z_p",
        "meaning": "Polar section modulus",
        "unit": "m³"
      },
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      }
    ]
  },
  "torsion-stress": {
    "id": "torsion-stress",
    "expression": "τ = Tr_o/J",
    "symbols": [
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      },
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      }
    ]
  },
  "solid-torque": {
    "id": "solid-torque",
    "expression": "T = τπd³/16",
    "symbols": [
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      }
    ]
  },
  "solid-torsion": {
    "id": "solid-torsion",
    "expression": "τ = 16T/(πd³)",
    "symbols": [
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      }
    ]
  },
  "power-torque": {
    "id": "power-torque",
    "expression": "P_w = Tω",
    "symbols": [
      {
        "symbol": "P_w",
        "meaning": "Shaft power",
        "unit": "W"
      },
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "ω",
        "meaning": "Angular velocity",
        "unit": "rad/s"
      }
    ]
  },
  "frequency-angular": {
    "id": "frequency-angular",
    "expression": "ω = 2πf",
    "symbols": [
      {
        "symbol": "ω",
        "meaning": "Angular velocity",
        "unit": "rad/s"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "f",
        "meaning": "Rotation frequency",
        "unit": "rev/s"
      }
    ]
  },
  "double-shear-diameter": {
    "id": "double-shear-diameter",
    "expression": "d = √(2V/(πτ))",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "V",
        "meaning": "Shear force",
        "unit": "N"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      }
    ]
  },
  "hollow-inside": {
    "id": "hollow-inside",
    "expression": "d = [D⁴ − 32r_o Z_p/π]^(1/4)",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      },
      {
        "symbol": "Z_p",
        "meaning": "Polar section modulus",
        "unit": "m³"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      }
    ]
  },
  "wall-thickness": {
    "id": "wall-thickness",
    "expression": "t = (D − √(D² − 4P/(πσ)))/2",
    "symbols": [
      {
        "symbol": "t",
        "meaning": "Wall or plate thickness",
        "unit": "m"
      },
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      }
    ]
  },
  "cantilever-end": {
    "id": "cantilever-end",
    "expression": "M = PL",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "hooke": {
    "id": "hooke",
    "expression": "σ = Eε",
    "symbols": [
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "ε",
        "meaning": "Longitudinal strain",
        "unit": "dimensionless"
      }
    ]
  },
  "poisson": {
    "id": "poisson",
    "expression": "ε_lat = −νε",
    "symbols": [
      {
        "symbol": "ε_lat",
        "meaning": "Lateral strain",
        "unit": "dimensionless"
      },
      {
        "symbol": "ν",
        "meaning": "Poisson ratio",
        "unit": "dimensionless"
      },
      {
        "symbol": "ε",
        "meaning": "Longitudinal strain",
        "unit": "dimensionless"
      }
    ]
  },
  "dimension-strain": {
    "id": "dimension-strain",
    "expression": "b_new = b(1 + ε_lat)",
    "symbols": [
      {
        "symbol": "b_new",
        "meaning": "Width under load",
        "unit": "m"
      },
      {
        "symbol": "b",
        "meaning": "Width",
        "unit": "m"
      },
      {
        "symbol": "ε_lat",
        "meaning": "Lateral strain",
        "unit": "dimensionless"
      }
    ]
  },
  "axial-deformation": {
    "id": "axial-deformation",
    "expression": "δ = PL/(AE)",
    "symbols": [
      {
        "symbol": "δ",
        "meaning": "Axial deformation",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      }
    ]
  },
  "series-deformation": {
    "id": "series-deformation",
    "expression": "δ_total = Σ P_k L_k/(A_k E_k)",
    "symbols": [
      {
        "symbol": "δ_total",
        "meaning": "Total series elongation",
        "unit": "m"
      },
      {
        "symbol": "P_k",
        "meaning": "Internal axial load in segment k",
        "unit": "N"
      },
      {
        "symbol": "L_k",
        "meaning": "Segment k length",
        "unit": "m"
      },
      {
        "symbol": "A_k",
        "meaning": "Segment k area",
        "unit": "m²"
      },
      {
        "symbol": "E_k",
        "meaning": "Segment k Young modulus",
        "unit": "Pa"
      }
    ]
  },
  "thermal-strain": {
    "id": "thermal-strain",
    "expression": "ε = αΔT",
    "symbols": [
      {
        "symbol": "ε",
        "meaning": "Longitudinal strain",
        "unit": "dimensionless"
      },
      {
        "symbol": "α",
        "meaning": "Linear thermal expansion coefficient",
        "unit": "1/°C"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature increase",
        "unit": "°C"
      }
    ]
  },
  "restrained-thermal": {
    "id": "restrained-thermal",
    "expression": "P = AEαΔT",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "α",
        "meaning": "Linear thermal expansion coefficient",
        "unit": "1/°C"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature increase",
        "unit": "°C"
      }
    ]
  },
  "material-fraction": {
    "id": "material-fraction",
    "expression": "V_h/V_s = 1 − (r_i/r_o)²",
    "symbols": [
      {
        "symbol": "V_h",
        "meaning": "Hollow shaft material volume",
        "unit": "m³"
      },
      {
        "symbol": "V_s",
        "meaning": "Solid shaft material volume",
        "unit": "m³"
      },
      {
        "symbol": "r_i",
        "meaning": "Inside radius",
        "unit": "m"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      }
    ]
  },
  "ss-uniform-moment": {
    "id": "ss-uniform-moment",
    "expression": "M = wL²/8",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "w",
        "meaning": "Uniform distributed load",
        "unit": "N/m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "axial-stiffness": {
    "id": "axial-stiffness",
    "expression": "k = EA/L",
    "symbols": [
      {
        "symbol": "k",
        "meaning": "Axial stiffness",
        "unit": "N/m"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "strain-deformation": {
    "id": "strain-deformation",
    "expression": "ε = δ/L",
    "symbols": [
      {
        "symbol": "ε",
        "meaning": "Longitudinal strain",
        "unit": "dimensionless"
      },
      {
        "symbol": "δ",
        "meaning": "Axial deformation",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "twist": {
    "id": "twist",
    "expression": "θ = TL/(GJ)",
    "symbols": [
      {
        "symbol": "θ",
        "meaning": "Angle of twist",
        "unit": "rad"
      },
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "G",
        "meaning": "Shear modulus",
        "unit": "Pa"
      },
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      }
    ]
  },
  "rad-deg": {
    "id": "rad-deg",
    "expression": "θ_deg = θ × 180/π",
    "symbols": [
      {
        "symbol": "θ_deg",
        "meaning": "Angle of twist in degrees",
        "unit": "°"
      },
      {
        "symbol": "θ",
        "meaning": "Angle of twist",
        "unit": "rad"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      }
    ]
  },
  "solid-diameter": {
    "id": "solid-diameter",
    "expression": "d = [16T/(πτ)]^(1/3)",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      }
    ]
  },
  "torsional-stiffness": {
    "id": "torsional-stiffness",
    "expression": "k_t = GJ/L",
    "symbols": [
      {
        "symbol": "k_t",
        "meaning": "Torsional stiffness",
        "unit": "N·m/rad"
      },
      {
        "symbol": "G",
        "meaning": "Shear modulus",
        "unit": "Pa"
      },
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "radial-shear": {
    "id": "radial-shear",
    "expression": "τ_i = τ_o(r_i/r_o)",
    "symbols": [
      {
        "symbol": "τ_i",
        "meaning": "Shear stress at inner or specified radius",
        "unit": "Pa"
      },
      {
        "symbol": "τ_o",
        "meaning": "Shear stress at outer radius",
        "unit": "Pa"
      },
      {
        "symbol": "r_i",
        "meaning": "Inside radius",
        "unit": "m"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      }
    ]
  },
  "twist-length-ratio": {
    "id": "twist-length-ratio",
    "expression": "θ₂/θ₁ = L₂/L₁",
    "symbols": [
      {
        "symbol": "θ₂",
        "meaning": "New angle of twist",
        "unit": "rad"
      },
      {
        "symbol": "θ₁",
        "meaning": "Original angle of twist",
        "unit": "rad"
      },
      {
        "symbol": "L₂",
        "meaning": "New shaft length",
        "unit": "m"
      },
      {
        "symbol": "L₁",
        "meaning": "Original shaft length",
        "unit": "m"
      }
    ]
  },
  "ss-point-moment": {
    "id": "ss-point-moment",
    "expression": "M = PL/4",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "bending-stress": {
    "id": "bending-stress",
    "expression": "σ = Mc/I",
    "symbols": [
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "c",
        "meaning": "Extreme fiber distance from neutral axis",
        "unit": "m"
      },
      {
        "symbol": "I",
        "meaning": "Second moment of area about neutral axis",
        "unit": "m⁴"
      }
    ]
  },
  "cantilever-limits": {
    "id": "cantilever-limits",
    "expression": "P = min(σ_c I/(c_c L), σ_t I/(c_t L))",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "σ_c",
        "meaning": "Allowable compression stress magnitude",
        "unit": "Pa"
      },
      {
        "symbol": "I",
        "meaning": "Second moment of area about neutral axis",
        "unit": "m⁴"
      },
      {
        "symbol": "c_c",
        "meaning": "Compression fiber distance",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "σ_t",
        "meaning": "Allowable tensile stress",
        "unit": "Pa"
      },
      {
        "symbol": "c_t",
        "meaning": "Tension fiber distance",
        "unit": "m"
      }
    ]
  },
  "cantilever-combined": {
    "id": "cantilever-combined",
    "expression": "M = wL²/2 + PL",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "w",
        "meaning": "Uniform distributed load",
        "unit": "N/m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      }
    ]
  },
  "thermal-expansion": {
    "id": "thermal-expansion",
    "expression": "δ = αLΔT",
    "symbols": [
      {
        "symbol": "δ",
        "meaning": "Axial deformation",
        "unit": "m"
      },
      {
        "symbol": "α",
        "meaning": "Linear thermal expansion coefficient",
        "unit": "1/°C"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature increase",
        "unit": "°C"
      }
    ]
  },
  "rect-inertia": {
    "id": "rect-inertia",
    "expression": "I = bt³/12",
    "symbols": [
      {
        "symbol": "I",
        "meaning": "Second moment of area about neutral axis",
        "unit": "m⁴"
      },
      {
        "symbol": "b",
        "meaning": "Width",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Wall or plate thickness",
        "unit": "m"
      }
    ]
  },
  "curvature": {
    "id": "curvature",
    "expression": "σ = Ec/R_c",
    "symbols": [
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "c",
        "meaning": "Extreme fiber distance from neutral axis",
        "unit": "m"
      },
      {
        "symbol": "R_c",
        "meaning": "Neutral surface radius of curvature",
        "unit": "m"
      }
    ]
  },
  "self-weight-stress": {
    "id": "self-weight-stress",
    "expression": "σ = P/A + γh",
    "symbols": [
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      },
      {
        "symbol": "γ",
        "meaning": "Material specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "h",
        "meaning": "Length above the section",
        "unit": "m"
      }
    ]
  },
  "flexibility": {
    "id": "flexibility",
    "expression": "f_a = 1/k",
    "symbols": [
      {
        "symbol": "f_a",
        "meaning": "Axial flexibility",
        "unit": "m/N"
      },
      {
        "symbol": "k",
        "meaning": "Axial stiffness",
        "unit": "N/m"
      }
    ]
  },
  "ss-shear": {
    "id": "ss-shear",
    "expression": "V = wL/2 − wx",
    "symbols": [
      {
        "symbol": "V",
        "meaning": "Shear force",
        "unit": "N"
      },
      {
        "symbol": "w",
        "meaning": "Uniform distributed load",
        "unit": "N/m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "x",
        "meaning": "Distance from left support",
        "unit": "m"
      }
    ]
  },
  "stress-extension": {
    "id": "stress-extension",
    "expression": "δ = σL/E",
    "symbols": [
      {
        "symbol": "δ",
        "meaning": "Axial deformation",
        "unit": "m"
      },
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      }
    ]
  },
  "hollow-outside": {
    "id": "hollow-outside",
    "expression": "D = √(d² + 4P/(πσ))",
    "symbols": [
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      }
    ]
  },
  "shear-hooke": {
    "id": "shear-hooke",
    "expression": "γ_s = τ/G",
    "symbols": [
      {
        "symbol": "γ_s",
        "meaning": "Engineering shear strain",
        "unit": "rad"
      },
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "G",
        "meaning": "Shear modulus",
        "unit": "Pa"
      }
    ]
  },
  "cantilever-triangle": {
    "id": "cantilever-triangle",
    "expression": "M = wL²/6",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "w",
        "meaning": "Uniform distributed load",
        "unit": "N/m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "elastic-slope": {
    "id": "elastic-slope",
    "expression": "E = Δσ/Δε",
    "symbols": [
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "Δσ",
        "meaning": "Stress increase within elastic region",
        "unit": "Pa"
      },
      {
        "symbol": "Δε",
        "meaning": "Corresponding strain increase",
        "unit": "dimensionless"
      }
    ]
  },
  "inner-wall-diameter": {
    "id": "inner-wall-diameter",
    "expression": "d = D − 2t",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Wall or plate thickness",
        "unit": "m"
      }
    ]
  },
  "punching": {
    "id": "punching",
    "expression": "P = τπdt",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "τ",
        "meaning": "Shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Wall or plate thickness",
        "unit": "m"
      }
    ]
  },
  "twist-rate": {
    "id": "twist-rate",
    "expression": "θ/L = T/(GJ)",
    "symbols": [
      {
        "symbol": "θ",
        "meaning": "Angle of twist",
        "unit": "rad"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "T",
        "meaning": "Torque",
        "unit": "N·m"
      },
      {
        "symbol": "G",
        "meaning": "Shear modulus",
        "unit": "Pa"
      },
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      }
    ]
  },
  "diameter-stress-ratio": {
    "id": "diameter-stress-ratio",
    "expression": "τ₂/τ₁ = (d₁/d₂)³",
    "symbols": [
      {
        "symbol": "τ₂",
        "meaning": "New maximum shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "τ₁",
        "meaning": "Original maximum shear stress",
        "unit": "Pa"
      },
      {
        "symbol": "d₁",
        "meaning": "Original solid diameter",
        "unit": "m"
      },
      {
        "symbol": "d₂",
        "meaning": "New solid diameter",
        "unit": "m"
      }
    ]
  },
  "rect-thickness": {
    "id": "rect-thickness",
    "expression": "t = √(6M/(bσ))",
    "symbols": [
      {
        "symbol": "t",
        "meaning": "Wall or plate thickness",
        "unit": "m"
      },
      {
        "symbol": "M",
        "meaning": "Bending moment",
        "unit": "N·m"
      },
      {
        "symbol": "b",
        "meaning": "Width",
        "unit": "m"
      },
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      }
    ]
  },
  "axial-limits": {
    "id": "axial-limits",
    "expression": "P = min(σA, δAE/L)",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "σ",
        "meaning": "Normal stress",
        "unit": "Pa"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area",
        "unit": "m²"
      },
      {
        "symbol": "δ",
        "meaning": "Axial deformation",
        "unit": "m"
      },
      {
        "symbol": "E",
        "meaning": "Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "ultimate-diameter": {
    "id": "ultimate-diameter",
    "expression": "d = √(4P FS/(πσ_u))",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "FS",
        "meaning": "Factor of safety",
        "unit": "dimensionless"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "σ_u",
        "meaning": "Ultimate tensile strength",
        "unit": "Pa"
      }
    ]
  },
  "bearing": {
    "id": "bearing",
    "expression": "σ_b = P/(dt)",
    "symbols": [
      {
        "symbol": "σ_b",
        "meaning": "Plate bearing stress",
        "unit": "Pa"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "d",
        "meaning": "Solid or inner diameter as specified",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Wall or plate thickness",
        "unit": "m"
      }
    ]
  },
  "parallel-bars": {
    "id": "parallel-bars",
    "expression": "δ = PL/(A₁E₁ + A₂E₂)",
    "symbols": [
      {
        "symbol": "δ",
        "meaning": "Axial deformation",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Axial or transverse applied load",
        "unit": "N"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      },
      {
        "symbol": "A₁",
        "meaning": "First bar area",
        "unit": "m²"
      },
      {
        "symbol": "E₁",
        "meaning": "First bar Young modulus",
        "unit": "Pa"
      },
      {
        "symbol": "A₂",
        "meaning": "Second bar area",
        "unit": "m²"
      },
      {
        "symbol": "E₂",
        "meaning": "Second bar Young modulus",
        "unit": "Pa"
      }
    ]
  },
  "torque-fraction": {
    "id": "torque-fraction",
    "expression": "T_h/T_s = 1 − (r_i/r_o)⁴",
    "symbols": [
      {
        "symbol": "T_h",
        "meaning": "Hollow shaft allowable torque",
        "unit": "N·m"
      },
      {
        "symbol": "T_s",
        "meaning": "Solid shaft allowable torque",
        "unit": "N·m"
      },
      {
        "symbol": "r_i",
        "meaning": "Inside radius",
        "unit": "m"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      }
    ]
  },
  "symmetric-reaction": {
    "id": "symmetric-reaction",
    "expression": "R_s = wL/2",
    "symbols": [
      {
        "symbol": "R_s",
        "meaning": "Reaction at either symmetric support",
        "unit": "N"
      },
      {
        "symbol": "w",
        "meaning": "Uniform distributed load",
        "unit": "N/m"
      },
      {
        "symbol": "L",
        "meaning": "Member length or beam span",
        "unit": "m"
      }
    ]
  },
  "overhang-moment": {
    "id": "overhang-moment",
    "expression": "M_x = R_s(x − a) − wx²/2",
    "symbols": [
      {
        "symbol": "M_x",
        "meaning": "Bending moment at section x",
        "unit": "N·m"
      },
      {
        "symbol": "R_s",
        "meaning": "Left support reaction",
        "unit": "N"
      },
      {
        "symbol": "x",
        "meaning": "Section position from beam left end",
        "unit": "m"
      },
      {
        "symbol": "a",
        "meaning": "Left support offset from left end",
        "unit": "m"
      },
      {
        "symbol": "w",
        "meaning": "Uniform distributed load",
        "unit": "N/m"
      }
    ]
  },
  "heated-hole": {
    "id": "heated-hole",
    "expression": "T_final = T_initial + (D_req/D_initial − 1)/α",
    "symbols": [
      {
        "symbol": "T_final",
        "meaning": "Required plate temperature",
        "unit": "°C"
      },
      {
        "symbol": "T_initial",
        "meaning": "Initial plate temperature",
        "unit": "°C"
      },
      {
        "symbol": "D_req",
        "meaning": "Required hole diameter",
        "unit": "m"
      },
      {
        "symbol": "D_initial",
        "meaning": "Initial hole diameter",
        "unit": "m"
      },
      {
        "symbol": "α",
        "meaning": "Linear thermal expansion coefficient",
        "unit": "1/°C"
      }
    ]
  },
  "compound-periods": {
    "id": "compound-periods",
    "expression": "n = mt_y",
    "symbols": [
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "m",
        "meaning": "Compounding periods per year",
        "unit": "periods/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "exact-days": {
    "id": "exact-days",
    "expression": "t_y = d_days/365",
    "symbols": [
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      },
      {
        "symbol": "d_days",
        "meaning": "Actual elapsed days",
        "unit": "days"
      }
    ]
  },
  "continuous-future": {
    "id": "continuous-future",
    "expression": "F = P e^(rt_y)",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "e",
        "meaning": "Euler constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "continuous-present": {
    "id": "continuous-present",
    "expression": "P = F e^(−rt_y)",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "e",
        "meaning": "Euler constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "interest-net": {
    "id": "interest-net",
    "expression": "I_net = Prt_y(1 − T_r)",
    "symbols": [
      {
        "symbol": "I_net",
        "meaning": "Net interest after tax",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      },
      {
        "symbol": "T_r",
        "meaning": "Withholding tax rate",
        "unit": "dimensionless"
      }
    ]
  },
  "cycle-time": {
    "id": "cycle-time",
    "expression": "t_unit = H_available/Q_demand",
    "symbols": [
      {
        "symbol": "t_unit",
        "meaning": "Maximum production time per unit",
        "unit": "h/unit"
      },
      {
        "symbol": "H_available",
        "meaning": "Available weekly production time",
        "unit": "h/week"
      },
      {
        "symbol": "Q_demand",
        "meaning": "Weekly demand",
        "unit": "units/week"
      }
    ]
  },
  "real-future": {
    "id": "real-future",
    "expression": "F_real = P[(1 + i)/(1 + f_inf)]ⁿ",
    "symbols": [
      {
        "symbol": "F_real",
        "meaning": "Future purchasing power in base-year currency",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "f_inf",
        "meaning": "Inflation rate per year",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "effective-nominal": {
    "id": "effective-nominal",
    "expression": "i_eff = (1 + j/m)ᵐ − 1",
    "symbols": [
      {
        "symbol": "i_eff",
        "meaning": "Effective annual interest rate",
        "unit": "dimensionless"
      },
      {
        "symbol": "j",
        "meaning": "Nominal annual interest rate",
        "unit": "dimensionless"
      },
      {
        "symbol": "m",
        "meaning": "Compounding periods per year",
        "unit": "periods/year"
      }
    ]
  },
  "break-even-whole": {
    "id": "break-even-whole",
    "expression": "Q_min = ceil(FC/(p_u − v_u))",
    "symbols": [
      {
        "symbol": "Q_min",
        "meaning": "Minimum whole units sold per month",
        "unit": "units/month"
      },
      {
        "symbol": "FC",
        "meaning": "Monthly fixed cost",
        "unit": "₱/month"
      },
      {
        "symbol": "p_u",
        "meaning": "Selling price per unit",
        "unit": "₱/unit"
      },
      {
        "symbol": "v_u",
        "meaning": "Total variable cost per unit",
        "unit": "₱/unit"
      }
    ]
  },
  "continuous-time": {
    "id": "continuous-time",
    "expression": "t_y = ln(F/P)/r",
    "symbols": [
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      }
    ]
  },
  "annuity-time": {
    "id": "annuity-time",
    "expression": "n = ln(1 + Fi/A)/ln(1 + i)",
    "symbols": [
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      }
    ]
  },
  "tax-margin": {
    "id": "tax-margin",
    "expression": "m_net = (m_gross − m_op)(1 − T_r)",
    "symbols": [
      {
        "symbol": "m_net",
        "meaning": "After-tax profit fraction of sales",
        "unit": "dimensionless"
      },
      {
        "symbol": "m_gross",
        "meaning": "Gross profit fraction of sales",
        "unit": "dimensionless"
      },
      {
        "symbol": "m_op",
        "meaning": "Operating cost fraction of sales",
        "unit": "dimensionless"
      },
      {
        "symbol": "T_r",
        "meaning": "Tax rate",
        "unit": "dimensionless"
      }
    ]
  },
  "future-difference": {
    "id": "future-difference",
    "expression": "ΔF = F_continuous − F_discrete",
    "symbols": [
      {
        "symbol": "ΔF",
        "meaning": "Difference in accumulated amounts",
        "unit": "₱"
      },
      {
        "symbol": "F_continuous",
        "meaning": "Continuously compounded amount",
        "unit": "₱"
      },
      {
        "symbol": "F_discrete",
        "meaning": "Discretely compounded amount",
        "unit": "₱"
      }
    ]
  },
  "cashflow-future": {
    "id": "cashflow-future",
    "expression": "F = Σ C_t(1 + i)^(n − t)",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "C_t",
        "meaning": "Cash flow at end of period t",
        "unit": "₱"
      },
      {
        "symbol": "i",
        "meaning": "Effective interest rate per period",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      },
      {
        "symbol": "t",
        "meaning": "Period index",
        "unit": "periods"
      }
    ]
  },
  "discount-proceeds": {
    "id": "discount-proceeds",
    "expression": "P = F(1 − rt_y)",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "approx-bond-yield": {
    "id": "approx-bond-yield",
    "expression": "y = [A + (F − P)/n]/[(F + P)/2]",
    "symbols": [
      {
        "symbol": "y",
        "meaning": "Approximate annual bond yield",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "meaning": "Uniform end-of-period payment",
        "unit": "₱/period"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "n",
        "meaning": "Number of periods",
        "unit": "periods"
      }
    ]
  },
  "simple-payback": {
    "id": "simple-payback",
    "expression": "n_months = ceil(P/S_month)",
    "symbols": [
      {
        "symbol": "n_months",
        "meaning": "Complete months to recover investment",
        "unit": "months"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "S_month",
        "meaning": "Monthly operating savings",
        "unit": "₱/month"
      }
    ]
  },
  "simple-future": {
    "id": "simple-future",
    "expression": "F = P(1 + rt_y)",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      },
      {
        "symbol": "r",
        "meaning": "Annual simple interest rate",
        "unit": "1/year"
      },
      {
        "symbol": "t_y",
        "meaning": "Elapsed time",
        "unit": "years"
      }
    ]
  },
  "depletion": {
    "id": "depletion",
    "expression": "D_dep = C_total Q_used/Q_total",
    "symbols": [
      {
        "symbol": "D_dep",
        "meaning": "Annual depletion charge",
        "unit": "currency"
      },
      {
        "symbol": "C_total",
        "meaning": "Depletable original cost less residual value",
        "unit": "currency"
      },
      {
        "symbol": "Q_used",
        "meaning": "Units extracted during year",
        "unit": "barrels"
      },
      {
        "symbol": "Q_total",
        "meaning": "Estimated total recoverable reserves",
        "unit": "barrels"
      }
    ]
  },
  "discount-amount": {
    "id": "discount-amount",
    "expression": "D_discount = F − P",
    "symbols": [
      {
        "symbol": "D_discount",
        "meaning": "Discount amount",
        "unit": "₱"
      },
      {
        "symbol": "F",
        "meaning": "Future amount",
        "unit": "₱"
      },
      {
        "symbol": "P",
        "meaning": "Present principal or initial cost",
        "unit": "₱"
      }
    ]
  },
  "alternative-savings": {
    "id": "alternative-savings",
    "expression": "S_cost = P_A − P_B",
    "symbols": [
      {
        "symbol": "S_cost",
        "meaning": "Present cost savings of alternative B",
        "unit": "₱"
      },
      {
        "symbol": "P_A",
        "meaning": "Present cost of alternative A",
        "unit": "₱"
      },
      {
        "symbol": "P_B",
        "meaning": "Present cost of alternative B",
        "unit": "₱"
      }
    ]
  },
  "syd-total": {
    "id": "syd-total",
    "expression": "D_total = Σ D_k",
    "symbols": [
      {
        "symbol": "D_total",
        "meaning": "Cumulative depreciation over selected years",
        "unit": "₱"
      },
      {
        "symbol": "D_k",
        "meaning": "Depreciation in year k",
        "unit": "₱"
      }
    ]
  },
  "syd-life-limit": {
    "id": "syd-life-limit",
    "expression": "2/(N + 1) ≤ r_limit",
    "symbols": [
      {
        "symbol": "N",
        "meaning": "Asset life",
        "unit": "years"
      },
      {
        "symbol": "r_limit",
        "meaning": "Maximum first-year fraction of original cost for zero salvage",
        "unit": "dimensionless"
      }
    ]
  },
  "fahrenheit-kelvin": {
    "id": "fahrenheit-kelvin",
    "expression": "T = (T_F + 459.67) × 5/9",
    "symbols": [
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_F",
        "meaning": "Temperature in Fahrenheit",
        "unit": "°F"
      }
    ]
  },
  "polar-radii": {
    "id": "polar-radii",
    "expression": "J = π(r_o⁴ − r_i⁴)/2",
    "symbols": [
      {
        "symbol": "J",
        "meaning": "Polar second moment of area",
        "unit": "m⁴"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      },
      {
        "symbol": "r_i",
        "meaning": "Inside radius",
        "unit": "m"
      }
    ]
  },
  "outer-radius": {
    "id": "outer-radius",
    "expression": "r_o = D/2",
    "symbols": [
      {
        "symbol": "r_o",
        "meaning": "Outside radius",
        "unit": "m"
      },
      {
        "symbol": "D",
        "meaning": "Outside diameter",
        "unit": "m"
      }
    ]
  },
  "midplane-fiber": {
    "id": "midplane-fiber",
    "expression": "c = t/2",
    "symbols": [
      {
        "symbol": "c",
        "meaning": "Extreme fiber distance from neutral surface",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Plate or strip thickness",
        "unit": "m"
      }
    ]
  },
  "installation-crossover": {
    "id": "installation-crossover",
    "expression": "L = n_conn(c_e − c_t)/(u_t − u_e)",
    "symbols": [
      {
        "symbol": "L",
        "meaning": "Cable length at equal installation cost",
        "unit": "ft"
      },
      {
        "symbol": "n_conn",
        "meaning": "Number of soldered connections",
        "unit": "connections"
      },
      {
        "symbol": "c_e",
        "meaning": "Enameled-wire soldering cost",
        "unit": "₱/connection"
      },
      {
        "symbol": "c_t",
        "meaning": "Tinned-wire soldering cost",
        "unit": "₱/connection"
      },
      {
        "symbol": "u_e",
        "meaning": "Enameled-wire cable cost",
        "unit": "₱/ft"
      },
      {
        "symbol": "u_t",
        "meaning": "Tinned-wire cable cost",
        "unit": "₱/ft"
      }
    ]
  },
  "closed-specific-pressure": {
    "id": "closed-specific-pressure",
    "expression": "p = p₀ + γh",
    "symbols": [
      {
        "symbol": "p",
        "meaning": "Bottom pressure",
        "unit": "Pa"
      },
      {
        "symbol": "p₀",
        "meaning": "Gas pressure above liquid",
        "unit": "Pa"
      },
      {
        "symbol": "γ",
        "meaning": "Liquid specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "h",
        "meaning": "Liquid depth",
        "unit": "m"
      }
    ]
  },
  "layered-specific-pressure": {
    "id": "layered-specific-pressure",
    "expression": "p = p₀ + γ₁h₁ + γ₂h₂",
    "symbols": [
      {
        "symbol": "p",
        "meaning": "Bottom pressure",
        "unit": "Pa"
      },
      {
        "symbol": "p₀",
        "meaning": "Pressure above top liquid",
        "unit": "Pa"
      },
      {
        "symbol": "γ₁",
        "meaning": "Top liquid specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "h₁",
        "meaning": "Top liquid depth",
        "unit": "m"
      },
      {
        "symbol": "γ₂",
        "meaning": "Bottom liquid specific weight",
        "unit": "N/m³"
      },
      {
        "symbol": "h₂",
        "meaning": "Bottom liquid depth",
        "unit": "m"
      }
    ]
  },
  "moles-mass": {
    "id": "moles-mass",
    "expression": "n = m/M",
    "symbols": [
      {
        "symbol": "n",
        "meaning": "Amount of substance",
        "unit": "mol"
      },
      {
        "symbol": "m",
        "meaning": "Solute or gas mass",
        "unit": "g"
      },
      {
        "symbol": "M",
        "meaning": "Molar mass",
        "unit": "g/mol"
      }
    ]
  },
  "particle-count": {
    "id": "particle-count",
    "expression": "N = νnN_A",
    "symbols": [
      {
        "symbol": "N",
        "meaning": "Number of particles",
        "unit": "particles"
      },
      {
        "symbol": "ν",
        "meaning": "Stoichiometric coefficient or atom subscript",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Amount of substance",
        "unit": "mol"
      },
      {
        "symbol": "N_A",
        "meaning": "Avogadro constant",
        "unit": "1/mol"
      }
    ]
  },
  "molar-mass-sum": {
    "id": "molar-mass-sum",
    "expression": "M = Σ ν_i M_i",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "ν_i",
        "meaning": "Atom count of element i per formula unit",
        "unit": "dimensionless"
      },
      {
        "symbol": "M_i",
        "meaning": "Atomic molar mass of element i",
        "unit": "g/mol"
      }
    ]
  },
  "dalton": {
    "id": "dalton",
    "expression": "p_i = (n_i/n_total)P",
    "symbols": [
      {
        "symbol": "p_i",
        "meaning": "Partial pressure of species i",
        "unit": "kPa"
      },
      {
        "symbol": "n_i",
        "meaning": "Moles of species i",
        "unit": "mol"
      },
      {
        "symbol": "n_total",
        "meaning": "Total moles in mixture",
        "unit": "mol"
      },
      {
        "symbol": "P",
        "meaning": "Absolute pressure",
        "unit": "kPa"
      }
    ]
  },
  "graham": {
    "id": "graham",
    "expression": "r₁/r₂ = √(M₂/M₁)",
    "symbols": [
      {
        "symbol": "r₁",
        "meaning": "First gas effusion rate",
        "unit": "mol/s"
      },
      {
        "symbol": "r₂",
        "meaning": "Second gas effusion rate",
        "unit": "mol/s"
      },
      {
        "symbol": "M₂",
        "meaning": "Second gas molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "M₁",
        "meaning": "First gas molar mass",
        "unit": "g/mol"
      }
    ]
  },
  "empirical-ratio": {
    "id": "empirical-ratio",
    "expression": "s_i = (w_i/M_i)/min_j(w_j/M_j)",
    "symbols": [
      {
        "symbol": "s_i",
        "meaning": "Empirical subscript ratio for element i",
        "unit": "dimensionless"
      },
      {
        "symbol": "w_i",
        "meaning": "Mass of element i on common sample basis",
        "unit": "g"
      },
      {
        "symbol": "M_i",
        "meaning": "Atomic molar mass of element i",
        "unit": "g/mol"
      }
    ]
  },
  "atom-moles": {
    "id": "atom-moles",
    "expression": "n_element = νn_compound",
    "symbols": [
      {
        "symbol": "n_element",
        "meaning": "Amount of element atoms",
        "unit": "mol"
      },
      {
        "symbol": "ν",
        "meaning": "Stoichiometric coefficient or atom subscript",
        "unit": "dimensionless"
      },
      {
        "symbol": "n_compound",
        "meaning": "Amount of compound",
        "unit": "mol"
      }
    ]
  },
  "molarity": {
    "id": "molarity",
    "expression": "c = n/V",
    "symbols": [
      {
        "symbol": "c",
        "meaning": "Molar concentration",
        "unit": "mol/L"
      },
      {
        "symbol": "n",
        "meaning": "Amount of substance",
        "unit": "mol"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "L"
      }
    ]
  },
  "molar-gas": {
    "id": "molar-gas",
    "expression": "PV = nRT",
    "symbols": [
      {
        "symbol": "P",
        "meaning": "Absolute pressure",
        "unit": "kPa"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "L"
      },
      {
        "symbol": "n",
        "meaning": "Amount of substance",
        "unit": "mol"
      },
      {
        "symbol": "R",
        "meaning": "Universal gas constant in matching pressure-volume units",
        "unit": "kPa·L/(mol·K)"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      }
    ]
  },
  "mean-free-path": {
    "id": "mean-free-path",
    "expression": "λ = k_B T/(√2 πd²P)",
    "symbols": [
      {
        "symbol": "λ",
        "meaning": "Mean free path",
        "unit": "m"
      },
      {
        "symbol": "k_B",
        "meaning": "Boltzmann constant",
        "unit": "J/K"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "d",
        "meaning": "Molecular collision diameter",
        "unit": "m"
      },
      {
        "symbol": "P",
        "meaning": "Absolute gas pressure",
        "unit": "Pa"
      }
    ]
  },
  "molality": {
    "id": "molality",
    "expression": "b = n/m_w",
    "symbols": [
      {
        "symbol": "b",
        "meaning": "Molality",
        "unit": "mol/kg"
      },
      {
        "symbol": "n",
        "meaning": "Amount of substance",
        "unit": "mol"
      },
      {
        "symbol": "m_w",
        "meaning": "Solvent mass",
        "unit": "kg"
      }
    ]
  },
  "oxide-atomic-mass": {
    "id": "oxide-atomic-mass",
    "expression": "M_metal = m_metal M_oxygen/(m_oxide − m_metal)",
    "symbols": [
      {
        "symbol": "M_metal",
        "meaning": "Metal atomic molar mass for a 1:1 oxide",
        "unit": "g/mol"
      },
      {
        "symbol": "m_metal",
        "meaning": "Mass of metal sample",
        "unit": "g"
      },
      {
        "symbol": "M_oxygen",
        "meaning": "Oxygen atomic molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "m_oxide",
        "meaning": "Mass of resulting 1:1 oxide",
        "unit": "g"
      }
    ]
  },
  "equivalent-weight": {
    "id": "equivalent-weight",
    "expression": "EW = M/z",
    "symbols": [
      {
        "symbol": "EW",
        "meaning": "Equivalent mass",
        "unit": "g/equivalent"
      },
      {
        "symbol": "M",
        "meaning": "Molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "z",
        "meaning": "Reaction-dependent equivalents per mole",
        "unit": "equivalents/mol"
      }
    ]
  },
  "normality-mass": {
    "id": "normality-mass",
    "expression": "m = C_N V EW",
    "symbols": [
      {
        "symbol": "m",
        "meaning": "Solute or gas mass",
        "unit": "g"
      },
      {
        "symbol": "C_N",
        "meaning": "Normality",
        "unit": "equivalents/L"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "L"
      },
      {
        "symbol": "EW",
        "meaning": "Equivalent mass",
        "unit": "g/equivalent"
      }
    ]
  },
  "charles": {
    "id": "charles",
    "expression": "V₁/T₁ = V₂/T₂",
    "symbols": [
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "L"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "L"
      },
      {
        "symbol": "T₂",
        "meaning": "Final absolute temperature",
        "unit": "K"
      }
    ]
  },
  "boyle": {
    "id": "boyle",
    "expression": "P₁V₁ = P₂V₂",
    "symbols": [
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "kPa"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "L"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "kPa"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "L"
      }
    ]
  },
  "combined-gas": {
    "id": "combined-gas",
    "expression": "P₁V₁/T₁ = P₂V₂/T₂",
    "symbols": [
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "kPa"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "L"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "kPa"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "L"
      },
      {
        "symbol": "T₂",
        "meaning": "Final absolute temperature",
        "unit": "K"
      }
    ]
  },
  "dilution": {
    "id": "dilution",
    "expression": "c₁V₁ = c₂V₂",
    "symbols": [
      {
        "symbol": "c₁",
        "meaning": "Initial molarity",
        "unit": "mol/L"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "L"
      },
      {
        "symbol": "c₂",
        "meaning": "Final molarity",
        "unit": "mol/L"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "L"
      }
    ]
  },
  "dilution-added": {
    "id": "dilution-added",
    "expression": "V_added = V₂ − V₁",
    "symbols": [
      {
        "symbol": "V_added",
        "meaning": "Volume of water added, assuming additive volumes",
        "unit": "L"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "L"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "L"
      }
    ]
  },
  "mass-percent": {
    "id": "mass-percent",
    "expression": "w_percent = 100 ν M_element/M_compound",
    "symbols": [
      {
        "symbol": "w_percent",
        "meaning": "Mass percent of element",
        "unit": "%"
      },
      {
        "symbol": "ν",
        "meaning": "Stoichiometric coefficient or atom subscript",
        "unit": "dimensionless"
      },
      {
        "symbol": "M_element",
        "meaning": "Atomic molar mass of element",
        "unit": "g/mol"
      },
      {
        "symbol": "M_compound",
        "meaning": "Compound molar mass",
        "unit": "g/mol"
      }
    ]
  },
  "nucleons": {
    "id": "nucleons",
    "expression": "N_neutrons = A_mass − Z",
    "symbols": [
      {
        "symbol": "N_neutrons",
        "meaning": "Number of neutrons",
        "unit": "particles"
      },
      {
        "symbol": "A_mass",
        "meaning": "Mass number",
        "unit": "dimensionless"
      },
      {
        "symbol": "Z",
        "meaning": "Atomic number, equal to proton count",
        "unit": "dimensionless"
      }
    ]
  },
  "gas-stoichiometry": {
    "id": "gas-stoichiometry",
    "expression": "V_a/V_b = ν_a/ν_b",
    "symbols": [
      {
        "symbol": "V_a",
        "meaning": "Gas a volume at common temperature and pressure",
        "unit": "L"
      },
      {
        "symbol": "V_b",
        "meaning": "Gas b volume at common temperature and pressure",
        "unit": "L"
      },
      {
        "symbol": "ν_a",
        "meaning": "Balanced coefficient of gas a",
        "unit": "dimensionless"
      },
      {
        "symbol": "ν_b",
        "meaning": "Balanced coefficient of gas b",
        "unit": "dimensionless"
      }
    ]
  },
  "mole-stoichiometry": {
    "id": "mole-stoichiometry",
    "expression": "n_a/n_b = ν_a/ν_b",
    "symbols": [
      {
        "symbol": "n_a",
        "meaning": "Moles of reactant a",
        "unit": "mol"
      },
      {
        "symbol": "n_b",
        "meaning": "Moles of product b",
        "unit": "mol"
      },
      {
        "symbol": "ν_a",
        "meaning": "Balanced coefficient of species a",
        "unit": "dimensionless"
      },
      {
        "symbol": "ν_b",
        "meaning": "Balanced coefficient of species b",
        "unit": "dimensionless"
      }
    ]
  },
  "mass-balance": {
    "id": "mass-balance",
    "expression": "m_final = m_initial − m_lost",
    "symbols": [
      {
        "symbol": "m_final",
        "meaning": "Remaining gas mass",
        "unit": "g"
      },
      {
        "symbol": "m_initial",
        "meaning": "Initial gas mass",
        "unit": "g"
      },
      {
        "symbol": "m_lost",
        "meaning": "Gas mass lost",
        "unit": "g"
      }
    ]
  },
  "oxidation-balance": {
    "id": "oxidation-balance",
    "expression": "Σ ν_i x_i = q",
    "symbols": [
      {
        "symbol": "ν_i",
        "meaning": "Number of atoms of element i",
        "unit": "dimensionless"
      },
      {
        "symbol": "x_i",
        "meaning": "Oxidation number of element i",
        "unit": "dimensionless"
      },
      {
        "symbol": "q",
        "meaning": "Net ionic charge; zero for a neutral compound",
        "unit": "elementary charges"
      }
    ]
  },
  "mass-density": {
    "id": "mass-density",
    "expression": "ρ = m/V",
    "symbols": [
      {
        "symbol": "ρ",
        "meaning": "Mass density",
        "unit": "g/L"
      },
      {
        "symbol": "m",
        "meaning": "Solute or gas mass",
        "unit": "g"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "L"
      }
    ]
  },
  "molecular-multiple": {
    "id": "molecular-multiple",
    "expression": "k = M_molecular/M_empirical",
    "symbols": [
      {
        "symbol": "k",
        "meaning": "Integer multiplier of empirical subscripts",
        "unit": "dimensionless"
      },
      {
        "symbol": "M_molecular",
        "meaning": "Molecular molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "M_empirical",
        "meaning": "Empirical formula molar mass",
        "unit": "g/mol"
      }
    ]
  },
  "isotope-average": {
    "id": "isotope-average",
    "expression": "A_avg = Σ x_i A_i",
    "symbols": [
      {
        "symbol": "A_avg",
        "meaning": "Average atomic mass",
        "unit": "u"
      },
      {
        "symbol": "x_i",
        "meaning": "Isotope abundance fraction",
        "unit": "dimensionless"
      },
      {
        "symbol": "A_i",
        "meaning": "Isotope atomic mass",
        "unit": "u"
      }
    ]
  },
  "electrolysis": {
    "id": "electrolysis",
    "expression": "m = I t M/(zF_c)",
    "symbols": [
      {
        "symbol": "m",
        "meaning": "Solute or gas mass",
        "unit": "g"
      },
      {
        "symbol": "I",
        "meaning": "Electric current",
        "unit": "A"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "M",
        "meaning": "Molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "z",
        "meaning": "Reaction-dependent equivalents per mole",
        "unit": "equivalents/mol"
      },
      {
        "symbol": "F_c",
        "meaning": "Faraday constant",
        "unit": "C/mol"
      }
    ]
  },
  "faradays": {
    "id": "faradays",
    "expression": "N_F = zn",
    "symbols": [
      {
        "symbol": "N_F",
        "meaning": "Charge in faradays",
        "unit": "mol electrons"
      },
      {
        "symbol": "z",
        "meaning": "Reaction-dependent equivalents per mole",
        "unit": "equivalents/mol"
      },
      {
        "symbol": "n",
        "meaning": "Amount of substance",
        "unit": "mol"
      }
    ]
  },
  "ammonia-equilibrium": {
    "id": "ammonia-equilibrium",
    "expression": "K_c = [NH₃]²/([N₂][H₂]³)",
    "symbols": [
      {
        "symbol": "K_c",
        "meaning": "Concentration equilibrium constant for the stated ammonia reaction",
        "unit": "L²/mol²"
      },
      {
        "symbol": "[NH₃]",
        "meaning": "Equilibrium ammonia concentration",
        "unit": "mol/L"
      },
      {
        "symbol": "[N₂]",
        "meaning": "Equilibrium nitrogen concentration",
        "unit": "mol/L"
      },
      {
        "symbol": "[H₂]",
        "meaning": "Equilibrium hydrogen concentration",
        "unit": "mol/L"
      }
    ]
  },
  "equilibrium-gas": {
    "id": "equilibrium-gas",
    "expression": "K_p = K_c(RT)^Δν",
    "symbols": [
      {
        "symbol": "K_p",
        "meaning": "Pressure equilibrium constant",
        "unit": "reaction-dependent"
      },
      {
        "symbol": "K_c",
        "meaning": "Concentration equilibrium constant",
        "unit": "reaction-dependent"
      },
      {
        "symbol": "R",
        "meaning": "Universal gas constant in matching pressure-volume units",
        "unit": "kPa·L/(mol·K)"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "Δν",
        "meaning": "Gas product coefficients minus gas reactant coefficients",
        "unit": "dimensionless"
      }
    ]
  },
  "neutralization": {
    "id": "neutralization",
    "expression": "z_a c_a V_a = z_b c_b V_b",
    "symbols": [
      {
        "symbol": "z_a",
        "meaning": "Acid equivalents per mole for stated neutralization",
        "unit": "equivalents/mol"
      },
      {
        "symbol": "c_a",
        "meaning": "Acid molarity",
        "unit": "mol/L"
      },
      {
        "symbol": "V_a",
        "meaning": "Acid solution volume",
        "unit": "L"
      },
      {
        "symbol": "z_b",
        "meaning": "Base equivalents per mole",
        "unit": "equivalents/mol"
      },
      {
        "symbol": "c_b",
        "meaning": "Base molarity",
        "unit": "mol/L"
      },
      {
        "symbol": "V_b",
        "meaning": "Base solution volume",
        "unit": "L"
      }
    ]
  },
  "mixture-volume": {
    "id": "mixture-volume",
    "expression": "V_total = V₁ + V₂",
    "symbols": [
      {
        "symbol": "V_total",
        "meaning": "Mixed solution volume, assumed additive",
        "unit": "L"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "L"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "L"
      }
    ]
  },
  "balanced-elements": {
    "id": "balanced-elements",
    "expression": "Σ_reactants ν_j a_ij = Σ_products ν_j a_ij",
    "symbols": [
      {
        "symbol": "ν_j",
        "meaning": "Stoichiometric coefficient of species j",
        "unit": "dimensionless"
      },
      {
        "symbol": "a_ij",
        "meaning": "Atoms of element i in species j",
        "unit": "dimensionless"
      }
    ]
  },
  "coefficient-sum": {
    "id": "coefficient-sum",
    "expression": "S = Σ ν_j",
    "symbols": [
      {
        "symbol": "S",
        "meaning": "Sum of all balanced coefficients including ones",
        "unit": "dimensionless"
      },
      {
        "symbol": "ν_j",
        "meaning": "Balanced coefficient of species j",
        "unit": "dimensionless"
      }
    ]
  },
  "normality": {
    "id": "normality",
    "expression": "C_N = zc",
    "symbols": [
      {
        "symbol": "C_N",
        "meaning": "Normality",
        "unit": "equivalents/L"
      },
      {
        "symbol": "z",
        "meaning": "Reaction-dependent equivalents per mole",
        "unit": "equivalents/mol"
      },
      {
        "symbol": "c",
        "meaning": "Molar concentration",
        "unit": "mol/L"
      }
    ]
  },
  "gas-density": {
    "id": "gas-density",
    "expression": "ρ = PM/(RT)",
    "symbols": [
      {
        "symbol": "ρ",
        "meaning": "Mass density",
        "unit": "g/L"
      },
      {
        "symbol": "P",
        "meaning": "Absolute pressure",
        "unit": "kPa"
      },
      {
        "symbol": "M",
        "meaning": "Molar mass",
        "unit": "g/mol"
      },
      {
        "symbol": "R",
        "meaning": "Universal gas constant in matching pressure-volume units",
        "unit": "kPa·L/(mol·K)"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      }
    ]
  },
  "first-law": {
    "id": "first-law",
    "expression": "ΔU = Q − W",
    "symbols": [
      {
        "symbol": "ΔU",
        "meaning": "Internal energy increase",
        "unit": "J"
      },
      {
        "symbol": "Q",
        "meaning": "Heat supplied to system",
        "unit": "J"
      },
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      }
    ]
  },
  "sensible-heat": {
    "id": "sensible-heat",
    "expression": "Q = mcΔT",
    "symbols": [
      {
        "symbol": "Q",
        "meaning": "Heat supplied to system",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "c",
        "meaning": "Specific heat",
        "unit": "J/(kg·K)"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature increase",
        "unit": "K"
      }
    ]
  },
  "carnot-efficiency": {
    "id": "carnot-efficiency",
    "expression": "η = 1 − T_L/T_H",
    "symbols": [
      {
        "symbol": "η",
        "meaning": "Heat-engine efficiency",
        "unit": "dimensionless"
      },
      {
        "symbol": "T_L",
        "meaning": "Cold reservoir absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_H",
        "meaning": "Hot reservoir absolute temperature",
        "unit": "K"
      }
    ]
  },
  "refrigerator-cop": {
    "id": "refrigerator-cop",
    "expression": "COP_R = Q_L/W_in = Qdot_L/P_in",
    "symbols": [
      {
        "symbol": "COP_R",
        "meaning": "Refrigerator coefficient of performance",
        "unit": "dimensionless"
      },
      {
        "symbol": "Q_L",
        "meaning": "Heat extracted from cold reservoir",
        "unit": "J"
      },
      {
        "symbol": "W_in",
        "meaning": "Work input",
        "unit": "J"
      },
      {
        "symbol": "Qdot_L",
        "meaning": "Cooling rate",
        "unit": "W"
      },
      {
        "symbol": "P_in",
        "meaning": "Input power",
        "unit": "W"
      }
    ]
  },
  "carnot-refrigerator": {
    "id": "carnot-refrigerator",
    "expression": "COP_R = T_L/(T_H − T_L)",
    "symbols": [
      {
        "symbol": "COP_R",
        "meaning": "Refrigerator coefficient of performance",
        "unit": "dimensionless"
      },
      {
        "symbol": "T_L",
        "meaning": "Cold reservoir absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_H",
        "meaning": "Hot reservoir absolute temperature",
        "unit": "K"
      }
    ]
  },
  "carnot-heat-pump": {
    "id": "carnot-heat-pump",
    "expression": "COP_HP = T_H/(T_H − T_L)",
    "symbols": [
      {
        "symbol": "COP_HP",
        "meaning": "Heat-pump coefficient of performance",
        "unit": "dimensionless"
      },
      {
        "symbol": "T_H",
        "meaning": "Hot reservoir absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_L",
        "meaning": "Cold reservoir absolute temperature",
        "unit": "K"
      }
    ]
  },
  "heat-pump-power": {
    "id": "heat-pump-power",
    "expression": "Qdot_H = COP_HP P_in",
    "symbols": [
      {
        "symbol": "Qdot_H",
        "meaning": "Heating rate",
        "unit": "W"
      },
      {
        "symbol": "COP_HP",
        "meaning": "Heat-pump coefficient of performance",
        "unit": "dimensionless"
      },
      {
        "symbol": "P_in",
        "meaning": "Input power",
        "unit": "W"
      }
    ]
  },
  "isothermal-entropy": {
    "id": "isothermal-entropy",
    "expression": "Δs = R_u ln(P₁/P₂)",
    "symbols": [
      {
        "symbol": "Δs",
        "meaning": "Molar entropy increase",
        "unit": "J/(mol·K)"
      },
      {
        "symbol": "R_u",
        "meaning": "Universal molar gas constant",
        "unit": "J/(mol·K)"
      },
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "Pa"
      }
    ]
  },
  "isentropic-temperature": {
    "id": "isentropic-temperature",
    "expression": "T₂/T₁ = (P₂/P₁)^((γ − 1)/γ)",
    "symbols": [
      {
        "symbol": "T₂",
        "meaning": "Final absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "γ",
        "meaning": "Specific heat ratio",
        "unit": "dimensionless"
      }
    ]
  },
  "isothermal-work": {
    "id": "isothermal-work",
    "expression": "W = mR_s T₁ ln(P₁/P₂)",
    "symbols": [
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "R_s",
        "meaning": "Specific gas constant",
        "unit": "J/(kg·K)"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "Pa"
      }
    ]
  },
  "boundary-constant": {
    "id": "boundary-constant",
    "expression": "W = P(V₂ − V₁)",
    "symbols": [
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      },
      {
        "symbol": "P",
        "meaning": "Absolute gas pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "m³"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "m³"
      }
    ]
  },
  "isothermal-pv-work": {
    "id": "isothermal-pv-work",
    "expression": "W = C ln(V₂/V₁)",
    "symbols": [
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      },
      {
        "symbol": "C",
        "meaning": "Pressure-volume product for isothermal process",
        "unit": "J"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "m³"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "m³"
      }
    ]
  },
  "polytropic-work": {
    "id": "polytropic-work",
    "expression": "W = (P₂V₂ − P₁V₁)/(1 − n)",
    "symbols": [
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "m³"
      },
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "m³"
      },
      {
        "symbol": "n",
        "meaning": "Polytropic exponent",
        "unit": "dimensionless"
      }
    ]
  },
  "polytropic-states": {
    "id": "polytropic-states",
    "expression": "P₁V₁ⁿ = P₂V₂ⁿ",
    "symbols": [
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V₁",
        "meaning": "Initial volume",
        "unit": "m³"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "V₂",
        "meaning": "Final volume",
        "unit": "m³"
      },
      {
        "symbol": "n",
        "meaning": "Polytropic exponent",
        "unit": "dimensionless"
      }
    ]
  },
  "quality": {
    "id": "quality",
    "expression": "x = m_v/(m_v + m_l)",
    "symbols": [
      {
        "symbol": "x",
        "meaning": "Steam quality or dryness fraction",
        "unit": "dimensionless"
      },
      {
        "symbol": "m_v",
        "meaning": "Vapor mass",
        "unit": "kg"
      },
      {
        "symbol": "m_l",
        "meaning": "Suspended liquid mass",
        "unit": "kg"
      }
    ]
  },
  "engine-efficiency": {
    "id": "engine-efficiency",
    "expression": "η = W/Q_H",
    "symbols": [
      {
        "symbol": "η",
        "meaning": "Heat-engine efficiency",
        "unit": "dimensionless"
      },
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      },
      {
        "symbol": "Q_H",
        "meaning": "Heat delivered to hot reservoir",
        "unit": "J"
      }
    ]
  },
  "engine-rejection": {
    "id": "engine-rejection",
    "expression": "Q_L = Q_H − W",
    "symbols": [
      {
        "symbol": "Q_L",
        "meaning": "Heat extracted from cold reservoir",
        "unit": "J"
      },
      {
        "symbol": "Q_H",
        "meaning": "Heat delivered to hot reservoir",
        "unit": "J"
      },
      {
        "symbol": "W",
        "meaning": "Work done by system",
        "unit": "J"
      }
    ]
  },
  "cycle-work": {
    "id": "cycle-work",
    "expression": "W_cycle = Σ Q_k",
    "symbols": [
      {
        "symbol": "W_cycle",
        "meaning": "Net cyclic work by system",
        "unit": "J"
      },
      {
        "symbol": "Q_k",
        "meaning": "Signed heat transfer in process k",
        "unit": "J"
      }
    ]
  },
  "calorimetry": {
    "id": "calorimetry",
    "expression": "Σ m_i c_i(T_f − T_i) = 0",
    "symbols": [
      {
        "symbol": "m_i",
        "meaning": "Mass of each participating body",
        "unit": "kg"
      },
      {
        "symbol": "c_i",
        "meaning": "Specific heat of each body",
        "unit": "J/(kg·K)"
      },
      {
        "symbol": "T_f",
        "meaning": "Common final temperature",
        "unit": "K"
      },
      {
        "symbol": "T_i",
        "meaning": "Initial temperature of each body",
        "unit": "K"
      }
    ]
  },
  "tank-mass-ratio": {
    "id": "tank-mass-ratio",
    "expression": "m₂/m₁ = P₂T₁/(P₁T₂)",
    "symbols": [
      {
        "symbol": "m₂",
        "meaning": "Final gas mass",
        "unit": "kg"
      },
      {
        "symbol": "m₁",
        "meaning": "Initial gas mass",
        "unit": "kg"
      },
      {
        "symbol": "P₂",
        "meaning": "Final absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "P₁",
        "meaning": "Initial absolute pressure",
        "unit": "Pa"
      },
      {
        "symbol": "T₂",
        "meaning": "Final absolute temperature",
        "unit": "K"
      }
    ]
  },
  "energy-rate": {
    "id": "energy-rate",
    "expression": "ΔU = (P_in − Qdot_loss)t",
    "symbols": [
      {
        "symbol": "ΔU",
        "meaning": "Internal energy increase",
        "unit": "J"
      },
      {
        "symbol": "P_in",
        "meaning": "Input power",
        "unit": "W"
      },
      {
        "symbol": "Qdot_loss",
        "meaning": "Heat-loss rate to surroundings",
        "unit": "W"
      },
      {
        "symbol": "t",
        "meaning": "Time",
        "unit": "s"
      }
    ]
  },
  "electrical-energy": {
    "id": "electrical-energy",
    "expression": "W_in = V_e I_e t",
    "symbols": [
      {
        "symbol": "W_in",
        "meaning": "Work input",
        "unit": "J"
      },
      {
        "symbol": "V_e",
        "meaning": "Heater voltage",
        "unit": "V"
      },
      {
        "symbol": "I_e",
        "meaning": "Heater current",
        "unit": "A"
      },
      {
        "symbol": "t",
        "meaning": "Time",
        "unit": "s"
      }
    ]
  },
  "temperature-increment": {
    "id": "temperature-increment",
    "expression": "dQ/dT = dU/dT + dW/dT",
    "symbols": [
      {
        "symbol": "dQ/dT",
        "meaning": "Heat supplied per temperature rise",
        "unit": "J/K"
      },
      {
        "symbol": "dU/dT",
        "meaning": "Internal energy increase per temperature rise",
        "unit": "J/K"
      },
      {
        "symbol": "dW/dT",
        "meaning": "Work by system per temperature rise",
        "unit": "J/K"
      }
    ]
  },
  "rankine-fahrenheit": {
    "id": "rankine-fahrenheit",
    "expression": "T_F = T_R − 459.67",
    "symbols": [
      {
        "symbol": "T_F",
        "meaning": "Fahrenheit temperature",
        "unit": "°F"
      },
      {
        "symbol": "T_R",
        "meaning": "Absolute Rankine temperature",
        "unit": "°R"
      }
    ]
  },
  "celsius-fahrenheit": {
    "id": "celsius-fahrenheit",
    "expression": "T_F = (9/5)T_C + 32",
    "symbols": [
      {
        "symbol": "T_F",
        "meaning": "Fahrenheit temperature",
        "unit": "°F"
      },
      {
        "symbol": "T_C",
        "meaning": "Celsius temperature",
        "unit": "°C"
      }
    ]
  },
  "delta-temperature": {
    "id": "delta-temperature",
    "expression": "ΔT_C = (5/9)ΔT_F",
    "symbols": [
      {
        "symbol": "ΔT_C",
        "meaning": "Celsius temperature increase",
        "unit": "°C"
      },
      {
        "symbol": "ΔT_F",
        "meaning": "Fahrenheit temperature increase",
        "unit": "°F"
      }
    ]
  },
  "shm-speed": {
    "id": "shm-speed",
    "expression": "v_max = 2πA/T",
    "symbols": [
      {
        "symbol": "v_max",
        "meaning": "Maximum speed at equilibrium",
        "unit": "m/s"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "A",
        "meaning": "Oscillation amplitude",
        "unit": "m"
      },
      {
        "symbol": "T",
        "meaning": "Oscillation period",
        "unit": "s"
      }
    ]
  },
  "rotational-inertia": {
    "id": "rotational-inertia",
    "expression": "I = mk_g²",
    "symbols": [
      {
        "symbol": "I",
        "meaning": "Mass moment of inertia",
        "unit": "kg·m²"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "k_g",
        "meaning": "Radius of gyration",
        "unit": "m"
      }
    ]
  },
  "rotational-energy": {
    "id": "rotational-energy",
    "expression": "E_k = Iω²/2",
    "symbols": [
      {
        "symbol": "E_k",
        "meaning": "Kinetic energy",
        "unit": "J"
      },
      {
        "symbol": "I",
        "meaning": "Mass moment of inertia",
        "unit": "kg·m²"
      },
      {
        "symbol": "ω",
        "meaning": "Angular velocity",
        "unit": "rad/s"
      }
    ]
  },
  "critical-angle": {
    "id": "critical-angle",
    "expression": "θ_c = asin(n₂/n₁)",
    "symbols": [
      {
        "symbol": "θ_c",
        "meaning": "Critical angle",
        "unit": "rad"
      },
      {
        "symbol": "n₂",
        "meaning": "Transmitted medium refractive index",
        "unit": "dimensionless"
      },
      {
        "symbol": "n₁",
        "meaning": "Incident medium refractive index",
        "unit": "dimensionless"
      }
    ]
  },
  "snell": {
    "id": "snell",
    "expression": "n₁ sin θ₁ = n₂ sin θ₂",
    "symbols": [
      {
        "symbol": "n₁",
        "meaning": "Incident medium refractive index",
        "unit": "dimensionless"
      },
      {
        "symbol": "θ₁",
        "meaning": "Angle of incidence from normal",
        "unit": "rad"
      },
      {
        "symbol": "n₂",
        "meaning": "Transmitted medium refractive index",
        "unit": "dimensionless"
      },
      {
        "symbol": "θ₂",
        "meaning": "Angle of refraction from normal",
        "unit": "rad"
      }
    ]
  },
  "moment-equilibrium": {
    "id": "moment-equilibrium",
    "expression": "Σ F_y = 0; Σ M_support = 0",
    "symbols": [
      {
        "symbol": "F_y",
        "meaning": "Signed vertical force component",
        "unit": "N"
      },
      {
        "symbol": "M_support",
        "meaning": "Signed moment about chosen support",
        "unit": "N·m"
      }
    ]
  },
  "constant-distance": {
    "id": "constant-distance",
    "expression": "d = (v₀ + v_f)t/2",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Distance travelled",
        "unit": "m"
      },
      {
        "symbol": "v₀",
        "meaning": "Initial velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v_f",
        "meaning": "Final velocity",
        "unit": "m/s"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      }
    ]
  },
  "wheel-turns": {
    "id": "wheel-turns",
    "expression": "N_turns = d/(2πr)",
    "symbols": [
      {
        "symbol": "N_turns",
        "meaning": "Number of wheel revolutions",
        "unit": "revolutions"
      },
      {
        "symbol": "d",
        "meaning": "Distance travelled",
        "unit": "m"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "r",
        "meaning": "Radius",
        "unit": "m"
      }
    ]
  },
  "fourier-rate": {
    "id": "fourier-rate",
    "expression": "Qdot = k_t A_s ΔT/δ",
    "symbols": [
      {
        "symbol": "Qdot",
        "meaning": "Heat flow rate",
        "unit": "W"
      },
      {
        "symbol": "k_t",
        "meaning": "Thermal conductivity",
        "unit": "W/(m·K)"
      },
      {
        "symbol": "A_s",
        "meaning": "Heat-transfer area",
        "unit": "m²"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature difference",
        "unit": "K"
      },
      {
        "symbol": "δ",
        "meaning": "Material thickness",
        "unit": "m"
      }
    ]
  },
  "fourier-heat": {
    "id": "fourier-heat",
    "expression": "Q = k_t A_s ΔT t/δ",
    "symbols": [
      {
        "symbol": "Q",
        "meaning": "Heat transferred",
        "unit": "J"
      },
      {
        "symbol": "k_t",
        "meaning": "Thermal conductivity",
        "unit": "W/(m·K)"
      },
      {
        "symbol": "A_s",
        "meaning": "Heat-transfer area",
        "unit": "m²"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature difference",
        "unit": "K"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "δ",
        "meaning": "Material thickness",
        "unit": "m"
      }
    ]
  },
  "fourier-flux": {
    "id": "fourier-flux",
    "expression": "q_flux = k_t ΔT/δ",
    "symbols": [
      {
        "symbol": "q_flux",
        "meaning": "Heat flux",
        "unit": "W/m²"
      },
      {
        "symbol": "k_t",
        "meaning": "Thermal conductivity",
        "unit": "W/(m·K)"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature difference",
        "unit": "K"
      },
      {
        "symbol": "δ",
        "meaning": "Material thickness",
        "unit": "m"
      }
    ]
  },
  "spring-energy": {
    "id": "spring-energy",
    "expression": "E_s = F x/2",
    "symbols": [
      {
        "symbol": "E_s",
        "meaning": "Elastic spring energy",
        "unit": "J"
      },
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "x",
        "meaning": "Extension from unstretched state",
        "unit": "m"
      }
    ]
  },
  "potential-work": {
    "id": "potential-work",
    "expression": "W_lift = Σ W_i Δh_i",
    "symbols": [
      {
        "symbol": "W_lift",
        "meaning": "Work against gravity",
        "unit": "J"
      },
      {
        "symbol": "W_i",
        "meaning": "Weight of component i",
        "unit": "N"
      },
      {
        "symbol": "Δh_i",
        "meaning": "Rise of its center of gravity",
        "unit": "m"
      }
    ]
  },
  "vertical-projectile": {
    "id": "vertical-projectile",
    "expression": "h = v sin θ t + gt²/2",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Height or sag",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "θ",
        "meaning": "Launch angle below horizontal",
        "unit": "rad"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "radiation": {
    "id": "radiation",
    "expression": "Qdot = εσ_SB A_s T_abs⁴",
    "symbols": [
      {
        "symbol": "Qdot",
        "meaning": "Heat flow rate",
        "unit": "W"
      },
      {
        "symbol": "ε",
        "meaning": "Surface emissivity",
        "unit": "dimensionless"
      },
      {
        "symbol": "σ_SB",
        "meaning": "Stefan–Boltzmann constant",
        "unit": "W/(m²·K⁴)"
      },
      {
        "symbol": "A_s",
        "meaning": "Heat-transfer area",
        "unit": "m²"
      },
      {
        "symbol": "T_abs",
        "meaning": "Absolute surface temperature",
        "unit": "K"
      }
    ]
  },
  "radiation-ratio": {
    "id": "radiation-ratio",
    "expression": "Qdot₂/Qdot₁ = (T₂/T₁)⁴",
    "symbols": [
      {
        "symbol": "Qdot₂",
        "meaning": "Final radiation rate at unchanged area and emissivity",
        "unit": "W"
      },
      {
        "symbol": "Qdot₁",
        "meaning": "Initial radiation rate",
        "unit": "W"
      },
      {
        "symbol": "T₂",
        "meaning": "Final absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial absolute temperature",
        "unit": "K"
      }
    ]
  },
  "parabolic-cable-length": {
    "id": "parabolic-cable-length",
    "expression": "S = (L/2)[√(1 + u²) + asinh(u)/u]; u = 4h/L",
    "symbols": [
      {
        "symbol": "S",
        "meaning": "Cable arc length",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Length or span",
        "unit": "m"
      },
      {
        "symbol": "u",
        "meaning": "Dimensionless end slope magnitude",
        "unit": "dimensionless"
      },
      {
        "symbol": "h",
        "meaning": "Height or sag",
        "unit": "m"
      }
    ]
  },
  "uphill-force": {
    "id": "uphill-force",
    "expression": "F = W(sin θ + μ_s cos θ)",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "W",
        "meaning": "Weight",
        "unit": "N"
      },
      {
        "symbol": "θ",
        "meaning": "Angle from horizontal or normal as specified",
        "unit": "rad"
      },
      {
        "symbol": "μ_s",
        "meaning": "Static friction coefficient",
        "unit": "dimensionless"
      }
    ]
  },
  "friction-limit": {
    "id": "friction-limit",
    "expression": "F = μ_s N",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "μ_s",
        "meaning": "Static friction coefficient",
        "unit": "dimensionless"
      },
      {
        "symbol": "N",
        "meaning": "Normal reaction",
        "unit": "N"
      }
    ]
  },
  "incline-weight": {
    "id": "incline-weight",
    "expression": "F = W sin θ",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "W",
        "meaning": "Weight",
        "unit": "N"
      },
      {
        "symbol": "θ",
        "meaning": "Angle from horizontal or normal as specified",
        "unit": "rad"
      }
    ]
  },
  "brewster": {
    "id": "brewster",
    "expression": "tan θ_B = n₂/n₁",
    "symbols": [
      {
        "symbol": "θ_B",
        "meaning": "Brewster incidence angle from surface normal",
        "unit": "rad"
      },
      {
        "symbol": "n₂",
        "meaning": "Transmitted medium refractive index",
        "unit": "dimensionless"
      },
      {
        "symbol": "n₁",
        "meaning": "Incident medium refractive index",
        "unit": "dimensionless"
      }
    ]
  },
  "upward-force": {
    "id": "upward-force",
    "expression": "F = m(a + g)",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "a",
        "meaning": "Acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "thermal-resistance": {
    "id": "thermal-resistance",
    "expression": "R_th = δ/k_t",
    "symbols": [
      {
        "symbol": "R_th",
        "meaning": "Thermal resistance per unit area",
        "unit": "m²·K/W"
      },
      {
        "symbol": "δ",
        "meaning": "Material thickness",
        "unit": "m"
      },
      {
        "symbol": "k_t",
        "meaning": "Thermal conductivity",
        "unit": "W/(m·K)"
      }
    ]
  },
  "pendulum-height": {
    "id": "pendulum-height",
    "expression": "h = L(1 − cos θ)",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Height or sag",
        "unit": "m"
      },
      {
        "symbol": "L",
        "meaning": "Length or span",
        "unit": "m"
      },
      {
        "symbol": "θ",
        "meaning": "Angle from horizontal or normal as specified",
        "unit": "rad"
      }
    ]
  },
  "lever": {
    "id": "lever",
    "expression": "F_in L_in = F_load L_load",
    "symbols": [
      {
        "symbol": "F_in",
        "meaning": "Applied effort",
        "unit": "N"
      },
      {
        "symbol": "L_in",
        "meaning": "Effort moment arm",
        "unit": "m"
      },
      {
        "symbol": "F_load",
        "meaning": "Load force",
        "unit": "N"
      },
      {
        "symbol": "L_load",
        "meaning": "Load moment arm",
        "unit": "m"
      }
    ]
  },
  "overall-u": {
    "id": "overall-u",
    "expression": "U = 1/R_th",
    "symbols": [
      {
        "symbol": "U",
        "meaning": "Overall heat-transfer coefficient",
        "unit": "W/(m²·K)"
      },
      {
        "symbol": "R_th",
        "meaning": "Thermal resistance per unit area",
        "unit": "m²·K/W"
      }
    ]
  },
  "lens-equation": {
    "id": "lens-equation",
    "expression": "1/f_l = 1/d_o + 1/d_i",
    "symbols": [
      {
        "symbol": "f_l",
        "meaning": "Lens or mirror focal length",
        "unit": "m"
      },
      {
        "symbol": "d_o",
        "meaning": "Object distance, positive for real objects",
        "unit": "m"
      },
      {
        "symbol": "d_i",
        "meaning": "Image distance, negative for virtual images",
        "unit": "m"
      }
    ]
  },
  "magnification": {
    "id": "magnification",
    "expression": "M = y_i/y_o = −d_i/d_o",
    "symbols": [
      {
        "symbol": "M",
        "meaning": "Signed lateral magnification",
        "unit": "dimensionless"
      },
      {
        "symbol": "y_i",
        "meaning": "Image height",
        "unit": "m"
      },
      {
        "symbol": "y_o",
        "meaning": "Object height",
        "unit": "m"
      },
      {
        "symbol": "d_i",
        "meaning": "Image distance, negative for virtual images",
        "unit": "m"
      },
      {
        "symbol": "d_o",
        "meaning": "Object distance, positive for real objects",
        "unit": "m"
      }
    ]
  },
  "centripetal-force": {
    "id": "centripetal-force",
    "expression": "F = mv²/r",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "r",
        "meaning": "Radius",
        "unit": "m"
      }
    ]
  },
  "flow-heating": {
    "id": "flow-heating",
    "expression": "Qdot = ρ Q_v c_p ΔT",
    "symbols": [
      {
        "symbol": "Qdot",
        "meaning": "Heat flow rate",
        "unit": "W"
      },
      {
        "symbol": "ρ",
        "meaning": "Flowing fluid density",
        "unit": "kg/m³"
      },
      {
        "symbol": "Q_v",
        "meaning": "Volumetric flow rate",
        "unit": "m³/s"
      },
      {
        "symbol": "c_p",
        "meaning": "Specific heat at constant pressure",
        "unit": "J/(kg·K)"
      },
      {
        "symbol": "ΔT",
        "meaning": "Temperature difference",
        "unit": "K"
      }
    ]
  },
  "angular-acceleration": {
    "id": "angular-acceleration",
    "expression": "ω_f = ω₀ + αt",
    "symbols": [
      {
        "symbol": "ω_f",
        "meaning": "Final angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "ω₀",
        "meaning": "Initial angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "α",
        "meaning": "Constant angular acceleration",
        "unit": "rad/s²"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      }
    ]
  },
  "path-distance": {
    "id": "path-distance",
    "expression": "D_path = Σ |Δx_k|",
    "symbols": [
      {
        "symbol": "D_path",
        "meaning": "Total distance along one-dimensional path",
        "unit": "m"
      },
      {
        "symbol": "Δx_k",
        "meaning": "Signed displacement of leg k",
        "unit": "m"
      }
    ]
  },
  "net-displacement": {
    "id": "net-displacement",
    "expression": "Δx = Σ Δx_k",
    "symbols": [
      {
        "symbol": "Δx",
        "meaning": "Net signed displacement",
        "unit": "m"
      },
      {
        "symbol": "Δx_k",
        "meaning": "Signed displacement of leg k",
        "unit": "m"
      }
    ]
  },
  "object-image-separation": {
    "id": "object-image-separation",
    "expression": "D_oi = |d_o| + |d_i|",
    "symbols": [
      {
        "symbol": "D_oi",
        "meaning": "Object-to-image distance when real image is opposite the lens",
        "unit": "m"
      },
      {
        "symbol": "d_o",
        "meaning": "Object distance, positive for real objects",
        "unit": "m"
      },
      {
        "symbol": "d_i",
        "meaning": "Image distance, negative for virtual images",
        "unit": "m"
      }
    ]
  },
  "closing-time": {
    "id": "closing-time",
    "expression": "t = D/(v₁ + v₂)",
    "symbols": [
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "D",
        "meaning": "Initial separation",
        "unit": "m"
      },
      {
        "symbol": "v₁",
        "meaning": "First approach speed",
        "unit": "m/s"
      },
      {
        "symbol": "v₂",
        "meaning": "Second approach speed",
        "unit": "m/s"
      }
    ]
  },
  "wall-convection": {
    "id": "wall-convection",
    "expression": "U = 1/(1/h₁ + δ/k_t + 1/h₂)",
    "symbols": [
      {
        "symbol": "U",
        "meaning": "Overall heat-transfer coefficient",
        "unit": "W/(m²·K)"
      },
      {
        "symbol": "h₁",
        "meaning": "First-side convection coefficient",
        "unit": "W/(m²·K)"
      },
      {
        "symbol": "δ",
        "meaning": "Material thickness",
        "unit": "m"
      },
      {
        "symbol": "k_t",
        "meaning": "Thermal conductivity",
        "unit": "W/(m·K)"
      },
      {
        "symbol": "h₂",
        "meaning": "Second-side convection coefficient",
        "unit": "W/(m²·K)"
      }
    ]
  },
  "wave-speed": {
    "id": "wave-speed",
    "expression": "v = fλ",
    "symbols": [
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "f",
        "meaning": "Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "λ",
        "meaning": "Wavelength",
        "unit": "m"
      }
    ]
  },
  "newton": {
    "id": "newton",
    "expression": "F = ma",
    "symbols": [
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "a",
        "meaning": "Acceleration",
        "unit": "m/s²"
      }
    ]
  },
  "constant-velocity": {
    "id": "constant-velocity",
    "expression": "v_f = v₀ + at",
    "symbols": [
      {
        "symbol": "v_f",
        "meaning": "Final velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v₀",
        "meaning": "Initial velocity",
        "unit": "m/s"
      },
      {
        "symbol": "a",
        "meaning": "Acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      }
    ]
  },
  "spring-frequency": {
    "id": "spring-frequency",
    "expression": "f = √(k/m)/(2π)",
    "symbols": [
      {
        "symbol": "f",
        "meaning": "Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "k",
        "meaning": "Spring constant",
        "unit": "N/m"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      }
    ]
  },
  "spring-period": {
    "id": "spring-period",
    "expression": "T = 2π√(m/k)",
    "symbols": [
      {
        "symbol": "T",
        "meaning": "Oscillation period",
        "unit": "s"
      },
      {
        "symbol": "π",
        "meaning": "Circle constant",
        "unit": "dimensionless"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "k",
        "meaning": "Spring constant",
        "unit": "N/m"
      }
    ]
  },
  "inelastic-collision": {
    "id": "inelastic-collision",
    "expression": "v_f = (m₁v₁ + m₂v₂)/(m₁ + m₂)",
    "symbols": [
      {
        "symbol": "v_f",
        "meaning": "Final velocity",
        "unit": "m/s"
      },
      {
        "symbol": "m₁",
        "meaning": "First mass",
        "unit": "kg"
      },
      {
        "symbol": "v₁",
        "meaning": "Signed first velocity",
        "unit": "m/s"
      },
      {
        "symbol": "m₂",
        "meaning": "Second mass",
        "unit": "kg"
      },
      {
        "symbol": "v₂",
        "meaning": "Signed second velocity",
        "unit": "m/s"
      }
    ]
  },
  "travel-distance": {
    "id": "travel-distance",
    "expression": "d = vt",
    "symbols": [
      {
        "symbol": "d",
        "meaning": "Distance travelled",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      }
    ]
  },
  "parabolic-sag": {
    "id": "parabolic-sag",
    "expression": "h = wL²/(8H)",
    "symbols": [
      {
        "symbol": "h",
        "meaning": "Height or sag",
        "unit": "m"
      },
      {
        "symbol": "w",
        "meaning": "Weight per horizontal length",
        "unit": "N/m"
      },
      {
        "symbol": "L",
        "meaning": "Length or span",
        "unit": "m"
      },
      {
        "symbol": "H",
        "meaning": "Allowable horizontal cable tension",
        "unit": "N"
      }
    ]
  },
  "resultant-forces": {
    "id": "resultant-forces",
    "expression": "F_R = √[F₁² + F₂² + 2F₁F₂ cos(θ₂ − θ₁)]",
    "symbols": [
      {
        "symbol": "F_R",
        "meaning": "Resultant magnitude",
        "unit": "N"
      },
      {
        "symbol": "F₁",
        "meaning": "First force magnitude",
        "unit": "N"
      },
      {
        "symbol": "F₂",
        "meaning": "Second force magnitude",
        "unit": "N"
      },
      {
        "symbol": "θ₂",
        "meaning": "Second force direction from common reference",
        "unit": "rad"
      },
      {
        "symbol": "θ₁",
        "meaning": "First force direction from common reference",
        "unit": "rad"
      }
    ]
  },
  "light-speed": {
    "id": "light-speed",
    "expression": "v = c₀/n_r",
    "symbols": [
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "c₀",
        "meaning": "Speed of light in vacuum",
        "unit": "m/s"
      },
      {
        "symbol": "n_r",
        "meaning": "Refractive index",
        "unit": "dimensionless"
      }
    ]
  },
  "light-transit": {
    "id": "light-transit",
    "expression": "t = δ/v",
    "symbols": [
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "δ",
        "meaning": "Material thickness",
        "unit": "m"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      }
    ]
  },
  "rope-midpoint": {
    "id": "rope-midpoint",
    "expression": "T_rope = W√[(L/2)² + h²]/(2h)",
    "symbols": [
      {
        "symbol": "T_rope",
        "meaning": "Tension on each straight rope segment",
        "unit": "N"
      },
      {
        "symbol": "W",
        "meaning": "Weight",
        "unit": "N"
      },
      {
        "symbol": "L",
        "meaning": "Length or span",
        "unit": "m"
      },
      {
        "symbol": "h",
        "meaning": "Height or sag",
        "unit": "m"
      }
    ]
  },
  "force-component": {
    "id": "force-component",
    "expression": "F_x = F cos θ",
    "symbols": [
      {
        "symbol": "F_x",
        "meaning": "Horizontal force component",
        "unit": "N"
      },
      {
        "symbol": "F",
        "meaning": "Force",
        "unit": "N"
      },
      {
        "symbol": "θ",
        "meaning": "Angle from horizontal or normal as specified",
        "unit": "rad"
      }
    ]
  },
  "capstan": {
    "id": "capstan",
    "expression": "T_tight/T_slack = e^(μθ_wrap)",
    "symbols": [
      {
        "symbol": "T_tight",
        "meaning": "Tight-side tension",
        "unit": "N"
      },
      {
        "symbol": "T_slack",
        "meaning": "Slack-side tension",
        "unit": "N"
      },
      {
        "symbol": "μ",
        "meaning": "Rope or belt friction coefficient",
        "unit": "dimensionless"
      },
      {
        "symbol": "θ_wrap",
        "meaning": "Total wrap angle",
        "unit": "rad"
      }
    ]
  },
  "impulse": {
    "id": "impulse",
    "expression": "J_imp = m(v_f − v₀)",
    "symbols": [
      {
        "symbol": "J_imp",
        "meaning": "Signed impulse",
        "unit": "N·s"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "v_f",
        "meaning": "Final velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v₀",
        "meaning": "Initial velocity",
        "unit": "m/s"
      }
    ]
  },
  "ladder-limit": {
    "id": "ladder-limit",
    "expression": "s = [μ_s(W_l + W_p)L tan θ − W_l L/2]/W_p",
    "symbols": [
      {
        "symbol": "s",
        "meaning": "Person distance along ladder from foot",
        "unit": "m"
      },
      {
        "symbol": "μ_s",
        "meaning": "Static friction coefficient",
        "unit": "dimensionless"
      },
      {
        "symbol": "W_l",
        "meaning": "Uniform ladder weight",
        "unit": "N"
      },
      {
        "symbol": "W_p",
        "meaning": "Person weight",
        "unit": "N"
      },
      {
        "symbol": "L",
        "meaning": "Length or span",
        "unit": "m"
      },
      {
        "symbol": "θ",
        "meaning": "Angle from horizontal or normal as specified",
        "unit": "rad"
      }
    ]
  },
  "beats": {
    "id": "beats",
    "expression": "f_beat = |f₁ − f₂|",
    "symbols": [
      {
        "symbol": "f_beat",
        "meaning": "Beat frequency",
        "unit": "Hz"
      },
      {
        "symbol": "f₁",
        "meaning": "First frequency",
        "unit": "Hz"
      },
      {
        "symbol": "f₂",
        "meaning": "Second frequency",
        "unit": "Hz"
      }
    ]
  },
  "momentum": {
    "id": "momentum",
    "expression": "p = mv",
    "symbols": [
      {
        "symbol": "p",
        "meaning": "Linear momentum",
        "unit": "kg·m/s"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      }
    ]
  },
  "frequency-count": {
    "id": "frequency-count",
    "expression": "f = N_cycles/t",
    "symbols": [
      {
        "symbol": "f",
        "meaning": "Frequency",
        "unit": "Hz"
      },
      {
        "symbol": "N_cycles",
        "meaning": "Number of cycles",
        "unit": "cycles"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      }
    ]
  },
  "integrated-velocity": {
    "id": "integrated-velocity",
    "expression": "v(t) = v(0) + ∫₀ᵗ a(τ)dτ",
    "symbols": [
      {
        "symbol": "v(t)",
        "meaning": "Velocity at time t",
        "unit": "m/s"
      },
      {
        "symbol": "v(0)",
        "meaning": "Initial velocity",
        "unit": "m/s"
      },
      {
        "symbol": "a(τ)",
        "meaning": "Acceleration as a function of time",
        "unit": "m/s²"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "τ",
        "meaning": "Integration time variable",
        "unit": "s"
      }
    ]
  },
  "kinetic-energy": {
    "id": "kinetic-energy",
    "expression": "E_k = mv²/2",
    "symbols": [
      {
        "symbol": "E_k",
        "meaning": "Kinetic energy",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      }
    ]
  },
  "relativistic-energy": {
    "id": "relativistic-energy",
    "expression": "E_k = E_rest[1/√(1 − β²) − 1]",
    "symbols": [
      {
        "symbol": "E_k",
        "meaning": "Relativistic kinetic energy",
        "unit": "MeV"
      },
      {
        "symbol": "E_rest",
        "meaning": "Particle rest energy",
        "unit": "MeV"
      },
      {
        "symbol": "β",
        "meaning": "Speed divided by light speed",
        "unit": "dimensionless"
      }
    ]
  },
  "spring-period-ratio": {
    "id": "spring-period-ratio",
    "expression": "m₂/m₁ = (T₂/T₁)²",
    "symbols": [
      {
        "symbol": "m₂",
        "meaning": "Final oscillating mass",
        "unit": "kg"
      },
      {
        "symbol": "m₁",
        "meaning": "Initial oscillating mass",
        "unit": "kg"
      },
      {
        "symbol": "T₂",
        "meaning": "Final period",
        "unit": "s"
      },
      {
        "symbol": "T₁",
        "meaning": "Initial period",
        "unit": "s"
      }
    ]
  },
  "period-frequency": {
    "id": "period-frequency",
    "expression": "T = 1/f",
    "symbols": [
      {
        "symbol": "T",
        "meaning": "Oscillation period",
        "unit": "s"
      },
      {
        "symbol": "f",
        "meaning": "Frequency",
        "unit": "Hz"
      }
    ]
  },
  "recoil": {
    "id": "recoil",
    "expression": "m_r v_r + m_p v_p = 0",
    "symbols": [
      {
        "symbol": "m_r",
        "meaning": "Rifle mass",
        "unit": "kg"
      },
      {
        "symbol": "v_r",
        "meaning": "Signed rifle recoil velocity",
        "unit": "m/s"
      },
      {
        "symbol": "m_p",
        "meaning": "Projectile mass",
        "unit": "kg"
      },
      {
        "symbol": "v_p",
        "meaning": "Signed projectile velocity",
        "unit": "m/s"
      }
    ]
  },
  "rim-angular": {
    "id": "rim-angular",
    "expression": "ω = v/r",
    "symbols": [
      {
        "symbol": "ω",
        "meaning": "Angular velocity",
        "unit": "rad/s"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "r",
        "meaning": "Radius",
        "unit": "m"
      }
    ]
  },
  "angular-turns": {
    "id": "angular-turns",
    "expression": "N_turns = (N₀ + N_f)t_min/2",
    "symbols": [
      {
        "symbol": "N_turns",
        "meaning": "Total revolutions under constant angular acceleration",
        "unit": "revolutions"
      },
      {
        "symbol": "N₀",
        "meaning": "Initial rotation speed",
        "unit": "rev/min"
      },
      {
        "symbol": "N_f",
        "meaning": "Final rotation speed",
        "unit": "rev/min"
      },
      {
        "symbol": "t_min",
        "meaning": "Elapsed time",
        "unit": "min"
      }
    ]
  },
  "normal-acceleration": {
    "id": "normal-acceleration",
    "expression": "a_n = v²/r",
    "symbols": [
      {
        "symbol": "a_n",
        "meaning": "Normal or centripetal acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      },
      {
        "symbol": "r",
        "meaning": "Radius",
        "unit": "m"
      }
    ]
  },
  "average-vector": {
    "id": "average-vector",
    "expression": "|v_avg| = √[(Σ v_xk t_k)² + (Σ v_yk t_k)²]/Σ t_k",
    "symbols": [
      {
        "symbol": "|v_avg|",
        "meaning": "Magnitude of average velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v_xk",
        "meaning": "Signed x-velocity during leg k",
        "unit": "m/s"
      },
      {
        "symbol": "v_yk",
        "meaning": "Signed y-velocity during leg k",
        "unit": "m/s"
      },
      {
        "symbol": "t_k",
        "meaning": "Duration of leg k",
        "unit": "s"
      }
    ]
  },
  "positional-base": {
    "id": "positional-base",
    "expression": "X = Σ d_k bᵏ",
    "symbols": [
      {
        "symbol": "X",
        "meaning": "Numeric value",
        "unit": "dimensionless"
      },
      {
        "symbol": "d_k",
        "meaning": "Digit at place k",
        "unit": "dimensionless"
      },
      {
        "symbol": "b",
        "meaning": "Number base",
        "unit": "dimensionless"
      },
      {
        "symbol": "k",
        "meaning": "Place-value exponent",
        "unit": "dimensionless"
      }
    ]
  },
  "sum-integers": {
    "id": "sum-integers",
    "expression": "S = n(n + 1)/2",
    "symbols": [
      {
        "symbol": "S",
        "meaning": "Sum",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      }
    ]
  },
  "sum-multiples": {
    "id": "sum-multiples",
    "expression": "S = a n(n + 1)/2",
    "symbols": [
      {
        "symbol": "S",
        "meaning": "Sum",
        "unit": "dimensionless"
      },
      {
        "symbol": "a",
        "meaning": "Term multiplier",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      }
    ]
  },
  "doubling-limit": {
    "id": "doubling-limit",
    "expression": "X_final = X₀ 2^ceil(log₂(H/X₀))",
    "symbols": [
      {
        "symbol": "X_final",
        "meaning": "Value after repeated doubling reaches threshold",
        "unit": "dimensionless"
      },
      {
        "symbol": "X₀",
        "meaning": "Positive initial value",
        "unit": "dimensionless"
      },
      {
        "symbol": "H",
        "meaning": "Loop threshold",
        "unit": "dimensionless"
      }
    ]
  },
  "binary-increment": {
    "id": "binary-increment",
    "expression": "X_next = X + 1",
    "symbols": [
      {
        "symbol": "X_next",
        "meaning": "Successor value before conversion to required base",
        "unit": "dimensionless"
      },
      {
        "symbol": "X",
        "meaning": "Numeric value",
        "unit": "dimensionless"
      }
    ]
  },
  "bit-complement": {
    "id": "bit-complement",
    "expression": "d_complement = 1 − d_bit",
    "symbols": [
      {
        "symbol": "d_complement",
        "meaning": "Complemented binary digit",
        "unit": "dimensionless"
      },
      {
        "symbol": "d_bit",
        "meaning": "Original binary digit",
        "unit": "dimensionless"
      }
    ]
  },
  "twos-complement": {
    "id": "twos-complement",
    "expression": "X_code = (2ⁿ − X) mod 2ⁿ",
    "symbols": [
      {
        "symbol": "X_code",
        "meaning": "Unsigned code representing the negative magnitude X in n bits",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      },
      {
        "symbol": "X",
        "meaning": "Numeric value",
        "unit": "dimensionless"
      }
    ]
  },
  "byte-transfer": {
    "id": "byte-transfer",
    "expression": "D_B = R_b t/8",
    "symbols": [
      {
        "symbol": "D_B",
        "meaning": "Data size",
        "unit": "bytes"
      },
      {
        "symbol": "R_b",
        "meaning": "Data rate",
        "unit": "bits/s"
      },
      {
        "symbol": "t",
        "meaning": "Transfer time",
        "unit": "s"
      }
    ]
  },
  "byte-rate": {
    "id": "byte-rate",
    "expression": "R_bytes = R_b/8",
    "symbols": [
      {
        "symbol": "R_bytes",
        "meaning": "Data transfer rate",
        "unit": "bytes/s"
      },
      {
        "symbol": "R_b",
        "meaning": "Data rate",
        "unit": "bits/s"
      }
    ]
  },
  "memory-address": {
    "id": "memory-address",
    "expression": "N_addr = 2ⁿ",
    "symbols": [
      {
        "symbol": "N_addr",
        "meaning": "Number of distinct byte addresses",
        "unit": "bytes"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      }
    ]
  },
  "memory-capacity": {
    "id": "memory-capacity",
    "expression": "C_bytes = N_loc w/8",
    "symbols": [
      {
        "symbol": "C_bytes",
        "meaning": "Total memory capacity",
        "unit": "bytes"
      },
      {
        "symbol": "N_loc",
        "meaning": "Number of memory locations",
        "unit": "locations"
      },
      {
        "symbol": "w",
        "meaning": "Bits per location",
        "unit": "bits/location"
      }
    ]
  },
  "transfer-time": {
    "id": "transfer-time",
    "expression": "t = 8D_B/R_b",
    "symbols": [
      {
        "symbol": "t",
        "meaning": "Transfer time",
        "unit": "s"
      },
      {
        "symbol": "D_B",
        "meaning": "Data size",
        "unit": "bytes"
      },
      {
        "symbol": "R_b",
        "meaning": "Data rate",
        "unit": "bits/s"
      }
    ]
  },
  "unsigned-max": {
    "id": "unsigned-max",
    "expression": "X_max = 2ⁿ − 1",
    "symbols": [
      {
        "symbol": "X_max",
        "meaning": "Largest unsigned value",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      }
    ]
  },
  "hex-digits": {
    "id": "hex-digits",
    "expression": "n_hex = ceil(n/4)",
    "symbols": [
      {
        "symbol": "n_hex",
        "meaning": "Required hexadecimal digit count",
        "unit": "digits"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      }
    ]
  },
  "arithmetic-mean": {
    "id": "arithmetic-mean",
    "expression": "X_mean = Σ X_k/n",
    "symbols": [
      {
        "symbol": "X_mean",
        "meaning": "Arithmetic average",
        "unit": "dimensionless"
      },
      {
        "symbol": "X_k",
        "meaning": "Value of observation k",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      }
    ]
  },
  "sum-skipped": {
    "id": "sum-skipped",
    "expression": "S = S₀ + n(n + 1)/2 − k_skip",
    "symbols": [
      {
        "symbol": "S",
        "meaning": "Sum",
        "unit": "dimensionless"
      },
      {
        "symbol": "S₀",
        "meaning": "Initial sum",
        "unit": "dimensionless"
      },
      {
        "symbol": "n",
        "meaning": "Number of bits or loop limit as specified",
        "unit": "dimensionless"
      },
      {
        "symbol": "k_skip",
        "meaning": "Skipped loop index within 1 through n",
        "unit": "dimensionless"
      }
    ]
  },
  "parity": {
    "id": "parity",
    "expression": "r = (a + b_num) mod 2",
    "symbols": [
      {
        "symbol": "r",
        "meaning": "Parity remainder: zero denotes even",
        "unit": "dimensionless"
      },
      {
        "symbol": "a",
        "meaning": "Term multiplier",
        "unit": "dimensionless"
      },
      {
        "symbol": "b_num",
        "meaning": "Second integer",
        "unit": "dimensionless"
      }
    ]
  },
  "mass-kinetic-power": {
    "id": "mass-kinetic-power",
    "expression": "P_k = ṁv²/2",
    "symbols": [
      {
        "symbol": "P_k",
        "meaning": "Kinetic energy flow rate",
        "unit": "W"
      },
      {
        "symbol": "ṁ",
        "meaning": "Mass flow rate",
        "unit": "kg/s"
      },
      {
        "symbol": "v",
        "meaning": "Outlet speed",
        "unit": "m/s"
      }
    ]
  },
  "allowable-force": {
    "id": "allowable-force",
    "expression": "F_allow = F_limit/FS",
    "symbols": [
      {
        "symbol": "F_allow",
        "meaning": "Allowable working force",
        "unit": "N"
      },
      {
        "symbol": "F_limit",
        "meaning": "Limiting or rated breaking force",
        "unit": "N"
      },
      {
        "symbol": "FS",
        "meaning": "Factor of safety",
        "unit": "dimensionless"
      }
    ]
  },
  "vacuum-frequency": {
    "id": "vacuum-frequency",
    "expression": "f = c₀/λ",
    "symbols": [
      {
        "symbol": "f",
        "meaning": "Light frequency",
        "unit": "Hz"
      },
      {
        "symbol": "c₀",
        "meaning": "Vacuum light speed",
        "unit": "m/s"
      },
      {
        "symbol": "λ",
        "meaning": "Vacuum wavelength",
        "unit": "m"
      }
    ]
  }
};
