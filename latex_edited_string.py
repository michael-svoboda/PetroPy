
from sympy import symbols, Eq, solve, pi, log, latex

# Define symbols
q, k, h, r1, r2, delta_P = symbols('q k h r1 r2 delta_P')

# Define Darcy's law equation symbolically
darcys_law_radial = Eq(q, -2 * pi * k * h * delta_P / log(r2 / r1))

# Define numerical values for other variables
k_value = 1.5  # replace with your value
h_value = 0.2  # replace with your value
r1_value = 2.0  # replace with your value
r2_value = 4.0  # replace with your value
delta_P_value = 100.0  # replace with your value

# Rearrange the equation and solve for q
rearranged_equation = solve(darcys_law_radial, q)[0]

# Substitute numerical values into the solution
solution_with_values = rearranged_equation.subs({k: k_value, h: h_value, r1: r1_value, r2: r2_value, delta_P: delta_P_value})

# Get the LaTeX string of the rearranged equation
rearranged_latex = latex(rearranged_equation)

# Get the LaTeX string of the solution with substituted numerical values
solution_latex_with_values = solution_with_values

# Substitute numerical values into the LaTeX string
rearranged_latex_with_values = rearranged_latex.replace(latex(k), str(k_value)) \
    .replace(latex(h), str(h_value)) \
    .replace(latex(r1), str(r1_value)) \
    .replace(latex(r2), str(r2_value)) \
    .replace(latex(delta_P), str(delta_P_value))

# Print the rearranged equation in LaTeX
print(f"Rearranged Equation: {rearranged_latex}")

# Print the rearranged equation with substituted numerical values in LaTeX
print(f"Rearranged Equation with Values: {rearranged_latex_with_values}")

# Print the solution to the equation with substituted numerical values in LaTeX
print(f"Solution with Values: {solution_latex_with_values}")
