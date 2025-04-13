# Backend Feature Completion

[fa-car]: https://cdn-icons-png.flaticon.com/512/919/919853.png

```Mermaid
flowchart LR

  A[<img src="https://cdn-icons-png.flaticon.com/512/186/186239.png">Client Device] -->|Request| B[<img src=https://cdn-icons-png.flaticon.com/512/919/919825.png>Node.js Server]

  subgraph NodeJS / ExpressJS Server
    B -->|Serve Static Files| C[React App Files]
    B -->|API Request| D[API Router]
  end
    
    
    subgraph Vehicle
      D --> F1[vehicle-data]
      D --> F2[vehicle-status]
    end
    
    subgraph Config
      D --> G1[config-get]
      D --> G2[config-update]
    end
    
    subgraph User
      D --> H1[user-info]
      D --> H2[user-settings]
    end
    subgraph Navigation
      D --> E1[<img src="https://cdn-icons-png.flaticon.com/512/5376/5376141.png"> ev-chargers]
      D --> E2["<img src='https://cdn-icons-png.flaticon.com/512/1599/1599427.png'>vtt (Voice)"]
      D --> E3[<img src="https://cdn-icons-png.flaticon.com/512/3180/3180149.png">route]
      D --> E4[route-from-sentence]
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

    class B,C,D,Complete complete
    class E1,Near nearComplete
    class E2,E3,E4,Progress progress
    class F1,F2,F3,G1,G2,H1,H2,Not notStarted
```