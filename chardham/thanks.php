<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You | Samast Travel</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS from Index Page -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>

    <!-- ===== Navbar ===== -->
    <nav class="navbar navbar-expand-lg shadow-sm py-1">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.php">
                <img src="./images/icons/main-logo.webp" alt="samast travel" class="main-logo">
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#banner">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#packages">Packages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php#about">About</a>
                    </li>
                </ul>
                <a href="index.php#packages" class="btn btn-primary px-4 d-none d-lg-inline-block">
                    View Packages
                </a>
            </div>
        </div>
    </nav>

    <!-- ===== Thank You Content ===== -->
    <section class="thankyou-section">
        <div class="thankyou-card">
            <!-- Animated SVG Checkmark -->
            <div class="checkmark-wrapper">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>

            <h1 class="thankyou-title">Thank You!</h1>
            <p class="thankyou-subtitle">Your pilgrimage enquiry is successfully registered</p>

            <p class="thankyou-text">
                We have received your request details. Thank you for choosing <strong>Samast Travel</strong>.
                Our Uttarakhand travel expert will call you shortly to customize your perfect Char Dham Yatra.
            </p>

            <!-- Progress Timeline / What's Next -->
            <div class="stepper-container">
                <div class="stepper-title">
                    <i class="fa-solid fa-clock-rotate-left"></i> What Happens Next?
                </div>
                <div class="stepper">
                    <div class="step step-completed">
                        <div class="step-icon">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="step-content">
                            <h4 class="step-label">Enquiry Registered</h4>
                            <p class="step-desc">Your preferences are saved and assigned to a specialized guide.</p>
                        </div>
                    </div>

                    <div class="step step-active">
                        <div class="step-icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div class="step-content">
                            <h4 class="step-label">Expert Consultation Callback</h4>
                            <p class="step-desc">We will connect with you to discuss hotels, route details & dates.</p>
                        </div>
                    </div>

                    <div class="step step-pending">
                        <div class="step-icon">
                            <i class="fa-solid fa-file-pdf"></i>
                        </div>
                        <div class="step-content">
                            <h4 class="step-label">Receive Custom Quote & Itinerary</h4>
                            <p class="step-desc">Get a detailed PDF itinerary with the guaranteed lowest package
                                pricing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Buttons -->
            <div class="thankyou-actions">
                <a href="index.php" class="btn-home">
                    <i class="fa-solid fa-arrow-left me-2"></i> Back to Home
                </a>
                <a href="tel:+918679677152" class="btn-call">
                    Speak to Expert (+91 86796 77152)
                </a>
            </div>

            <!-- Trust Badges -->
            <div class="trust-footer">
                <span>
                    <i class="fa-solid fa-shield-halved me-1"></i> 100% Safe & Secure Booking
                </span>
                <span class="divider">|</span>
                <span>
                    <i class="fa-solid fa-thumbs-up me-1"></i> Verified Local Operators
                </span>
                <span class="divider">|</span>
                <span>
                    <i class="fa-solid fa-headset me-1"></i> 24/7 Live Support
                </span>
            </div>
        </div>
    </section>

    <!-- ==== footer ==== -->
    <footer class="footer">
        <div class="container">

            <div class="footer-top">

                <!-- About -->
                <div class="footer-column">
                    <a href="index.php"><img src="./images/icons/main-logo.webp" alt="samast travel"
                            class="main-logo"></a>
                    <p>
                        Experience the divine spiritual journey of Char Dham Yatra in Uttarakhand. We offer carefully
                        crafted pilgrimage tour packages, comfortable accommodations, and safe transfers for a
                        hassle-free journey.
                    </p>
                </div>

                <!-- Quick Links -->
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="index.php#about">About</a></li>
                        <li><a href="index.php#packages">Tour Packages</a></li>
                    </ul>
                    <h4>Follow Us On:</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/samasttravel" target="_blank" rel="noopener noreferrer"><i
                                class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/samasttravel/" target="_blank" rel="noopener noreferrer"><i
                                class="fab fa-instagram"></i></a>
                    </div>
                </div>

                <!-- Popular Destinations -->
                <div class="footer-column">
                    <h4>Popular Packages</h4>
                    <ul>
                        <li><a href="index.php#complete-chardham-yatra">Char Dham Yatra</a></li>
                        <li><a href="index.php#dodham-yatra">Do Dham Yatra</a></li>
                        <li><a href="index.php#yamunotri-dham">Yamunotri Dham Tour</a></li>
                        <li><a href="index.php#gangotri-dham">Gangotri Dham Tour</a></li>
                        <li><a href="index.php#haridwar-rishikesh">Haridwar Rishikesh</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="footer-column">
                    <h4>Contact Info</h4>

                    <ul class="contact-info">
                        <li>
                            <span><i class="fas fa-map-marker-alt"></i></span>
                            <span>Krishna Niwas, Near SVM School, Vikasnagar, Shimla 171009</span>
                        </li>

                        <li>
                            <span><i class="fas fa-phone"></i></span>
                            <a href="tel:+91-8679677152">
                                <span>+91-8679677152</span>
                            </a>
                        </li>

                        <li>
                            <span><i class="fas fa-envelope"></i></span>
                            <a href="mailto:info@samasttravel.com">
                                <span>info@samasttravel.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="footer-trust-bar">
                <div class="payment-icons">
                    <img src="./images/icons/visa.webp" alt="Visa" class="payment-img">
                    <img src="./images/icons/mastercard.webp" alt="Mastercard" class="payment-img">
                    <img src="./images/icons/rupay.webp" alt="Rupay" class="payment-img">
                    <img src="./images/icons/paypal.webp" alt="PayPal" class="payment-img">
                    <img src="./images/icons/maestro.webp" alt="Maestro" class="payment-img">
                </div>
            </div>

            <div class="footer-bottom">
                <p>
                    © 2026 <strong>Samast Travel | Char Dham Yatra</strong>. All Rights Reserved.
                </p>

                <p>
                    <a href="https://gashwatechnologies.com/" target="_blank" rel="noopener noreferrer"><img
                            src="./images/icons/gt-logo.gif" alt="gashwa technologies" class="gt-logo"></a>
                </p>
            </div>

        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>