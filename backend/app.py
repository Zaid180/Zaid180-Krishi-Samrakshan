import os
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Ensure the uploads directory exists
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Load the model from the file
model_path = r"D:\sih.h5"
model = load_model(model_path)

# Class labels
class_labels = sorted([
    "chicken_cocci", "chicken_healthy", "chicken_pcrsalmo", "chicken_salmo",
    "cow_healthy", "cow_lumpy", "cow_rinderpest",
    "plant_Pepper_bell_Bacterial_spot", "plant_Pepper_bell_healthy",
    "plant_Potato_Early_blight", "plant_Potatohealthy", "plant_Potato_Late_blight",
    "plant_Tomato_Target_Spot", "plant_Tomato_Tomato_mosaic_virus",
    "plant_Tomato__Tomato_YellowLeaf_Curl_Virus", "plant_Tomato_Bacterial_spot",
    "plant_Tomato_Early_blight", "plant_Tomato_healthy", "plant_Tomato_Late_blight",
    "plant_Tomato_Leaf_Mold", "plant_Tomato_Septoria_leaf_spot",
    "plant_Tomato_Spider_mites_Two_spotted_spider_mite"
])

def predict(image_path):
    try:
        img = image.load_img(image_path, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0  # Normalize the image data

        predictions = model.predict(img_array)
        predicted_class_index = np.argmax(predictions[0])
        predicted_class = class_labels[predicted_class_index]

        # Splitting the prediction to identify the animal/plant and disease
        parts = predicted_class.split('_', 2)
        if len(parts) == 3:
            animal_plant = parts[1]
            disease = parts[2]
        else:
            animal_plant = parts[0]
            disease = parts[1]

        return {
            "prediction": disease,
            "classification": animal_plant
        }
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        raise e

@app.route('/predict', methods=['POST'])
def predict_disease():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    
    try:
        print(f"Saving file to {file_path}")
        file.save(file_path)
        
        print(f"Running prediction on {file_path}")
        result = predict(file_path)
        
        print(f"Prediction result: {result}")
    except Exception as e:
        print(f"Error processing file: {str(e)}")
        return jsonify({'error': str(e)}), 500
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
