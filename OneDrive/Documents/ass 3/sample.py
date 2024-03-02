def multiplication_table(number):
    """
    Function to generate the multiplication table for a given number up to 10.
    
    Parameters:
        number (int): The number for which the multiplication table is generated.
    """
    print(f"Multiplication Table for {number}:")
    for i in range(1, 11):
        print(f"{number} x {i} = {number * i}")

def main():
    # Define the number for the multiplication table
    number = 7  # You can change this to any number you want
    multiplication_table(number)

if __name__ == "__main__":
    main()
