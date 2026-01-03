# **Thought Web AI** 

<p align="center">
  <img src="https://static.vecteezy.com/system/resources/previews/035/994/938/large_2x/circular-logo-vector.jpg" alt="Thought Web AI Logo" width="300">
</p>




<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50" />
  <img src="https://img.icons8.com/color/48/000000/json.png" alt="JSON" width="50" height="50" />
</p>

Thought Web AI is an innovative AI-powered visualization tool that maps any topic into an interactive knowledge web.It allowing users to quickly grasp complex concepts, explore connections, and make informed decisions. This platform is designed for learners, professionals, and tech enthusiasts who want a dynamic, engaging, and easy-to-understand view of any subject. 
*Interactive AI-Powered Knowledge Visualization Tool*  

---

> 💡 **“Technology amplifies intelligence, visualization amplifies comprehension.”**  
> — *Hemadharshini R*

---


---

## **Project Overview**  

**Thought Web AI** is an interactive tool that allows users to explore any topic by visualizing its **Definition, Uses, Working, Benefits, and Future**. The project features:  

- Horizontal **interactive nodes** connected to the center topic.  
- **HUD-style futuristic UI** inspired by AI assistants.  
- **Downloadable PNG** of the information panel for offline reference.  
- Responsive design, works on both desktop and mobile.
  
---

## **Purpose & Usefulness**  

This project was developed to **simplify learning and understanding of technical topics** by visualizing them in an interactive and engaging way.  

**Useful for:**  

- Students exploring new concepts quickly.  
- Professionals preparing presentations or documentation.  
- Anyone curious about technology and AI concepts.  

---

## **Tech Stack**  

| Technology    | Purpose |
|---------------|---------|
| HTML5         | Structure the web pages, create input fields, buttons, nodes, and panels. |
| CSS3          | Style the HUD interface, animations, gradients, glowing effects, and responsive layout. |
| JavaScript    | Handle interactivity, node clicks, data display, localStorage navigation, and dynamic content. |
| LocalStorage  | Store user input (the topic) and pass it between landing and visualization pages. |
| html2canvas   | Capture the info panel and allow users to download it as a PNG image for offline reference. |

---

## How It Works

💠Enter a topic in the landing page input field

💠System stores topic and navigates to visualization page

💠Horizontal nodes appear (Definition, Uses, Working, Benefits, Future)

💠Clicking a node displays related content

💠Clicking the center word displays all content

💠Download the information panel as a PNG for offline reference

##  Contact Me

**Hemadharshini R** | *AI Innovator & Data Scientist*  

Passionate about **AI , interactive web apps, and making ideas to real systems**.  
Focused on making **learning engaging, interactive, and visual**. 

<p align="center">
  <!-- LinkedIn -->
  <a href="https://[https://www.linkedin.com/in/hemadharshini21/]/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="40" height="40" />
  </a>
  
  <!-- Email -->
  <a href="darshinihema2102@gmail.com">
    <img src="https://img.icons8.com/color/48/000000/email.png" alt="Email" width="40" height="40" />
  </a>
  
  <!-- Phone -->
  <a href="tel:+91 7092389282">
    <img src="https://img.icons8.com/color/48/000000/phone.png" alt="Phone" width="40" height="40" />
  </a>
</p>


## **Workflow Diagram**  

```mermaid
flowchart TD
    A[User enters a tech topic] --> B[Store topic in LocalStorage]
    B --> C[Redirect to Thought Web AI page]
    C --> D[Display center word and horizontal nodes]
    D --> E[User clicks a node]
    E --> F[Show corresponding information in info panel]
    D --> G[User clicks center word]
    G --> F
    F --> H[User can download info panel as PNG]
