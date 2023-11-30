from engineering.physics import *
from engineering.formulas import *

def main():
    '''print("Welcome to the Permeability CLI!")
    
    while True:
        input_string = input("Enter a permeability value and unit (e.g., '10 m.D'): ")
        
        if input_string.lower() == 'exit':
            print("Exiting the program.")
            break
        
        try:
            permeability_instance = Permeability(input_string)
            print("Permeability:", permeability_instance)
            print(permeability_instance.value, permeability_instance.prefix, permeability_instance.unit)
        except ValueError as e:
            print(f"Error: {e}")
            continue'''
    

     # Create an instance of your class with some values
    '''q=137.5344
    k=1
    h=131.2
    rw=0.328
    re=1640
    Pwf=2320
    Pe=2900
    mu=0.46'''
    
    '''# List of variables to solve for
    variables_to_solve = ['q', 'k', 'h', 'rw', 're', 'Pwf', 'Pe', 'mu']

    # Loop through each variable, solve, and print the result
    for variable in variables_to_solve:
        solution = darcy_instance.solve(variable)
        print(f"Solving for {variable}: {solution}")
        print(type(solution))
'''

    darcyOF = DarcysLawOF(q='137.5344 stbday', k='1 m|D',  h='131.2 ft', rw='0.328 ft', re='1640 ft', Pwf='2320 psi', Pe='2900 psi')

    print(darcyOF.solve('mu'))
    print(darcyOF.get_latex_equation())
    print(darcyOF.sub_latex_equation())
    print(darcyOF.get_latex_solution())
    

if __name__ == "__main__":
    main()