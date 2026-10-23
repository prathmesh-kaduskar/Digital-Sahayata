# Digital Sahayata (डिजिटल सहायता)

**Digital Sahayata** is a citizen-centric web application designed to simplify access to digital public services, government schemes, identity verification assistance, and documentation support for citizens across India.

Live Application: [https://digital-sahayata.vercel.app/](https://digital-sahayata.vercel.app/)

---

## 🌟 Key Features

* **Government Schemes Directory:** Comprehensive list and categorizations for central and state citizen assistance schemes.
* **Document Assistance & Checklists:** Step-by-step guidance and requirements for essential documents (e.g., Aadhaar, PAN Card, Voter ID, Ration Card, Income/Caste Certificates).
* **Application Status Tracker:** Centralized portal links and tracking mechanisms for applied services.
* **Multilingual & Accessible Design:** Clean, accessible, and responsive user interface tailored for seamless access across mobile and desktop devices.
* **Direct Official Links:** Curated collection of verified links to official government portals to protect users against phishing and misinformation.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React / Next.js / HTML5 & Modern JavaScript
* **Styling:** Tailwind CSS / CSS3 (Responsive Grid & Flexbox)
* **Icons & Assets:** Lucide Icons / FontAwesome / Feather Icons
* **Deployment & Hosting:** Vercel

---

## 📂 Project Structure

```text
digital-sahayata/
├── public/                 # Static assets, logos, favicons
├── src/
│   ├── assets/             # Images and design assets
│   ├── components/         # Reusable UI components (Navbar, Footer, Cards)
│   ├── pages/              # Routing pages (Home, Services, Schemes, Help)
│   ├── data/               # Static dataset for schemes and documentation steps
│   └── styles/             # Global CSS and Tailwind configurations
├── package.json            # Dependencies and npm scripts
├── tailwind.config.js      # Tailwind CSS styling configuration
└── README.md               # Project documentation
```

---

## 🚀 Local Development Setup

Follow these steps to run the project locally on your machine:

### Prerequisites

* [Node.js](https://nodejs.org/) (v16.x or later)
* `npm` or `yarn` package manager

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/digital-sahayata.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd digital-sahayata
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **View in Browser:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal output).

---

## 🌐 Deployment

The application is optimized for deployment on **Vercel**:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com/) and create a new project.
3. Import your `digital-sahayata` repository.
4. Keep standard default build settings (`npm run build` / `.next` or `dist`).
5. Click **Deploy**.

---

## 📜 License & Disclaimer

This project is created for educational and public-interest informational purposes. **Digital Sahayata** provides helper workflows and links to official government services; it does not claim ownership of official government portals or trademarked services.
