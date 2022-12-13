### Sequence diagram [<a href="https://mermaid-js.github.io/mermaid/#/sequenceDiagram">docs</a> - <a href="https://mermaid.live/edit#pako:eNo9kMluwjAQhl_F-AykQMuSA1WrbuLQQ3v1ZbAnsVXHkzrjVhHi3etQwKfRv4w-z0FqMihL2eF3wqDxyUEdoVHhwTuNk-12RzaU4g29JzHMY2HpV0BE0VO6V8ETtdkGz1Zb1F8qiPyG5LX84mrLAmpwoWNh-5a0pWCiAxUwGBXeiVHEU4oq8V_6AHYUwAu2lLLTjVQ4bc1rT2yleI0IfJG320faZ9ABbk-Jz3hZnFxBduR9L2oiM5Jj2WBswJn8-cMArSRbbFDJMo8GK0ielVThmKOpNcD4bBxTlGUFvsOxhMT02QctS44JL6HzAS-iJzCYOwfJfTscunYd542aQuXqQU_RZ9kyt11ZFIM9rR3btJ9qaorOGQuR7c9mWSznyzXMF7hcLeBusTB6P9usq_ntrDKrm9kc5PF4_AMJE56Z">live editor</a>]

```mermaid

sequenceDiagram
    Client->>+Server: GET/ https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Client: HTML-code
    Client->>Server: GET/ https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Client: main.css
    Client->>Server: GET/ https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>Client: main.js
    Client->>Server: GET/ https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Client: JSON Data
        
```