import matplotlib.pyplot as plt
from sympy import symbols, pi, log, Eq, solve, latex
from pint import UnitRegistry

# Define symbols
q, k, h, r1, r2, delta_P = symbols('Q k h r1 r2 delta_P')

# Define the original formula for Darcy's Law in radial form
darcys_law_radial = Eq(q, -2 * pi * k * h * delta_P / log(r2 / r1))

# Print the original formula in LaTeX
print("Original Formula:")
print(latex(darcys_law_radial))
print()

# Input numerical values with units (SI)
ureg = UnitRegistry()
permeability_value = 1.5 * ureg.darcy
thickness_value = 0.2 * ureg.meter
inner_radius_value = 2.0 * ureg.meter
outer_radius_value = 4.0 * ureg.meter
delta_P_value = 100.0 * ureg.pascal

# Print out the formulas with all the variables
variables_values = {
    k: permeability_value,
    h: thickness_value,
    r1: inner_radius_value,
    r2: outer_radius_value,
    delta_P: delta_P_value
}

formulas_with_values = {var: darcys_law_radial.subs(variables_values) for var in [q, k, h, r1, r2, delta_P]}

for var, formula in formulas_with_values.items():
    print(f"{latex(var)} = {latex(formula)}")

# Solve for each variable and display the result
fig, axs = plt.subplots(2, 3, figsize=(12, 8))
axs = axs.flatten()

for i, variable in enumerate([q, k, h, r1, r2, delta_P]):
    solution = solve(darcys_law_radial.subs(variables_values), variable)[0]
    print(type(solution))
    print(solution)

    # Render the rearranged formula in LaTeX using matplotlib
    axs[i].text(0.5, 0.5, f"${latex(variable)} = {latex(solution)}$", fontsize=14, ha='center', va='center')
    axs[i].axis('off')
    axs[i].set_title(f'Rearranged for {latex(variable)}')

plt.tight_layout()
plt.show()

# Solve for each variable and display the result
fig2, axs = plt.subplots(2, 3, figsize=(12, 8))
axs = axs.flatten()

for i, variable in enumerate([q, k, h, r1, r2, delta_P]):
    solution = solve(darcys_law_radial.subs(variables_values), variable)[0]

    # Render the rearranged formula in LaTeX using matplotlib
    axs[i].text(0.5, 0.5, f"${latex(variable)} = {latex(solution)}$", fontsize=14, ha='center', va='center')
    axs[i].axis('off')
    axs[i].set_title(f'Rearranged for {latex(variable)}')

plt.tight_layout()
plt.show()