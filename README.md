<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=220&section=header&text=REGISTER%20USER%20FRONT&fontSize=62&fontColor=FFD700&fontAlignY=42&desc=%E2%9A%A1%20Vanilla%20JS%20Study%20Template%20%C2%B7%20Framework-Free%20%C2%B7%20Zero%20Dependencies&descAlignY=62&descColor=DCDCDC&animation=fadeIn" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&weight=700&size=20&duration=2800&pause=900&color=FFD700&center=true&vCenter=true&width=760&lines=%E2%9A%A1+Pure+Vanilla+JavaScript+%E2%80%94+No+Frameworks;%F0%9F%93%9A+Study+Template+for+Registration+Forms;%F0%9F%94%8C+Modular+CSS+%2B+JS+Architecture;%F0%9F%9A%AB+No+Bundler+%7C+No+Build+Step+%7C+No+node_modules;%F0%9F%A7%A9+Fork-and-Extend+Starting+Point;%F0%9F%94%8C+Backend-Agnostic+%E2%80%94+Plug+in+Any+API)](https://git.io/typing-svg)

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Study_Template-00D26A?style=for-the-badge&logo=checkmarx&logoColor=white"/>
  <img src="https://img.shields.io/badge/Dependencies-None-00D26A?style=for-the-badge&logo=checkmarx&logoColor=white"/>
  <img src="https://img.shields.io/badge/Build_Step-Not_Required-FFD700?style=for-the-badge&logoColor=000000"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000"/>
  <img src="https://img.shields.io/badge/Dependencies-None-000000?style=for-the-badge&logo=checkmarx&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-FFD700?style=for-the-badge"/>
</p>

<p align="center">
  <a href="https://github.com/NietoDeveloper/RegisterUserFront">
    <img src="https://img.shields.io/badge/%F0%9F%93%82_Source-NietoDeveloper%2FRegisterUserFront-000000?style=for-the-badge&logo=github&logoColor=FFD700"/>
  </a>
  <a href="https://github.com/NietoDeveloper">
    <img src="https://img.shields.io/badge/%F0%9F%A5%87_%231_Committer-Colombia-FFD700?style=for-the-badge"/>
  </a>
</p>

<br/>

> **RegisterUserFront** — *A minimal, dependency-free vanilla JavaScript template for building user registration interfaces.*
>
> Built for learning, teaching, and reuse: plain HTML, modular CSS, and framework-free JS. No bundlers, no package manager, no build step — clone it, open it, and start coding.
>
> *Study Template · Fork-Friendly · Built in Bogotá 🇨🇴*

</div>

---

## 📖 About

**RegisterUserFront** is a lightweight, framework-free starter template for a user registration front-end. It is designed as both a **study resource** — to practice DOM manipulation, event handling, and client-side form validation in plain JavaScript — and a **reusable base template** for quickly bootstrapping new front-end projects without the overhead of a framework or build tool.

---

## 📂 Project Structure

```text
RegisterUserFront/
│
├── css/                       ← Stylesheets
│   └── style.css               ← Layout, form styling, responsive rules
│
├── js/                         ← Application logic
│   └── main.js                  ← DOM handling, event listeners, form validation
│
├── index.html                  ← Entry point (registration form markup)
├── LICENSE                     ← MIT License
└── README.md
```

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| 🧱 **Structure** | HTML5 | Semantic markup for the registration form |
| 🎨 **Styling** | CSS3 | Modular, framework-free styling |
| ⚙️ **Logic** | Vanilla JavaScript (ES6+) | DOM manipulation, event handling, validation |
| 🐙 **Versioning** | Git & GitHub | Source control and collaboration |

</div>

No frameworks, no bundlers, no `node_modules` — just open the browser and code.

---

## ✨ Purpose & Use Cases

```mermaid
flowchart LR
    A([📄 Clone Repo]) --> B[Open index.html]
    B --> C{Use Case}
    C -->|Learn| D[🎓 Practice DOM & Validation]
    C -->|Reuse| E[🧩 Bootstrap New Project]
    C -->|Extend| F[🔌 Connect to Your Backend]

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style C fill:#0a0a0a,color:#FFD700,stroke:#FFD700
    style D fill:#DCDCDC,color:#000
    style E fill:#DCDCDC,color:#000
    style F fill:#000,color:#FFD700,stroke:#FFD700
```

- 🎓 **Study template** — a clean reference for practicing vanilla JS form handling and validation patterns.
- 🧩 **Starter template** — fork it as the front-end base for any registration flow.
- 🔌 **Backend-agnostic** — plug in any REST API endpoint from `js/main.js` without extra tooling.

---

## 🔄 Form Validation Flow

```mermaid
flowchart LR
    A([👤 User Input]) -->|Submit Event| B[main.js]
    B -->|Validate Fields| C{Valid?}
    C -->|No| D[⚠️ Show Inline Errors]
    C -->|Yes| E[✅ Build Payload]
    E -->|Ready to Extend| F([🔌 Your API Endpoint])

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style C fill:#0a0a0a,color:#FFD700,stroke:#FFD700
    style D fill:#FF0000,color:#fff
    style E fill:#DCDCDC,color:#000
    style F fill:#000,color:#FFD700,stroke:#FFD700
```

---

## 🚀 Quick Start

**Step 1 — Clone the repository**

```bash
git clone https://github.com/NietoDeveloper/RegisterUserFront.git
cd RegisterUserFront
```

**Step 2 — Open it**

No install, no build step. Simply open `index.html` in your browser, or serve it locally for live reload:

```bash
# Optional: serve with any static file server
npx live-server
```

**Step 3 — Customize**

- Edit `css/style.css` to adjust layout, colors, and responsive rules.
- Edit `js/main.js` to change validation rules or connect the form to your own API.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork this repository, open a pull request, or file an issue if you spot a bug or have a suggestion for improving the template.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/NietoDeveloper/RegisterUserFront/blob/main/LICENSE) file for details.

---

## 🔗 Links & Resources

<div align="center">

| Resource | Link |
|:---------|:-----|
| 📂 **GitHub Repository** | [github.com/NietoDeveloper/RegisterUserFront](https://github.com/NietoDeveloper/RegisterUserFront) |
| 👤 **Developer Profile** | [github.com/NietoDeveloper](https://github.com/NietoDeveloper) |
| 🏆 **#1 Colombia Ranking** | [committers.top/colombia](https://committers.top/colombia) |

</div>

---

<div align="center">

[![GitHub Profile](https://img.shields.io/badge/GitHub-NietoDeveloper-000?style=for-the-badge&logo=github&logoColor=FFD700)](https://github.com/NietoDeveloper)
[![MIT License](https://img.shields.io/badge/License-MIT-FFD700?style=for-the-badge)](https://github.com/NietoDeveloper/RegisterUserFront/blob/main/LICENSE)

<br/>

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   "A clean vanilla JS foundation — simple to study,               ║
║    simple to reuse, simple to extend."                            ║
║                                                                    ║
║                               — NietoDeveloper Standard            ║
╚══════════════════════════════════════════════════════════════════╝
```

*RegisterUserFront — Built by **NietoDeveloper · Manuel Nieto***

*Developed with technical rigor in* 📍 **Bogotá, Colombia** 🇨🇴

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=120&section=footer&animation=fadeIn" width="100%"/>

</div>
