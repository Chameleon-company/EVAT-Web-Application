# EV Navigation API Documentation

## Base URL: `/api`

---

### **1. Navigation**

Endpoints related to trip planning, route navigation, and finding EV stations.

#### **POST** `/navigation/trip-planner`
- **Description**: Plan a trip based on locations, vehicle type, and current battery capacity.
- **Required Data**:

    ```json
    {
      "locations": [
        { "lat": 34.052235, "lon": -118.243683 }, // start location
        { "lat": 36.169941, "lon": -115.139832 }, // user requested stops
        { "lat": 35.6762, "lon": 139.6503 } // end location
      ],
      "vehicleType": 3, //each vehicle type has an id
      "currentBattery": 80 // battery percentage (0-100)
    }
    ```

- **Response**:

    ```json
    {
      "route": [
        { 
          "start": { "lat": 34.052235, "lon": -118.243683 },
          "next": { "lat": 36.169941, "lon": -115.139832 }, 
          "distance": 367.25 
        },
        { 
          "stop": "Charging Station", 
          "location": { "lat": 35.6762, "lon": 139.6503 }, 
          "chargerType": "fast" 
        }
      ]
    }
    ```

#### **GET** `/navigation/ev-stations`
- **Description**: Find nearby EV charging stations based on location and charger type.
- **Query Params**:
    - `lat`: Latitude of the location.
    - `lon`: Longitude of the location.
    - `radius`: Search radius (in km).
    - `chargerType`: Optional filter for charger type (`Type 2`, `CHAdeMO`).

- **Example**: `/navigation/ev-stations?lat=34.052235&lon=-118.243683&radius=10&chargerType=fast`

- **Response**:

    ```json
    [
      { "stationId": "123", "lat": 34.061235, "lon": -118.241683, "chargerType": "Type 2", "available": true },
      { "stationId": "456", "lat": 34.052235, "lon": -118.243683, "chargerType": "Type 2", "available": false }
    ]
    ```

#### **POST** `/navigation/vtt`
- **Description**: Convert voice input into actionable trip or EV station queries.
- **Required Data**:

    ```json
    {
      "voiceBlob": "audio-file.wav" // voice recording
    }
    ```

- **Response**:

    ```json
    {
      "transcription": "Where are the closest charging stations?",
      "query": { "lat": 34.052235, "lon": -118.243683, "type": "charging stations" }
    }
    ```

---

### **2. Vehicle**

Endpoints related to retrieving vehicle details like battery capacity, efficiency, and charger types.

#### **GET** `/vehicle/list`
- **Description**: Get a list of EV vehicles available in the system with relevant details.
- **Response**:

    ```json
    [
      { "id": "1", "name": "Tesla Model 3", "batteryCapacity": 75, "chargerType": ["fast", "standard"], "efficiency": 0.18 },
      { "id": "2", "name": "Nissan Leaf", "batteryCapacity": 40, "chargerType": ["standard"], "efficiency": 0.15 }
    ]
    ```

#### **GET** `/vehicle/:id`
- **Description**: Get details about a specific EV vehicle by its ID.
- **Response**:

    ```json
    {
      "id": "1",
      "name": "Tesla Model 3",
      "batteryCapacity": 75,
      "chargerType": ["fast", "standard"],
      "efficiency": 0.18
    }
    ```

---

### **3. User**

Endpoints for user profile management and preferences.

#### **POST** `/user/register`
- **Description**: Register a new user account.
- **Required Data**:

    ```json
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Response**:

    ```json
    { "message": "User registered successfully", "userId": "123" }
    ```

#### **POST** `/user/login`
- **Description**: Log in an existing user.
- **Required Data**:

    ```json
    {
      "email": "john@example.com",
      "password": "password123" 
    }
    ```

- **Response**:

    ```json
    { "message": "Login successful", "token": "jwt_token_here" }
    ```

#### **GET** `/user/details`
- **Description**: Get user preferences such as preferred vehicle or charger type.
- **Authorization**: Requires JWT token in headers.
- **Required Data**:

    ```json
    {
      "details":{
        "address": "1 Hanney Av, NSW",
        "email": "john@example.com"
      },
      "vehicle": {
        "vehicleId": 1, //defined in vehicle list
        "batteryCapacity": 75, //perecntage
      }

    }
    ```

- **Response**:

    ```json
    {
      "preferredVehicle": "Tesla Model 3",
      "preferredChargerType": "fast"
    }
    ```

#### **POST** `/user/preferences`
- **Description**: Update user preferences.
- **Required Data**:

    ```json
    {
      "preferredVehicle": "Tesla Model 3",
      "preferredChargerType": "fast"
    }
    ```

- **Response**:

    ```json
    { "message": "Preferences updated successfully" }
    ```

---

### **4. Config**

Endpoints for configuring settings like default radius for EV station searches, trip parameters, etc.

#### **GET** `/config/settings`
- **Description**: Get the default system configurations.
- **Response**:

    ```json
    {
      "defaultRadius": 10, // Default radius for finding charging stations (in km)
      "maxBatteryCapacity": 100, // Maximum battery capacity in percentage
      "defaultVehicle": "Tesla Model 3"
    }
    ```

#### **POST** `/config/settings`
- **Description**: Update system configurations.
- **Required Data**:

    ```json
    {
      "defaultRadius": 15,
      "maxBatteryCapacity": 80
    }
    ```

- **Response**:

    ```json
    { "message": "Configuration updated successfully" }
    ```

---

### **5. Additional Categories**

#### **GET** `/charging-stats`
- **Description**: Get statistics for charging stations, such as availability and usage trends.
- **Response**:

    ```json
    {
      "totalStations": 150,
      "availableStations": 100,
      "averageUsage": 75 // percentage
    }
    ```

---

### Notes:

- **Authentication**: For user-specific requests like `/user/preferences`, you may need JWT authentication tokens.
- **Error Handling**: Each endpoint should return appropriate error responses like `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, etc.
