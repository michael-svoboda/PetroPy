from ..formulas.DarcyFlowSS import DarcysLawOF

class AppParser:
    def __init__(self, content):
        self.content = content
        self.parsed_result = None

    def parse(self):
        try:
            # Split the content into lines and process each line
            lines = self.content.split('\n')
            inputs = {}

            for line in lines:
                # Split each line into key and value
                key, value = map(str.strip, line.split('='))
                inputs[key] = value

            print('INPUTS: ', inputs)

            # Create a DarcyFlowOF object with the parsed inputs
            darcy_flow_obj = DarcysLawOF(**inputs)
            
            # Get the variable to solve for
            variable_to_solve = inputs.get('variable', None)

            # Solve for the specified variable
            if variable_to_solve:
                darcy_flow_obj.solve(variable_to_solve)
                self.parsed_result = darcy_flow_obj.latex_string

        except Exception as e:
            print(f"Error parsing DarcyFlow inputs: {e}")
            self.parsed_result = None

    def make_decisions(self):
        # Additional decision-making logic if needed
        pass





