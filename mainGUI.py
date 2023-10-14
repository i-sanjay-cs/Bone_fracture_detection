import os
from PIL import Image
from predictions import predict

# Global variables
project_folder = os.path.dirname(os.path.abspath(__file__))
folder_path = project_folder + '/images/'

# Define the image file path here
image_file = "C:\\Users\\sanja\\Downloads\\Object-detection-system-main (1)\\pro\\Dataset\\test\\Elbow\\patient11186\\study1_positive\\image1.png"

def predict_cli():
    bone_type_result = predict(image_file)
    result = predict(image_file, bone_type_result)
    print("Bone Type:", bone_type_result)
    if result == 'fractured':
        print("Result: Fractured")
    else:
        print("Result: Normal")

if __name__ == "__main__":
    predict_cli()
