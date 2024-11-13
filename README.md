Max Repair Ranger

Max Repair Ranger is a professional handyman service website created to help Max showcase his skills and offer a seamless user experience for booking appointments, contacting, and learning about the services provided.

screenshots
![Screenshot 2024-11-13 133843](https://github.com/user-attachments/assets/96dd0bbc-7339-4e57-852f-83fb009f7ef4)

![Screenshot 2024-11-13 133956](https://github.com/user-attachments/assets/39f6a3bd-1472-42fd-8a52-4d958a951917)

![Screenshot 2024-11-13 134007](https://github.com/user-attachments/assets/1b703221-f6a9-439e-85cf-0bd9204366c9)

![Screenshot 2024-11-13 134044](https://github.com/user-attachments/assets/bbbc8da8-00f9-4819-8242-f9b048f8814e)



## Features

- **Homepage**: Introduces Max's handyman services, highlights his experience, and showcases customer testimonials.
- **Services Page**: Lists various services offered by Max, such as plumbing, electrical work, furniture assembly, and more.
- **Contact Page**: A contact form for potential clients to reach out and request a quote. The form details are saved to a MySQL database.
- **Appointment Page**: Allows clients to book an appointment online, with their details saved to a MySQL database.
- **Responsive Design**: Fully responsive and user-friendly layout suitable for all devices.

## Technologies Used

- **HTML**: Structure of the website content (no templates).
- **CSS**: Custom styles for a clean and professional look (no CSS frameworks).
- **JavaScript**: Interactive elements, such as form validation for the contact and appointment forms.
- **React**: Reusable components, such as the header, footer, and service list.
- **PHP**: Backend handling for saving contact and appointment details to a MySQL database.
- **MySQL**: Database for storing contact information and appointment requests.

## Installation

### Prerequisites

- Node.js and npm installed
- MySQL server installed
- PHP setup (for form submissions)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/max-repair-ranger.git
   cd max-repair-ranger
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Set up the backend:
   - Create a MySQL database (e.g., `max_repair_ranger_db`).
   - Import the necessary tables (contact and appointments) into the database.
   - Ensure that the PHP files (`submit_contact.php` and `submit_appointment.php`) are configured to connect to the database.

4. Start the development server:

   ```bash
   npm start
   ```

5. The website should now be running at `http://localhost:3000`.

## Folder Structure

```
max-repair-ranger/
│
├── images/
│   ├── background.jpg
│   ├── logo.png
│   └── service1.jpg
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ServiceList.js
│   │   └── TestimonialList.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   └── Appointment.js
│   ├── App.js
│   └── index.js
├── styles/
│   ├── styles.css
├── php/
│   ├── submit_contact.php
│   └── submit_appointment.php
├── index.html
├── services.html
├── contact.html
├── appointment.html
├── script.js
├── package.json
└── README.md
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, feel free to reach out to Max via the contact form on the website or email max@repairranger.com.

```

### Explanation of the `README.md`:

- **Project Name**: Max Repair Ranger – The website's name.
- **Features**: Lists the core features of the website, including a homepage, services page, contact form, and appointment booking.
- **Technologies Used**: A brief summary of the technologies you used to build the website, including React, HTML, CSS, JavaScript, PHP, and MySQL.
- **Installation**: Step-by-step instructions for setting up the project locally, including prerequisites and setup instructions.
- **Folder Structure**: A visual representation of the project's folder organization to help other developers understand how the project is structured.
- **Contributing**: Instructions for how other developers can contribute to the project.
- **License**: Specifies the license type (ISC in this case).
- **Contact**: Information on how users can get in touch with Max (via the contact form or email).
