# Diagram Examples

<p> This document contains a list of different diagram types, and examples that can be used for documentation. Copy the required diagram text into your document, and edit to suite your needs </p>


## Sequence Diagram

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
## Left Right Flow Chart / Graph Exampl (LR for Left Right)

```Mermaid
flowchart LR
  

  A[Client Device] -->|Request React App| B[Node.js Server]

  subgraph Node.js Server
    B -->|Serve Static Files| C[React App Files]
    B -->|API Request| D[API Router]
  end
    
    %% API Router sits above the subgraphs
    
    subgraph Navigation
      D --> N1[fa:fa-book ev-chargers]
      D --> N2[vtt]
      D --> N3[route]
      D --> N4[route-from-sentence]
    end
    
    subgraph Vehicle
      D --> V1[vehicle-data]
      D --> V2[vehicle-status]
    end
    
    subgraph Config
      D --> C1[config-get]
      D --> C2[config-update]
    end
    
    subgraph User
      D --> U1[user-info]
      D --> U2[user-settings]
    end

    subgraph Features
        direction LR
        Complete[Complete]
        Near[Near Complete]
        Progress[In Progress]
        Not[Not Started]
    end

    classDef complete fill:#008800,stroke:#333,stroke-width:2px;
    classDef nearComplete fill:#888800,stroke:#333,stroke-width:2px;
    classDef progress fill:#CC5801,stroke:#333,stroke-width:2px;
    classDef notStarted fill:#aa0000,stroke:#333,stroke-width:2px;

    class A,B,C,D,Complete complete
    class N1,Near nearComplete
    class N2,N3,N4,Progress progress
    class V1,V2,U1,U2,C1,C2,Not notStarted
```

## Top Down Grpah / Flowchart Example (TD for Top Down)

```Mermaid
    flowchart TD
    subgraph Client
        A[User] -->|Click Save|B[Save Button] --> Server
        
    end
    subgraph Server
        direction LR
        C[Function] -- Correct Data --> D["saveData(data)"]
        C -- Bad Data --> E["This one"]
    end
```

## Pie Chart

```Mermaid

pie
  title Project status
  "Completed" : 50
  "In Progress" : 30
  "Not Started" : 20

  ```
## State Diagram

  ```Mermaid

stateDiagram
  [*] --> Idle
  Idle --> Ready : Equipment Powered
  Ready --> Evacuating : Start
  Evacuating --> Ready : Stop
  Evacuating --> Running : Reached Pressure
  Running --> Stopped : Stop
  Stopped --> Idle : Reset

  Running --> Hazard : Hazardous Event
  Evacuating --> Hazard : Pressure Diff Rate
  ```


  ## User Journey

  ```Mermaid
journey
  title User Journey
  section Sign Up
    User: 5: Active, Sign Up Form
    System: 3: Active, Validate Information
  section Purchase
    User: Active: Select Item
    System: Active: Process Payment

  ```

  ## Timeline

  ```Mermaid
 timeline
    title Software Release Cycle Timeline
    2024-01-05 : v1.0 Release : Receive init funding
    2024-02-15 : v1.1 Patch Release
    2024-03-01 : New Feature Releases : Maps UI : Offline Mode
    2024-04-10 : v1.2 Release
    2024-05-05 : v2.0 Beta
    2024-06-01 : v2.0 Official Release
    2024-07-15 : Post-release Patches
  ```