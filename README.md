# 🌿 Krishi Samrakshan - AI-powered Agriculture & Livestock Disease Detection  

## 🚀 Overview  
**Krishi Samrakshan** is an **AI-powered system** designed to detect **plant and livestock diseases** using **deep learning**. The project integrates a **robust AI model**, a **user-friendly web interface**, and a **manually curated dataset** to provide **accurate disease predictions** for farmers and veterinarians.

### 🏷️ Tech Stack  
- **Frontend**: React.js, Chakra UI  
- **Backend**: Flask (Python), Node.js  
- **AI Model**: TensorFlow (Deep Learning)  
- **Dataset**: Manually extracted plant and livestock disease images  
- **Deployment**: Flask API, Web-based UI  

## 💁️‍♂️ Project Structure  
```
Krishi-Samrakshan/  
│── backend/  
│   ├── app.py  # Flask backend for AI model
│   ├── server.js  # Node.js server for additional services
│   ├── sih.h5  # Trained AI model (TensorFlow)
│   ├── sih.ipynb  # Dataset analysis & preprocessing notebook
│── frontend/  
│   ├── node_modules/  # Dependencies
│   ├── public/  # Static assets
│   ├── src/  # React source code
│   ├── package.json  # Frontend dependencies
│   ├── package-lock.json  # Dependency lock file
│── README.md  # Project documentation
```

## 🌱 Dataset - The Core of Krishi Samrakshan  

### 🔍 Overview  
The **Krishi Samrakshan dataset** is a **manually curated** collection of agricultural and livestock disease images. Since **livestock disease datasets** are scarce, **extensive efforts** were made to gather and preprocess data from **various sources**.

### 🐄 Livestock Disease Dataset  
Unlike widely available plant datasets, **cattle disease data** is **limited**. This dataset was **manually collected and annotated** from:  
- **Veterinary research papers**  
- **Government disease control agencies**  
- **Agricultural universities**  
- **Farmer reports & field experts**  

#### **Diseases Covered:**  
✔ **Mastitis** – Udder inflammation  
✔ **Foot and Mouth Disease (FMD)** – Viral infection affecting hooves  
✔ **Lumpy Skin Disease** – Skin nodules caused by poxvirus  
✔ **Brucellosis** – Bacterial reproductive disorder  
✔ **Anthrax** – Highly infectious bacterial disease  

### 🌾 Plant Disease Dataset  
Plant disease data was collected from **agricultural research sources, drone images, and online databases**.  

#### **Diseases Covered:**  
✔ **Leaf Rust** – Common fungal disease  
✔ **Blight** – Causes decay and wilting  
✔ **Mosaic Virus** – Viral leaf pattern affecting crops  

### 📊 Data Preprocessing & Analysis  
The dataset underwent **rigorous preprocessing**, including:  
✅ **Data Augmentation** – Rotations, flips, brightness changes  
✅ **Noise Reduction** – Removing irrelevant backgrounds  
✅ **Normalization** – Scaling pixel values  
✅ **Feature Engineering** – Extracting key visual patterns  

The **Jupyter Notebook (`sih.ipynb`)** contains:  
- **Data distribution analysis**  
- **Sample visualizations**  
- **Preprocessing techniques**  
- **Model training insights**  

## 🖥️ How to Run the Project  

### 🛠️ Prerequisites  
- **Python 3.8+**, **Node.js**, **npm**  
- **TensorFlow, Flask, OpenCV**  

### 🚀 Backend Setup  
```sh
cd backend
pip install -r requirements.txt
python app.py
```

### 🎨 Frontend Setup  
```sh
cd frontend
npm install
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm start
```

## 🛡️ API Endpoints  

### Flask API  
#### **POST /predict**  
- **Description**: Accepts an image file and returns disease classification.  
- **Request**:  
```sh
curl -X POST -F "file=@sample.jpg" http://127.0.0.1:5000/predict
```
- **Response**:  
```json
{
  "result": {
    "prediction": "Mastitis",
    "classification": "Cattle"
  }
}
```

### Express.js API  
#### **GET /**  
- **Response**: "Hello World!" (Basic test route)  

## 🔬 AI Model  
The Krishi Samrakshan AI model is trained using deep learning on the custom dataset.

### Model Highlights:
✔ **CNN-based architecture (TensorFlow/Keras)**  
✔ **Trained on plant & livestock disease images**  
✔ **Optimized using augmentation & transfer learning**  

]  



🚀 **Krishi Samrakshan - Empowering Farmers with AI!** 🌿

