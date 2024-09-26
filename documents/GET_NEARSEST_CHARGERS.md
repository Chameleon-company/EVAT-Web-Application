# Get Nearest EV Chargers

```Mermaid

sequenceDiagram
  autonumber
  title Get Nearest Chargers
  Client->>Client: Get location via GPS {lat, lon}
  Client->>Client: Get user input for chargerType
  Client->>+Server: HTTPS GET /api/navigation/ev-chargers {lat, lon, chargerType, distance}
  
  alt Valid Request
    Server->>+PythonScript: Run Python script (via Node.js spawn)
    PythonScript-->>-Server: Return charger data
    Server-->>Client: 200 OK with charger data
    Client->>Client: Populate map with charger icons
  else Invalid Request (Missing lat, lon)
    Server-->>-Client: 400 Bad Request
  end
  ```
