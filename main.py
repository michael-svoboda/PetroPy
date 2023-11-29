from physics import *

def main():
    print("Welcome to the Permeability CLI!")
    
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
            continue

if __name__ == "__main__":
    main()