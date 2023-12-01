from ..formulas.DarcyFlowSS import DarcysLawOF
import regex as rx
import re as regx
import unicodedata

class AppParser:
    def __init__(self, content):
        print('INITIALIZED')
        print('INPUTS: ', content['content'])
        self.text = content['content']
        self.variable = None
        self.parsed_equation = None
        self.parsed_solution = None

class AppParser:
    def __init__(self, content):
        print('INITIALIZED')
        print('INPUTS: ', content['content'])
        self.text = content['content']
        self.variable = None
        self.parsed_equation = None
        self.parsed_solution = None

    def parse(self):
        try:
            print('START:')
            # Split the content into lines and process each line
            lines = self.text.split('\n')
            
            
            inputs = {}

            for line in lines:
                print(len(line), line)
            print('lines: ', lines, len(lines))
            # deleting all of the elemtns with only '/r'
            lines = [line for line in lines if line.strip()]
            # Remove the last character of each string in the list the '/r'
            lines = [s[:-1] for s in lines]
            print('lines: ', lines, len(lines))

            ###########################################################
            ##################### CLEAN INPUT #########################
            ###########################################################

            # Find the solve clause

            # Define a regular expression pattern
            pattern = r'solve\((\w+)\)'

            # Iterate through the list of strings searching for 1 solve clause
            for string in lines:
                print('string' , string, len(lines))
                match = regx.search(pattern, string)
                if match:
                    variable = match.group(1)
                    self.variable = variable
                    lines.remove(string)


            print("EXTRACTED VARIABLE: ", self.variable)
            

            # Split each line into key and value
            for line in lines:
                print('HERE', line)
                key, value = map(str.strip, line.split('='))
                inputs[key] = value

            print('INPUTS: ', inputs)

            # Set the parsed values as global variables or use them in your app logic
            global k, Pe, Pwf, h, re, rw, B, mu
            k = inputs.get('k')
            Pe = inputs.get('Pe')
            Pwf = inputs.get('Pwf')
            h = inputs.get('h')
            re = inputs.get('re')
            rw = inputs.get('rw')
            B = inputs.get('B')
            mu = inputs.get('mu')

            # Create a DarcyFlowOF object with the parsed inputs
            darcy_flow_obj = DarcysLawOF(**inputs)

            # Solve for the specified variable
            darcy_flow_obj.solve(self.variable)
            self.parsed_equation = darcy_flow_obj.get_latex_equation()
            self.parsed_solution = darcy_flow_obj.get_latex_solution()
            
            print(self.parsed_equation)
            print(self.parsed_solution)

        except Exception as e:
            print(f"Error parsing DarcyFlow inputs: {e}")
            self.parsed_result = None
